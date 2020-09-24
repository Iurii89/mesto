const popupEditProfile = document.querySelector('.popup_edit-profile') //Попап редактирования профиля
const popupOpenButton = document.querySelector('.profile__edit-button') //Кнопка вызова попапа
const popupCloseButton = document.querySelector('.popup__close-edit-button') //Кнопка закрытия попапа
const nameInput = document.querySelector('[name="popup-form-name-profile"]');//Поле Имя попапа
const jobInput = document.querySelector('[name="popup-form-job-profile"]');//Поле Профессия попапа
const profileName = document.querySelector('.profile__title');//Поле Имени в разметке
const profileJob = document.querySelector('.profile__subtitle');//Поле професси в разметке
const formElement = document.querySelector('.popup__form');  // Форма

////массив карточек по умолчанию
const initialCards = [
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


const boxCards = document.querySelector('.elements'); //контейнер с карточками
const templateCard = document.querySelector('.template').content; // template
const popupImage = document.querySelector('.popup_image-block') //попап с изображением
const popupImageCloseButton = document.querySelector('.popup__close-image-button') //Кнопка закрытия изображения
const popupImageLinkAndAlt = document.querySelector('.popup__image'); //само изображение
const popupImageText = document.querySelector('.popup__image-text'); //подпись под изображением

const popupAddCard = document.querySelector('.popup_add-card'); //попап добавления карточек
const addCardPopupOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия попапа добавления карточек
const addCardPopupcloseButton = document.querySelector('.popup__close-button_add-card'); //кнопка закрытия попапа 
const inputnameAddCardPopup = document.querySelector('[name="popup-form-name-add-card"]'); //Поле ввода имени
const inputlinkiAddCard = document.querySelector('[name="popup-form-url-add-card"]'); //Поле ввода ссылки

const formAddCard = popupAddCard.querySelector('.popup__form');// Переменная формы попапа добавления новых карточек
