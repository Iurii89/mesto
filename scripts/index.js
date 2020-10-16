import {initialCards, popupEditProfile, cards, popupAddCardButtonSave, nameInput, jobInput, profileName, profileJob, popupOpenButton, popupCloseButton, formElement, formElementAddCard, popupAddCard, inputnameAddCardPopup, inputlinkiAddCard, addCardPopupOpenButton, addCardPopupcloseButton, popupImageCloseButton, popupImage, configValid} from './constants.js';
import Card from './card.js';
import FormValidator from './formValidator.js';


//Открытие попапов
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', exitOnEscInnerListener);
};


//Закрытие попапов
const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', exitOnEscInnerListener);
};


//Открытие попап редактирования профиля
const openEditPopup = () => {
    openPopup(popupEditProfile); //Открытие
    
    nameInput.value = profileName.textContent;//Дублирование текста в попапе (имя)
    jobInput.value = profileJob.textContent;//Дублирование текста в попапе (профессия)
};


//функция отправки формы
function formSubmitHandler (evt) { //Работа с формой
    evt.preventDefault() //Не передавать на сервер
    
    profileName.textContent = nameInput.value; //Поменять имя на странице
    profileJob.textContent = jobInput.value; //Поменять профессию на странице
    
    closePopup(popupEditProfile) //закрыть попап по кнопке "Сохранить"
}


//Функция открытия/закрытия попапа добавления карточки
const openAddCardPopup = () => {
    formElementAddCard.reset();
    disablePopupAddCardButtonSave();
    openPopup(popupAddCard);
};
// Отключение кнопки "Создать" попапа добавления новой карточки
const disablePopupAddCardButtonSave = () => {
    popupAddCardButtonSave.classList.add(configValid.inactiveButtonClass);
    popupAddCardButtonSave.setAttribute('disabled', true);
};

// Закрыть попап по Overlay
const closePopupByOverlay = (evt) => {
    if (evt.target == evt.currentTarget) {
        const popup = document.querySelector('.popup_is-opened');
        
        closePopup(popup);
    }
};


// Функция закрытия попапов по кнопке Esc
const exitOnEscInnerListener = (evt) => {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        
        closePopup(popup);
    };
};

// Добавление карточки на страницу(контейнер)
const addCardToContainer = (element) => {
    cards.prepend(element);
};

// вызываем по умолчанию 6 карточек
initialCards.forEach((initialCardsElement) => {
    const cardDefault = new Card(initialCardsElement, '.template', openPopup);
    
    addCardToContainer(cardDefault.getCard());
});


// Добавляем новую карточку 
function formAddCardSubmit (evt) {
    evt.preventDefault();
    
    const newCard = {
        name: inputnameAddCardPopup.value,
        link: inputlinkiAddCard.value,
    };
    const cardAdd = new Card(newCard, '.template', openPopup);
    
    addCardToContainer(cardAdd.getCard());
    closePopup(popupAddCard);
}


// Валидация формы редактирования профиля
const formProfileValidator = new FormValidator(configValid.formSelectorProfile, configValid);
formProfileValidator.enableValidation();
// Валидация формы добавления карточки
const formAddCardValidator = new FormValidator(configValid.formSelectorAddCard, configValid);
formAddCardValidator.enableValidation();




// Слушатель открытия попапа
popupOpenButton.addEventListener('click', openEditPopup);
// Слушатель закрытия попапа
popupCloseButton.addEventListener('click', () => {closePopup(popupEditProfile)});
// Слушатель отправки формы
formElement.addEventListener('submit', formSubmitHandler);
// Слушатель открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener('click', openAddCardPopup);
// Слушатель закрытия попапа добавления карточек
addCardPopupcloseButton.addEventListener('click', () => {closePopup(popupAddCard)});
// Слушатель закрытия попапа изображения
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));
// Вызываем слушатели закртыия по Overlay
popupEditProfile.addEventListener('click', closePopupByOverlay);
popupAddCard.addEventListener('click', closePopupByOverlay);
popupImage.addEventListener('click', closePopupByOverlay);
// Слушатель отправки формы создания новой карточки
popupAddCard.addEventListener('submit', formAddCardSubmit);