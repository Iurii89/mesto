class Card {
    constructor(data, templateSelector, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }

    // Создаём карточку
    _getCardElement() { 
        const cardElement = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];
        const elementImage = cardElement.querySelector('.element__image');

        cardElement.querySelector('.element__title').innerText = this._name;
        elementImage.alt = this._name;
        elementImage.src = this._link;
        return cardElement;
    }
    
    // Лайки
    _likeIt() {
        this._element.querySelector('.element__like').classList.toggle('element_like-active');
    }

    // Удаляем карточку
    _removeCard() {
        this._element.remove();
        // Затираем ссылку на DOM элемент - это поможет сборщику мусора очистить его из памяти
        this._element = null;
    }

    // Открытие изображения
    _openPopupImage() {
        const popupImage = document.querySelector('.popup_image-block');
        const elementImage = popupImage.querySelector('.popup__image');

        elementImage.src = this._link;
        elementImage.alt = this._name;
        popupImage.querySelector('.popup__image-text').textContent = this._name;
        this._openPopup(popupImage);

    }

    // Слушатерли: удаления/лайки/открытия изображения
    _setListeners() {
        this._element.querySelector('.element__delete').addEventListener('click', () => this._removeCard());
        this._element.querySelector('.element__like').addEventListener('click', () => this._likeIt());
        this._element.querySelector('.element__image').addEventListener('click', () => this._openPopupImage());
    }

    // Кнопка "включения" класса
    getCard() {
        this._element = this._getCardElement();
        this._setListeners();
        return this._element;
    }

};

export default Card;