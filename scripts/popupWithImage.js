import Popup from "./popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    const popupImageSelectorTitle = this._popupElement.querySelector(
      ".popup__image-text"
    );
    const popupImageSelectorSrc = this._popupElement.querySelector(
      ".popup__image"
    );
    popupImageSelectorTitle.textContent = name;
    popupImageSelectorSrc.src = link;
    popupImageSelectorSrc.alt = link;
    super.open();
  }
}

export default PopupWithImage;
