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
//Открытие/закрытие попапа редактирования профила; занесение существующих данных в поля инпутов попапа
const popupEditProfileToggle = () => {
    if (popupEditProfile.classList.contains('popup_is-opened')) { //Есть ли класс?
        popupEditProfile.classList.toggle('popup_is-opened') //Убрать класс
    }
    else {
        popupEditProfile.classList.toggle('popup_is-opened'); //Добавить класс
        nameInput.value = profileName.textContent;//Дублирование текста в попапе (имя)
        jobInput.value = profileJob.textContent;//Дублирование текста в попапе (профессия)
    }
}

//функция "отправки" формы
function formSubmitHandler (evt) { //Работа с формой
    evt.preventDefault() //Не передавать на сервер
    profileName.textContent = nameInput.value; //Поменять имя на странице
    profileJob.textContent = jobInput.value; //Поменять профессию на странице
    popupEditProfileToggle()//закрыть попап по кнопке "Сохранить"
}

// Закрытие попап при нажатии по пустой области
const closePopupEditProfileClickOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return
    }
    popupEditProfileToggle(event)
};


//СЛУШАТЕЛИ
// Вызов функции открытия попапа
popupOpenButton.addEventListener('click', popupEditProfileToggle)

// Вызов функции закрытия попапа
popupCloseButton.addEventListener('click', popupEditProfileToggle)

// Вызов функции "отправки" формы
formElement.addEventListener('submit', formSubmitHandler);

//Вызов функции закрытия попапа при нажатии по пустой области
popupEditProfile.addEventListener('click', closePopupEditProfileClickOverlay);



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
    boxCards.appendChild(addCard);
}

// Вызываем перебор массива
render();

                            //ВЫЗОВ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ

// Переменные
const popupAddCard = document.querySelector('.popup_add-card'); //попап добавления карточек
const addCardPopupOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия попапа добавления карточек
const addCardPopupcloseButton = document.querySelector('.popup__close-button_add-card'); //кнопка закрытия попапа 


// функция открытия/закрытия/очистки инпутов попапа добавления карточек
const popupAddCardToggle = () => {
    if (popupAddCard.classList.contains('popup_is-opened')) { //Есть ли класс?
        popupAddCard.classList.toggle('popup_is-opened') //Убрать класс
    }
    else {
        popupAddCard.classList.toggle('popup_is-opened'); //Добавить класс
        inputnameAddCardPopup.value = ""; //Очистка инпута имени
        inputlinkiAddCard.value = ""; //Очистка инпута ссылки
    
    }
};

// Вызов функции открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener('click', popupAddCardToggle);
// Вызов функции закрытия попапа добавления карточек
addCardPopupcloseButton.addEventListener('click', popupAddCardToggle);

                            //ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ

const inputnameAddCardPopup = document.querySelector('[name="popup-form-name-add-card"]'); //Поле ввода имени
const inputlinkiAddCard = document.querySelector('[name="popup-form-url-add-card"]'); //Поле ввода ссылки

//Функция добавления карточки с заполненными инпутами
const addCardByUser = () => {
    const newCardByUser = tamplateCard.cloneNode(true);
    newCardByUser.querySelector('.element__title').innerText = inputnameAddCardPopup.value;
    newCardByUser.querySelector('.element__image').alt = inputnameAddCardPopup.value;
    newCardByUser.querySelector('.element__image').src = inputlinkiAddCard.value;
    boxCards.prepend(newCardByUser);
};

// Переменная формы попапа добавления новых карточек
const formAddCard = popupAddCard.querySelector('.popup__form');

// Функция формы
function formAddCardSubmit (evt) {
    evt.preventDefault(); //Не передавать на сервер
    addCardByUser(); //Добавление новой карточки
    popupAddCardToggle(); //Закрыть попап
}

formAddCard.addEventListener('submit', formAddCardSubmit); // Подключение слушателя на форму добавление карточки пользователем


                            // УДАЛЕНИЕ КАРТОЧКИ

const deleteCardButton = document.querySelectorAll('.element__delete');

