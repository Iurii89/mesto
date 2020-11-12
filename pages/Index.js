import '../pages/index.css';
import {
  cards,
  nameInput,
  jobInput,
  popupOpenButton,
  addCardPopupOpenButton,
  configValid,
  avatarButton,
  avatarImg,
} from "../utils/constants.js";
import Section from "../components/section.js";
import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";
import Api from "../components/api.js";
import PopupConfirmation from "../components/popupConfirmation.js"

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-17",
  headers: {
    "Content-Type": "application/json",
    authorization: "c9cfa725-aa2a-4626-bb5a-5c5361137c1f"
  },
});

// Открытие картинки
const popupWithImageGoog = new PopupWithImage(".popup_image-block");
popupWithImageGoog.setEventListeners();
const openImagePopup = (name, link) => {
  popupWithImageGoog.open(name, link);
};

// Редактирование профиля
const userProfile = new UserInfo(".profile__title", ".profile__subtitle", ".profile__avatar");

const editFormPopup = new PopupWithForm({
  popupSelector: ".popup_edit-profile",

  formSubmitHandler: (formValues) => {
    editFormPopup.loaderButtonText();
    api.sendEditProfile(formValues);
    userProfile.setUserInfo(formValues);
    editFormPopup.loaderButtonTextReset();
    editFormPopup.close();
  },
});
editFormPopup.setEventListeners();


function editProfile() {
  const getUserInfo = userProfile.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;

  editFormPopup.open();
}

// Загрузка информации о профиле по умолчанию //
api.getUserData()
  .then((data) => {
    userProfile.setUserInfo(data);
    userProfile.getUserAvatar(data);
  });


// Добавление карточки
function newCard(formValues) {
  const addCardNew = new Card(formValues, ".template", openImagePopup, deleteFormPopup, likeIt);
  return addCardNew.getCard();
};

const addFormPopup = new PopupWithForm({
  popupSelector: ".popup_add-card",

  formSubmitHandler: (formValues) => {
    addFormPopup.loaderButtonText();
    api.sendNewCard(formValues).then((result) => {cardDefault.addItem(newCard(result))});
    addFormPopup.loaderButtonTextReset();
    addFormPopup.close();
  },
});
addFormPopup.setEventListeners();

// Удаление карточек
const deleteFormPopup = new PopupConfirmation({
  popupSelector: ".popup_delete",

  onSubmit: (card, cardDom) => {
    api.deleteCard(card._id);
    cardDom.remove();
    deleteFormPopup.close();
  },
});
deleteFormPopup.setEventListeners();

// Обновление аватарки
const editAvatar = new PopupWithForm({
  popupSelector: ".popup_edit-avatar",

  formSubmitHandler: (item) => {
    editAvatar.loaderButtonText();
    api.changeAvatar(item.link);
    avatarImg.src = item.link;
    editAvatar.loaderButtonTextReset();
    editAvatar.close();
  }
})
editAvatar.setEventListeners();
avatarButton.addEventListener('click', () => {editAvatar.open(); formEditAvatar.disablePopupAddCardButtonSave();});

// Лайки
function likeIt(cardLike, cardLikeElement) {
  const likeElement = cardLikeElement.querySelector('.element__like');
  const likeCounter = cardLikeElement.querySelector('.element__like-count');

  api.getCards().then((arr) => {arr.forEach((itemArr) => {

    if (cardLike._id === itemArr._id) {
        
        if (itemArr['likes'].some(function(itemLikes) {return itemLikes._id === "d1ee0a6ceff5b4d0477c73bc"})){
          api.deleteLike(itemArr._id); 
          likeElement.classList.remove('element_like-active');
          likeCounter.innerText --;

        } else {
          api.addLike(itemArr._id); 
          likeElement.classList.add('element_like-active');
          likeCounter.textContent ++;
        };

    }
  })})

}

// Вызов карточек по умолчанию
const cardDefault = new Section(
  {
    renderer: (item) => {
      const newCard = new Card(item, ".template", openImagePopup, deleteFormPopup, likeIt);

      const cardElement = newCard.getCard();

      cardDefault.addItem(cardElement);
    },
  },
  cards
);

api.getCards().then((arr) => {cardDefault.renderItems(arr)});

// Валидация формы смены аватарки пользователя
const formEditAvatar = new FormValidator(
  configValid.formSelectorEditAvatar,
  configValid
);
formEditAvatar.enableValidation();
// Валидация формы редактирования профиля
const formProfileValidator = new FormValidator(
  configValid.formSelectorProfile,
  configValid
);
formProfileValidator.enableValidation();
// Валидация формы добавления карточки
const formAddCardValidator = new FormValidator(
  configValid.formSelectorAddCard,
  configValid
);
formAddCardValidator.enableValidation();

// Слушатель открытия попапа редактирования профиля
popupOpenButton.addEventListener("click", editProfile);
// Слушатель открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener("click", () => {
  addFormPopup.open();
  formAddCardValidator.disablePopupAddCardButtonSave();
});

