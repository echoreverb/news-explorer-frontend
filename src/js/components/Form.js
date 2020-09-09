import BaseComponent from './BaseComponent';

export default class Form extends BaseComponent {
  constructor(props) {
    super(props);

    this.mainApi = props.instances.mainApi;
    this.openButtons = props.instances.openButtons;
    this.popup = props.instances.popup;
    this.submitButton = props.instances.submitButton;
    this.submitErrorElement = props.submitErrorElement;
    this.VALIDATOR_ERROR_MESSAGES = props.VALIDATOR_ERROR_MESSAGES;

    this.inputs = Array.from(this.domElement.elements)
      .filter((element) => (element.type !== 'submit'));

    this._collectData = this._collectData.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
    this._handleValidate = this._handleValidate.bind(this);
  }

  setListeners() {
    this.openButtons.forEach((openButton) => {
      openButton.addEventListener('click', this._handleOpen);
    });
    this.domElement.addEventListener('input', this._handleValidate);
    this.domElement.addEventListener('submit', this._handleSubmit);
  }

  _handleOpen() {
    this.popup.open();
    this._setSubmitButtonState();
    this._clear();
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._disableInputs();
    this.submitButton.disable();
  }

  _disableInputs() {
    this.inputs.forEach((input) => {
      input.setAttribute('disable', 'disable');
      input.classList.add('popup__input_disabled');
    });
  }

  _enableInputs() {
    this.inputs.forEach((input) => {
      input.removeAttribute('disable', 'disable');
      input.classList.remove('popup__input_disabled');
    });
  }

  _collectData() {
    const data = {};
    this.inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }

  _clear() {
    this.domElement.reset();
    this._hideInputErrors();
    this._hideSubmitErrorElem();
  }

  _validateInput(element) {
    const errorElement = element.nextElementSibling;

    if (element.validity.valueMissing) {
      errorElement.textContent = this.VALIDATOR_ERROR_MESSAGES.valueMissing;
      return false;
    }

    if (element.name === 'email' && element.validity.patternMismatch) {
      errorElement.textContent = this.VALIDATOR_ERROR_MESSAGES.notEmail;
      return false;
    }

    if (element.validity.tooShort || element.validity.tooLong) {
      if (element.name === 'password') {
        errorElement.textContent = this.VALIDATOR_ERROR_MESSAGES.improperPasswordLength;
        return false;
      }
      if (element.name === 'name') {
        errorElement.textContent = this.VALIDATOR_ERROR_MESSAGES.improperNameLength;
        return false;
      }
    }
    return true;
  }

  _validateForm() {
    let isValidForm = true;
    this.inputs.forEach((element) => {
      if (!this._validateInput(element)) {
        isValidForm = false;
      }
    });
    return isValidForm;
  }

  _setSubmitButtonState() {
    if (this._validateForm()) {
      this.submitButton.enable();
    } else {
      this.submitButton.disable();
    }
  }

  _handleValidate(event) {
    this._hideSubmitErrorElem();
    const validatedElement = event.target;
    if (!this._validateInput(validatedElement)) {
      this._showErrorElem(validatedElement);
    } else {
      this._hideErrorElem(validatedElement);
    }
    this._setSubmitButtonState();
  }

  _hideInputErrors() {
    this.inputs.forEach((element) => {
      this._hideErrorElem(element);
    });
  }

  _showErrorElem(element) {
    element.nextElementSibling
      .classList.add('popup__error-message_visible');
  }

  _hideErrorElem(element) {
    element.nextElementSibling
      .classList.remove('popup__error-message_visible');
  }

  _showSubmitErrorElem(error) {
    this.submitErrorElement.textContent = error;
    this.submitErrorElement.classList.add('popup__error-message_visible');
  }

  _hideSubmitErrorElem() {
    this.submitErrorElement.classList.remove('popup__error-message_visible');
  }
}
