//массив карточек по умолчанию
export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Поле "Имя" попапа
export const nameInput = document.querySelector(".popup__input_name-profile");
// Поле "Профессия" попапа
export const jobInput = document.querySelector(".popup__input_job-profile");
// Кнопка вызова попапа
export const popupOpenButton = document.querySelector(".profile__edit-button");
// Кнопка открытия попапа добавления карточек
export const addCardPopupOpenButton = document.querySelector(
  ".profile__add-button"
);
// Кнопка "Создать" папа добавления карточки
export const popupAddCardButtonSave = document.querySelector(
  ".popup__save_add-card"
);
// Контейнер карточек
export const cards = document.querySelector(".elements");
// Валидация форм
export const configValid = {
  formSelectorProfile: ".popup__form_edit-profile",
  formSelectorAddCard: ".popup__form_add-card",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  errorClass: "popup__input-error_active",
};