const deleteCard = 


/*deleteCardButton.forEach(item => item.addEventListener('click', function() {
    item.parentElement.remove();
}));*/






//Вторая часть с индексами

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
//Открытие/закрытие попапа редактирования профила; занесение существующих данных в поля инпутов попапа
const popupEditProfileToggle = () => {
    if (popupEditProfile.classList.contains('popup_is-opened')) { //Есть ли класс?
        popupEditProfile.classList.toggle('popup_is-opened') //Убрать класс
    }
    else {
        popupEditProfile.classList.toggle('popup_is-opened'); //Добавить класс
        nameInput.value = profileName.textContent;//Дублирование текста в попапе (имя)
        jobInput.value = profileJob.textContent;//Дублирование текста в попапе (профессия)
    }
}

//функция "отправки" формы
function formSubmitHandler (evt) { //Работа с формой
    evt.preventDefault() //Не передавать на сервер
    profileName.textContent = nameInput.value; //Поменять имя на странице
    profileJob.textContent = jobInput.value; //Поменять профессию на странице
    popupEditProfileToggle()//закрыть попап по кнопке "Сохранить"
}

// Закрытие попап при нажатии по пустой области
const closePopupEditProfileClickOverlay = (event) => {
    if (event.target !== event.currentTarget) {
        return
    }
    popupEditProfileToggle(event)
};


//СЛУШАТЕЛИ
// Вызов функции открытия попапа
popupOpenButton.addEventListener('click', popupEditProfileToggle)

// Вызов функции закрытия попапа
popupCloseButton.addEventListener('click', popupEditProfileToggle)

// Вызов функции "отправки" формы
formElement.addEventListener('submit', formSubmitHandler);

//Вызов функции закрытия попапа при нажатии по пустой области
popupEditProfile.addEventListener('click', closePopupEditProfileClickOverlay);



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
    setListeners();
}

// Вызов 6 карточек
function renderItem({name, link}, index) {
    const addCard = tamplateCard.cloneNode(true);
    addCard.querySelector('.element__title').innerText = name; 
    addCard.querySelector('.element__image').alt = name; 
    addCard.querySelector('.element__image').src = link;
    addCard.querySelector('.element').setAttribute('id', index);
    boxCards.appendChild(addCard);
}

// Вызываем перебор массива
render();

                            //ВЫЗОВ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ

// Переменные
const popupAddCard = document.querySelector('.popup_add-card'); //попап добавления карточек
const addCardPopupOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия попапа добавления карточек
const addCardPopupcloseButton = document.querySelector('.popup__close-button_add-card'); //кнопка закрытия попапа 


// функция открытия/закрытия/очистки инпутов попапа добавления карточек
const popupAddCardToggle = () => {
    if (popupAddCard.classList.contains('popup_is-opened')) { //Есть ли класс?
        popupAddCard.classList.toggle('popup_is-opened') //Убрать класс
    }
    else {
        popupAddCard.classList.toggle('popup_is-opened'); //Добавить класс
        inputnameAddCardPopup.value = ""; //Очистка инпута имени
        inputlinkiAddCard.value = ""; //Очистка инпута ссылки
    
    }
};

// Вызов функции открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener('click', popupAddCardToggle);
// Вызов функции закрытия попапа добавления карточек
addCardPopupcloseButton.addEventListener('click', popupAddCardToggle);

                            //ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ

const inputnameAddCardPopup = document.querySelector('[name="popup-form-name-add-card"]'); //Поле ввода имени
const inputlinkiAddCard = document.querySelector('[name="popup-form-url-add-card"]'); //Поле ввода ссылки

//Функция добавления карточки с заполненными инпутами
const addCardByUser = () => {
    const newCardByUser = tamplateCard.cloneNode(true);
    newCardByUser.querySelector('.element__title').innerText = inputnameAddCardPopup.value;
    newCardByUser.querySelector('.element__image').alt = inputnameAddCardPopup.value;
    newCardByUser.querySelector('.element__image').src = inputlinkiAddCard.value;
    boxCards.prepend(newCardByUser);
};

