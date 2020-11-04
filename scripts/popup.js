class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupByOverlay = this._closePopupByOverlay.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_is-opened");

    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    document
      .querySelector(this._popupSelector)
      .classList.remove("popup_is-opened");

    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    const popupOpened = document.querySelector(".popup_is-opened");
    if (evt.key === "Escape") {
      this.close(popupOpened);
    }
  }

  _closePopupByOverlay(evt) {
    const popupOpened = document.querySelector(".popup_is-opened");
    if (evt.target == evt.currentTarget) {
      this.close(popupOpened);
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );

    closeButton.addEventListener("click", () => {
      this.close();
    });

    document
      .querySelector(this._popupSelector)
      .addEventListener("mousedown", this._closePopupByOverlay);
  }
}

export default Popup;
