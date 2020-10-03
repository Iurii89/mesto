// показать ошибку
const showInputError = (parameters, formElement, errorMessage, inputElement) => {
    parameters.errorClass;
    parameters.inputErrorClass;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(parameters.errorClass);
}

// спрятать ошибку
const hideInputError = (parameters, formElement, inputElement) => {
    parameters.errorClass;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(parameters.errorClass);
};

// проверка на валидность
const isValid = (parameters, formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(parameters, formElement, errorMessage, inputElement);
    } else {
        hideInputError(parameters, formElement, inputElement);
    };
};

// отключение/подключение кнопки "Сохранить"
const toggleButton = (parameters, inputList, buttonElement) => {
    parameters.inactiveButtonClass;
    const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);
    if (hasInvalidInput) {
        buttonElement.classList.add(parameters.inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    } else {
        buttonElement.classList.remove(parameters.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    };
};

// перебор всех инпутов
const setEventListeners = (parameters, formElement) => {
    parameters.submitButtonSelector;
    parameters.inputSelector;
    const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
    const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(parameters, formElement, inputElement);
            toggleButton(parameters, inputList, buttonElement);
        });
    });
    toggleButton(parameters, inputList, buttonElement);
};

// перебор всех форм
function enableValidation(parameters) {
    parameters.formSelector;
    const formList = Array.from(document.querySelectorAll(parameters.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(parameters, formElement);
    });
};

// включение валидации вызовом enableValidation
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
}); 