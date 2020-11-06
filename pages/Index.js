import '../pages/index.css';
import {
  initialCards,
  cards,
  popupAddCardButtonSave,
  nameInput,
  jobInput,
  popupOpenButton,
  addCardPopupOpenButton,
  configValid,
} from "../utils/constants.js";
import Section from "../components/section.js";
import Card from "../components/card.js";
import FormValidator from "../components/formValidator.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithForm from "../components/popupWithForm.js";
import UserInfo from "../components/userInfo.js";

// Открытие картинки
const popupWithImageGoog = new PopupWithImage(".popup_image-block");
popupWithImageGoog.setEventListeners();

const openImagePopup = (name, link) => {
  popupWithImageGoog.open(name, link);
};

// Редактирование профиля
const userProfile = new UserInfo(".profile__title", ".profile__subtitle");

const editFormPopup = new PopupWithForm({
  popupSelector: ".popup_edit-profile",

  formSubmitHandler: (formValues) => {
    userProfile.setUserInfo(formValues);
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


// Добавление карточки
function newCard(formValues) {
  const addCardNew = new Card(formValues, ".template", openImagePopup);
  return addCardNew.getCard();
};

const addFormPopup = new PopupWithForm({
  popupSelector: ".popup_add-card",

  formSubmitHandler: (formValues) => {
    cardDefault.addItem(newCard(formValues));

    addFormPopup.close();
  },
});
addFormPopup.setEventListeners();


// Вызов карточек по умолчанию
const cardDefault = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item, ".template", openImagePopup);

      const cardElement = newCard.getCard();

      cardDefault.addItem(cardElement);
    },
  },
  cards
);

cardDefault.renderItems();



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
