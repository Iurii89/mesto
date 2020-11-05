import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler }) {
    super(popupSelector);
    this._submitFormFunc = formSubmitHandler;
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
}

export default PopupWithForm;
