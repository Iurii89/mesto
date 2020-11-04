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
} from "./constants.js";
import Section from "./section.js";
import Card from "./card.js";
import FormValidator from "./formValidator.js";
import PopupWitchImage from "./popupWithImage.js";
import PopupWithForm from "./popupWithForm.js";
import UserInfo from "./userInfo.js";

// Открытие картинки
const popupWitchImageGoog = new PopupWitchImage(".popup_image-block");
const openImagePopup = (name, link) => {
  popupWitchImageGoog.open(name, link);
  popupWitchImageGoog.setEventListeners();
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
  nameInput.value = userProfile.getUserInfo().name;
  jobInput.value = userProfile.getUserInfo().job;

  editFormPopup.open();
}


// Добавление карточки
const addFormPopup = new PopupWithForm({
  popupSelector: ".popup_add-card",

  formSubmitHandler: (formValues) => {
    const addCardNew = new Card(formValues, ".template", openImagePopup);

    const cardElement = addCardNew.getCard();
    cardDefault.addItem(cardElement);
    addFormPopup.close();
  },
});
addFormPopup.setEventListeners();


// Вызов карточек по умолчанию
const cardDefault = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const visualizeElement = new Card(item, ".template", openImagePopup);

      const cardElement = visualizeElement.getCard();

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

// Отключение кнопки "Создать" попапа добавления новой карточки
const disablePopupAddCardButtonSave = () => {
  popupAddCardButtonSave.classList.add(configValid.inactiveButtonClass);
  popupAddCardButtonSave.setAttribute("disabled", true);
};



// Слушатель открытия попапа редактирования профиля
popupOpenButton.addEventListener("click", editProfile);
// Слушатель открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener("click", () => {
  addFormPopup.open();
  disablePopupAddCardButtonSave();
});
