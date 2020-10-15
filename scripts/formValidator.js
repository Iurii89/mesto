class FormValidator {
    constructor(formSelector, configValid) {
        this._formSelector = formSelector;
        this._formElement = document.querySelector(formSelector);
        this._inputSelector = configValid.inputSelector;
        this._submitButtonSelector = configValid.submitButtonSelector;
        this._inactiveButtonClass = configValid.inactiveButtonClass;
        this._errorClass = configValid.errorClass;
    };

    // Показать ошибку
    _showInputError(errorMessage, inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    
    // Спрятать ошибку
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
    };

    // Проверка на валидность
    _isValid(inputElement) {
        const isInputNotValid = !inputElement.validity.valid;

        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;

            this._showInputError(errorMessage, inputElement);
        } else {
            this._hideInputError(inputElement);
        };
    };

    // Отключение/подключение кнопки на валидность
    _toggleButton(inputList, buttonElement) {
        const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
        
        if (hasInvalidInput) {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        };
    };

    //Перебор всех инпутов
    _setEventListener() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButton(inputList, buttonElement);
            });
        });
        this._toggleButton(inputList, buttonElement);
    };

    // Кнопка "включения" класса
    enableValidation = () => {
        const submitFormHandler = (event) => {
            event.preventDefault();
        };
        this._formElement.addEventListener('submit', submitFormHandler);

        this._setEventListener();
    };
}

export default FormValidator;