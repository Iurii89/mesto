import Popup from "./popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    this._popupImageSelectorTitle.textContent = name;
    this._popupImageSelectorSrc.src = link;
    this._popupImageSelectorSrc.alt = link;
    super.open();
  }
}

export default PopupWithImage;
