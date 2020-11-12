import Popup from "./popup.js";

export default class PopupConfirmation extends Popup {
    constructor({ popupSelector, onSubmit }) {
        super(popupSelector);
        this._handleSubmit = onSubmit;
        this._popupForm = this._popupElement.querySelector(".popup__form");

    }

    _deleteCard(){
        this._handleSubmit(this._card, this._cardDom);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', () => this._deleteCard());
    }
    
    open(card, cardDom){
        this._card = card;
        this._cardDom = cardDom;
        super.open();
    }
}