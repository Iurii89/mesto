//Открытие попапов
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    exitOnEcs();
}
//Закрытие попапов
const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', exitOnEscInnerListener);
}

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

// Вызов функции открытия попапа
popupOpenButton.addEventListener('click', openEditPopup);

// Вызов функции закрытия попапа
popupCloseButton.addEventListener('click', () => {closePopup(popupEditProfile)});

// Вызов функции "отправки" формы
formElement.addEventListener('submit', formSubmitHandler);


//Удаление карточки
const removeCard = (event) => {
    event.preventDefault();
    event.target.closest('.element').remove();
}

//Лайки
const likeIt = (event) => {
    event.preventDefault();
    event.target.classList.toggle('element_like-active');
}


//Открытие попапа картинки
function openPopupImage (event) {
    event.preventDefault();
    const img = event.target.closest('.element__image');
    const txt = event.target.closest('.element');
    popupImageLinkAndAlt.src = img.src;
    popupImageLinkAndAlt.alt = img.alt;
    popupImageText.textContent = txt.textContent;
    openPopup(popupImage);
};

// Слушатель закрытия попапа по кнопке
popupImageCloseButton.addEventListener('click', closePopupImage);


//Закрытие попапа картинки
function closePopupImage () {
    closePopup(popupImage)
};


//Вызов сразу 3 слушателей: удаление/лайк/открытие фото
const addListener = (card) => {
    card.querySelector('.element__delete').addEventListener('click', removeCard);

    card.querySelector('.element__like').addEventListener('click', likeIt);

    card.querySelector('.element__image').addEventListener('click', openPopupImage);
};




//Генерируем карточку
const getCardElement = ({name, link}) => {
    const cardElement = templateCard.cloneNode(true);
    cardElement.querySelector('.element__title').innerText = name; 
    cardElement.querySelector('.element__image').alt = name; 
    cardElement.querySelector('.element__image').src = link;
    addListener(cardElement);
    return cardElement;
};

//Добавление карточки в разметку
const renderCards = (data) => {
    const addBoxCards = getCardElement(data);
    boxCards.prepend(addBoxCards);
}
//Перебор "массива по умолчанию"
function render () {
    initialCards.forEach(renderCards);
};
//Запускаем функкцию генерирования карточек из "массива по умолчанию"
render();


//Функция открытия/закрытия попапа добавления карточки
const openAddCardPopup = () => {
    openPopup(popupAddCard); //Не передавать на сервер
    inputnameAddCardPopup.reset; //Очистка инпута имени
    inputlinkiAddCard.reset; //Очистка инпута ссылки
};
// Слушатель открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener('click', openAddCardPopup);
// Слушатель закрытия попапа добавления карточек
addCardPopupcloseButton.addEventListener('click', () => {closePopup(popupAddCard)});



// Форма добавления новой карточки
function formAddCardSubmit (evt) {
    evt.preventDefault(); //Не передавать на сервер
    const nameNewCard = inputnameAddCardPopup.value; //имя
    const linkNewCard = inputlinkiAddCard.value; //ссылка
    const addCardByUser = {name: nameNewCard, link: linkNewCard}; //элемент карточки
    closePopup(popupAddCard); //закрытие попапа добавления новой карточки
    renderCards(addCardByUser); //запускаем генерацию новой карточки
}
//Слушатель отправки формы
formAddCard.addEventListener('submit', formAddCardSubmit);

// Закрыть попап по Overlay
const closePopupByOverlay = (evt) => {
    if (evt.target == evt.currentTarget) {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
};
// Вызываем слушатели закртыия по Overlay
popupEditProfile.addEventListener('click', closePopupByOverlay);
popupAddCard.addEventListener('click', closePopupByOverlay);
popupImage.addEventListener('click', closePopupByOverlay);


// Функция закрытия попапов по кнопке Esc
const exitOnEscInnerListener = (evt) => {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    };
};

// Вызываем слушателя закрытия попапов по кнопке Esc
const exitOnEcs = () => {
    document.addEventListener('keydown', exitOnEscInnerListener)
};
