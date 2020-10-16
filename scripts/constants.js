//массив карточек по умолчанию
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Попап редактирования профиля
export const popupEditProfile = document.querySelector('.popup_edit-profile');
// Поле "Имя" попапа
export const nameInput = document.querySelector('[name="popup-form-name-profile"]');
// Поле "Профессия" попапа
export const jobInput = document.querySelector('[name="popup-form-job-profile"]');
// Поле "Имени" в разметке
export const profileName = document.querySelector('.profile__title');
// Поле "професси" в разметке
export const profileJob = document.querySelector('.profile__subtitle');
// Кнопка вызова попапа
export const popupOpenButton = document.querySelector('.profile__edit-button');
// Кнопка закрытия попапа
export const popupCloseButton = document.querySelector('.popup__close-edit-button');
// Форма
export const formElement = document.querySelector('.popup__form');
// Форма добавления карточки
export const formElementAddCard = document.querySelector('.popup__form_add-card');
// Попап добавления карточек
export const popupAddCard = document.querySelector('.popup_add-card');
// Поле ввода имени новой карточки
export const inputnameAddCardPopup = document.querySelector('.popup__input_add-card'); 
// Поле ввода ссылки на изображение новой карточки
export const inputlinkiAddCard = document.querySelector('[name="popup-form-url-add-card"]'); 
// Кнопка открытия попапа добавления карточек
export const addCardPopupOpenButton = document.querySelector('.profile__add-button'); 
// Кнопка закрытия попапа 
export const addCardPopupcloseButton = document.querySelector('.popup__close-button_add-card'); 
// Кнопка закрытия изображения
export const popupImageCloseButton = document.querySelector('.popup__close-image-button');
// Кнопка "Создать" папа добавления карточки
export const popupAddCardButtonSave = document.querySelector('.popup__save_add-card');
// Попап с изображением
export const popupImage = document.querySelector('.popup_image-block') 
// Контейнер карточек
export const cards = document.querySelector('.elements');
// Валидация форм
export const configValid = {
        formSelectorProfile: '.popup__form_edit-profile',
        formSelectorAddCard: '.popup__form_add-card',
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__save',
        inactiveButtonClass: 'popup__save_disabled',
        errorClass: 'popup__input-error_active'
        }; 