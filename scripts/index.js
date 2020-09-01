const popup = document.querySelector('.popup') //Сам попап
const popupOpenButton = document.querySelector('.js-profile__open-popup') //Кнопка вызова попапа
const popupCloseButton = document.querySelector('.js-popup__close') //Кнопка закрытия попапа


const nameInput = document.querySelector('.popup__name');//Поле Имя попапа
const jobInput = document.querySelector('.popup__job');//Поле Профессия попапа
const profileName = document.querySelector('.profile__title');//Поле Имени в разметке
const profileJob = document.querySelector('.profile__subtitle');//Поле професси в разметке
nameInput.value = profileName.textContent;//Дублирование текста в попапе (имя)
jobInput.value = profileJob.textContent;//Дублирование текста в попапе (профессия)

//Функция открытия попапа
const popupToggle = function () {
    popup.classList.toggle('popup_is-opened')
}

// Открытие попапа при помощи метода addEventListener
popupOpenButton.addEventListener('click', popupToggle)
// Закрытие попапа при помощи метода addEventListener
popupCloseButton.addEventListener('click', popupToggle)



// Константа формы
const formElement = document.querySelector('.popup__form')  // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault() // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM (указаны выше, дублирую прос так в комментах)
    /*const nameInput = document.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
    const jobInput = document.querySelector('.popup__job'); // Воспользуйтесь инструментом .querySelector()*/

    // Получите значение полей из свойства value
    const getNameValue = nameInput.value;
    const getJobValue = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей (указаны выше, дублирую прос так в комментах)
    /*const profileName = document.querySelector('.profile__title');
    const profileJob = document.querySelector('.profile__subtitle');*/
    // Вставьте новые значения с помощью textContent
    profileName.textContent = getNameValue;
    profileJob.textContent = getJobValue;
    popupToggle()//закрыть попап по кнопке "Сохранить"
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);