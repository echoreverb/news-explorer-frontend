import Form from './Form';

export default class LoginForm extends Form {
  _handleSubmit(...args) {
    super._handleSubmit(...args);
    const { email, password } = this._collectData();
    this.mainApi.login({ email, password })
      .then((res) => {
        if (res.status === 201) {
          this._clear();
          this.popup.close();
          window.location.reload();
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
