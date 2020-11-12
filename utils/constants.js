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
// Контейнер карточек
export const cards = document.querySelector(".elements");
// Валидация форм
export const configValid = {
  formSelectorProfile: ".popup__form_edit-profile",
  formSelectorAddCard: ".popup__form_add-card",
  formSelectorEditAvatar: ".popup__form_edit-avatar",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  errorClass: "popup__input-error_active",
};
export const avatarButton = document.querySelector('.profile__avatar-container');
export const avatarImg = document.querySelector('.profile__avatar');