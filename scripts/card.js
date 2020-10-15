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
        cardElement.querySelector('.element__title').innerText = this._name;
        cardElement.querySelector('.element__image').alt = this._name;
        cardElement.querySelector('.element__image').src = this._link;
        return cardElement;
    }
    // Добавляем в карточку в DOM
    _renderCards() {
        document.querySelector('.elements').prepend(this._element);
    }

    // Лайки
    _likeIt() {
        this._element.querySelector('.element__like').classList.toggle('element_like-active');
    }

    // Удаляем карточку
    _removeCard() {
        this._element.remove();
    }

    // Открытие изображения
    _openPopupImage() {
        const popupImage = document.querySelector('.popup_image-block');
        popupImage.querySelector('.popup__image').src = this._link;
        popupImage.querySelector('.popup__image').alt = this._name;
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
        this._renderCards();
        this._setListeners();
    }

};

export default Card;