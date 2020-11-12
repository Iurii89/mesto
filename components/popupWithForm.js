import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler }) {
    super(popupSelector);
    this._submitFormFunc = formSubmitHandler;
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._defaultButtonText = this._popupElement.querySelector('.popup__save').textContent;
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm
      .addEventListener("submit", (evt) => {
        evt.preventDefault();

        this._submitFormFunc(this._getInputValues());
      });
  }

  close() {
    super.close();

    this._popupForm.reset();
  }

  loaderButtonText() {
    this._popupElement.querySelector('.popup__save').textContent = "Сохранение...";
  }

  loaderButtonTextReset() {
    this._popupElement.querySelector('.popup__save').textContent = this._defaultButtonText;
  }

}

export default PopupWithForm;
