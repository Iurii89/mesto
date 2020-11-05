class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupByOverlay = this._closePopupByOverlay.bind(this);
    this._popupOpened = document.querySelector(".popup_is-opened");
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._popupImageSelectorTitle = this._popupElement.querySelector(".popup__image-text");
    this._popupImageSelectorSrc = this._popupElement.querySelector(".popup__image");
  }

  open() {
    this._popupElement.classList.add("popup_is-opened");

    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement
      .classList.remove("popup_is-opened");

    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(this._popupOpened);
    }
  }

  _closePopupByOverlay(evt) {
    if (evt.target == evt.currentTarget) {
      this.close(this._popupOpened);
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );

    closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popupElement
      .addEventListener("mousedown", this._closePopupByOverlay);
  }
}

export default Popup;
