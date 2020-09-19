                                 // 1 ЧАСТЬ СПРИНТА

//ПЕРЕМЕННЫЕ
const popupEditProfile = document.querySelector('.popup_edit-profile') //Попап редактирования профиля
const popupOpenButton = document.querySelector('.profile__edit-button') //Кнопка вызова попапа
const popupCloseButton = document.querySelector('.popup__close-button') //Кнопка закрытия попапа
const nameInput = document.querySelector('[name="popup-form-name-profile"]');//Поле Имя попапа
const jobInput = document.querySelector('[name="popup-form-job-profile"]');//Поле Профессия попапа
const profileName = document.querySelector('.profile__title');//Поле Имени в разметке
const profileJob = document.querySelector('.profile__subtitle');//Поле професси в разметке
const formElement = document.querySelector('.popup__form');  // Форма


//ФУНКЦИИ
//функция открытия для всех попапов
const openPopup = (popup) => {
    if (popup.classList.contains('popup_is-opened')) { //Есть ли класс?
        popup.classList.toggle('popup_is-opened') //Убрать класс
    }
    else {
        popup.classList.toggle('popup_is-opened'); //Добавить класс
    }
}

//Открываем попап редактирования профиля
const openEditPopup = () => {
    openPopup(popupEditProfile); //Открытие/закрытие попапа
    nameInput.value = profileName.textContent;//Дублирование текста в попапе (имя)
    jobInput.value = profileJob.textContent;//Дублирование текста в попапе (профессия)
};

//функция "отправки" формы
function formSubmitHandler (evt) { //Работа с формой
    evt.preventDefault() //Не передавать на сервер
    profileName.textContent = nameInput.value; //Поменять имя на странице
    profileJob.textContent = jobInput.value; //Поменять профессию на странице
    openPopup(popupEditProfile);//закрыть попап по кнопке "Сохранить"
}

//СЛУШАТЕЛИ
// Вызов функции открытия попапа
popupOpenButton.addEventListener('click', openEditPopup);

// Вызов функции закрытия попапа
popupCloseButton.addEventListener('click', openEditPopup);

// Вызов функции "отправки" формы
formElement.addEventListener('submit', formSubmitHandler);



                                //2 ЧАСТЬ СПРИНТА

//массив карточек по умолчанию
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
const tamplateCard = document.querySelector('.tamplate').content; // template

                     //ДОБАВЛЕНИЕ 6 КАРТОЧЕК С ЗАГРУЗКОЙ СТРАНИЦЫ

// Перебор элементов массива
function render () {
    initialCards.forEach(renderItem);
}

// Вызов 6 карточек
function renderItem({name, link}) {
    const addCard = tamplateCard.cloneNode(true);
    addCard.querySelector('.element__title').innerText = name; 
    addCard.querySelector('.element__image').alt = name; 
    addCard.querySelector('.element__image').src = link;
    boxCards.prepend(addCard);
}
render();

const popupAddCard = document.querySelector('.popup_add-card'); //попап добавления карточек
const addCardPopupOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия попапа добавления карточек
const addCardPopupcloseButton = document.querySelector('.popup__close-button_add-card'); //кнопка закрытия попапа 
const inputnameAddCardPopup = document.querySelector('[name="popup-form-name-add-card"]'); //Поле ввода имени
const inputlinkiAddCard = document.querySelector('[name="popup-form-url-add-card"]'); //Поле ввода ссылки

//Функция открытия/закрытия попапа добавления карточки
const openAddCardPopup = () => {
    openPopup(popupAddCard);
    inputnameAddCardPopup.value = ""; //Очистка инпута имени
    inputlinkiAddCard.value = ""; //Очистка инпута ссылки
};
// Слушатель открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener('click', openAddCardPopup);
// Слушатель закрытия попапа добавления карточек
addCardPopupcloseButton.addEventListener('click', openAddCardPopup);

// Переменная формы попапа добавления новых карточек
const formAddCard = popupAddCard.querySelector('.popup__form');
// Функция формы добавления карточки
function formAddCardSubmit (evt) {
    evt.preventDefault();
    const nameNewCard = inputnameAddCardPopup.value;
    const linkNewCard = inputlinkiAddCard.value;
    const addCardByUser = {name: nameNewCard, link: linkNewCard};
    openPopup(popupAddCard);
    renderItem(addCardByUser);
    deleteListeners();
    likeListeners();
    imageView();
}
formAddCard.addEventListener('submit', formAddCardSubmit);


//Удаление из вне (запускается в самом конце и внутри обработчика создания новых карточек)
const removeCard = (event) => {
    event.preventDefault();
    event.target.closest('.element').remove();
}
const deleteListeners = () => {
    const deleteCardButton = document.querySelectorAll('.element__delete');
    deleteCardButton.forEach(button => button.addEventListener('click', removeCard));
}
deleteListeners();


//Лайки (запускается в самом конце и внутри обработчика создания новых карточек)
const likeIt = (event) => {
    event.preventDefault();
    event.target.classList.toggle('element_like-active');
}

const likeListeners = () => {
    const likeButton = document.querySelectorAll('.element__like');
    likeButton.forEach(button => button.addEventListener('click', likeIt));
}

likeListeners()



const popupImage = document.querySelector('.popup_image-block') //попап с изображением
const popupImageCloseButton = document.querySelector('.popup__close-image-button') //Кнопка закрытия изображения
const popupImageLinkAndAlt = document.querySelector('.popup__image');
const popupImageText = document.querySelector('.popup__image-text');

function openPopupImage (event) {
    event.preventDefault();
    const img = event.target.closest('.element__image');
    const txt = event.target.closest('.element');
    openPopup(popupImage);
    popupImageLinkAndAlt.src = img.src;
    popupImageLinkAndAlt.alt = img.alt;
    popupImageText.textContent = txt.textContent;
};

function closePopupImage () {
    openPopup(popupImage)
};

const imageView = () => {
const elementImage = document.querySelectorAll('.element__image');
elementImage.forEach(but => but.addEventListener('click', openPopupImage));

popupImageCloseButton.addEventListener('click', closePopupImage);
};

imageView();