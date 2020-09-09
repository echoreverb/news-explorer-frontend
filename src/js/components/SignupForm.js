import Form from './Form';

export default class SignupForm extends Form {
  constructor(props) {
    super(props);

    this.successPopup = props.instances.successPopup;
  }

  _handleSubmit(...args) {
    super._handleSubmit(...args);
    const { email, password, name } = this._collectData();
    this.mainApi.signup({ email, password, name })
      .then((res) => {
        if (res.status === 200) {
          this._clear();
          this.popup.close();
          this.successPopup.open();
          return;
        }
        this._showSubmitErrorElem(res.data.message);
      })
      .catch((err) => {
        this._showSubmitErrorElem(err);
      })
      .finally(() => {
        this._enableInputs();
        this.submitButton.enable();
      });
  }
}
