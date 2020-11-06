import Popup from "./popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageSelectorSrc = this._popupElement.querySelector(".popup__image");
    this._popupImageSelectorTitle = this._popupElement.querySelector(".popup__image-text");
  }

  open(name, link) {
    this._popupImageSelectorTitle.textContent = name;
    this._popupImageSelectorSrc.src = link;
    this._popupImageSelectorSrc.alt = link;
    super.open();
  }
}

export default PopupWithImage;