// Переменная формы попапа добавления новых карточек
const formAddCard = popupAddCard.querySelector('.popup__form');

// Функция формы
function formAddCardSubmit (evt) {
    evt.preventDefault(); //Не передавать на сервер
    addCardByUser(); //Добавление новой карточки
    popupAddCardToggle(); //Закрыть попап
}

formAddCard.addEventListener('submit', formAddCardSubmit); // Подключение слушателя на форму добавление карточки пользователем


                            // УДАЛЕНИЕ КАРТОЧКИ

                            
function deleteCard(event) {
    const index = event.target.parentNode.getAttribute('id');
    initialCards.splice(index, 1);
    render()
}



function setListeners () {
    const deleteCardButton = document.querySelectorAll('.element__delete');
    deleteCardButton.forEach((btn) => {
        btn.addEventListener('click', deleteCard)
    });
}

render()



//Просто вариант, не работает при добавлении новых карточек:


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
function renderItem({name, link}, index) {
    const addCard = tamplateCard.cloneNode(true);
    addCard.querySelector('.element__title').innerText = name; 
    addCard.querySelector('.element__image').alt = name; 
    addCard.querySelector('.element__image').src = link;
    boxCards.appendChild(addCard);
}

// Вызываем перебор массива
render();

                            //ВЫЗОВ ПОПАПА ДОБАВЛЕНИЯ КАРТОЧЕК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ

// Переменные
const popupAddCard = document.querySelector('.popup_add-card'); //попап добавления карточек
const addCardPopupOpenButton = document.querySelector('.profile__add-button'); //кнопка открытия попапа добавления карточек
const addCardPopupcloseButton = document.querySelector('.popup__close-button_add-card'); //кнопка закрытия попапа 


// функция открытия/закрытия/очистки инпутов попапа добавления карточек
const popupAddCardToggle = () => {
    if (popupAddCard.classList.contains('popup_is-opened')) { //Есть ли класс?
        popupAddCard.classList.toggle('popup_is-opened') //Убрать класс
    }
    else {
        popupAddCard.classList.toggle('popup_is-opened'); //Добавить класс
        inputnameAddCardPopup.value = ""; //Очистка инпута имени
        inputlinkiAddCard.value = ""; //Очистка инпута ссылки
    
    }
};

// Вызов функции открытия попапа добавления карточек
addCardPopupOpenButton.addEventListener('click', popupAddCardToggle);
// Вызов функции закрытия попапа добавления карточек
addCardPopupcloseButton.addEventListener('click', popupAddCardToggle);

                            //ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ

const inputnameAddCardPopup = document.querySelector('[name="popup-form-name-add-card"]'); //Поле ввода имени
const inputlinkiAddCard = document.querySelector('[name="popup-form-url-add-card"]'); //Поле ввода ссылки

//Функция добавления карточки с заполненными инпутами
const addCardByUser = () => {
    const newCardByUser = tamplateCard.cloneNode(true);
    newCardByUser.querySelector('.element__title').innerText = inputnameAddCardPopup.value;
    newCardByUser.querySelector('.element__image').alt = inputnameAddCardPopup.value;
    newCardByUser.querySelector('.element__image').src = inputlinkiAddCard.value;
    boxCards.prepend(newCardByUser);
};

// Переменная формы попапа добавления новых карточек
const formAddCard = popupAddCard.querySelector('.popup__form');

// Функция формы
function formAddCardSubmit (evt) {
    evt.preventDefault(); //Не передавать на сервер
    addCardByUser(); //Добавление новой карточки
    popupAddCardToggle(); //Закрыть попап
}

formAddCard.addEventListener('submit', formAddCardSubmit); // Подключение слушателя на форму добавление карточки пользователем


                            // УДАЛЕНИЕ КАРТОЧКИ

                            

const deleteCardButton = document.querySelectorAll('.element__delete');

function del () { deleteCardButton.forEach((del) => del.addEventListener('click', function() {
    del.parentElement.remove();
}))};

del ()