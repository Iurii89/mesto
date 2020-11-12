import { data } from "autoprefixer";

class Card {
  constructor(data, templateSelector, openImagePopup, deleteFormPopup, likeIt) {
    this._card = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._id = data.owner._id;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
    this._deleteFormPopup = deleteFormPopup;
    this._templateElement = document.querySelector(this._templateSelector);
    this._likeIt = likeIt;
  }

  // Создаём карточку
  _getCardElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true).children[0];
    const elementImage = cardElement.querySelector(".element__image");
    const elementLikesCounter = cardElement.querySelector(".element__like-count");
    const likeImage = cardElement.querySelector(".element__like");

    cardElement.querySelector(".element__title").innerText = this._name;

    if(this._card['likes'].some(function(itemLikes) {return itemLikes._id === "d1ee0a6ceff5b4d0477c73bc"})){
      likeImage.classList.add('element_like-active');
    };

    elementImage.alt = this._name;
    elementImage.src = this._link;
    elementLikesCounter.innerText = this._likes;
    return cardElement;
  }


  // Слушатерли: удаления/лайки/открытия изображения
  _setListeners() {
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => this._deleteFormPopup.open(this._card, this._element));
    this._element
      .querySelector(".element__like")
      .addEventListener("click", () => this._likeIt(this._card, this._element));
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
    if (this._id !== "d1ee0a6ceff5b4d0477c73bc") {
      this._element.querySelector('.element__delete').remove();
    };
    return this._element;
  }
}

export default Card;
