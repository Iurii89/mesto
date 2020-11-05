class Card {
  constructor(data, templateSelector, openImagePopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
  }

  // Создаём карточку
  _getCardElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true).children[0];
    const elementImage = cardElement.querySelector(".element__image");

    cardElement.querySelector(".element__title").innerText = this._name;
    elementImage.alt = this._name;
    elementImage.src = this._link;
    return cardElement;
  }

  // Лайки
  _likeIt() {
    this._element
      .querySelector(".element__like")
      .classList.toggle("element_like-active");
  }

  // Удаляем карточку
  _removeCard() {
    this._element.remove();
    // Затираем ссылку на DOM элемент - это поможет сборщику мусора очистить его из памяти
    this._element = null;
  }

  // Слушатерли: удаления/лайки/открытия изображения
  _setListeners() {
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => this._removeCard());
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => this._likeIt());
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () =>
        this._openImagePopup(this._name, this._link)
      );
  }

  // Кнопка "включения" класса
  getCard() {
    this._element = this._getCardElement();
    this._setListeners();
    return this._element;
  }
}

export default Card;
