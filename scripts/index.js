const popup = document.querySelector('.popup') //Сам попап
const popupOpenButton = document.querySelector('.profile__edit-button') //Кнопка вызова попапа
const popupCloseButton = document.querySelector('.popup__close-button') //Кнопка закрытия попапа
const nameInput = document.querySelector('[name="popup-form-name"]');//Поле Имя попапа
const jobInput = document.querySelector('[name="popup-form-job"]');//Поле Профессия попапа
const profileName = document.querySelector('.profile__title');//Поле Имени в разметке
const profileJob = document.querySelector('.profile__subtitle');//Поле професси в разметке
const formElement = document.querySelector('.popup__form');  // Форма

//ФУНКЦИИ
//Функция дублирования текста в инпуты (при открытии)
const defaultInputValue = function () {
nameInput.value = profileName.textContent;//Дублирование текста в попапе (имя)
jobInput.value = profileJob.textContent;//Дублирование текста в попапе (профессия)
}

//Функция открытия/закрытия попапа
const popupToggle = function () {
    popup.classList.toggle('popup_is-opened')
}

//функция "отправки" формы
function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupToggle()//закрыть попап по кнопке "Сохранить"
}

//СЛУШАТЕЛИ
// Вызов функции открытия попапа
popupOpenButton.addEventListener('click', popupToggle)

// Вызов функции закрытия попапа
popupCloseButton.addEventListener('click', popupToggle)

//Вывоз функции дублирования текста в инпуты (при открытии)
popupOpenButton.addEventListener('click', defaultInputValue);

// Вызов функции "отправки" формы
formElement.addEventListener('submit', formSubmitHandler);