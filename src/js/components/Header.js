import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor(props) {
    super(props);
    this.mainApi = props.instances.mainApi;
    this.logoutButton = props.instances.logoutButton;
    this.navListElement = props.navListElement;
    this.logoutButtonTextElement = props.logoutButtonTextElement;
    this.isLoggedIn = false;
    this.userName = '';

    this._logout = this._logout.bind(this);
  }

  setListeners() {
    this.logoutButton.addEventListener('click', this._logout);
  }

  render() {
    return this.mainApi.getUser()
      .then((res) => {
        if (res.status === 200) {
          this._renderLoggedIn(res.data.data.name);
          return Promise.resolve(res.data.data);
        }
        if (window.location.pathname !== '/') {
          window.location.replace('/');
        }
        return this._renderLoggedOut();
      })
      .catch((err) => {
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
  }

  _renderLoggedIn(userName) {
    this.isLoggedIn = true;
    this.navListElement.classList.remove('header__list_state_not-authorized');
    this.navListElement.classList.add('header__list_state_authorized');
    this.logoutButtonTextElement.textContent = userName;
  }

  _renderLoggedOut() {
    this.isLoggedIn = false;
    this.navListElement.classList.add('header__list_state_not-authorized');
    this.navListElement.classList.remove('header__list_state_authorized');
  }

  _logout() {
    this.mainApi.logout()
      .then((res) => {
        if (res.status === 201) {
          if (window.location.pathname !== '/') {
            window.location.replace('/');
            return;
          }
          this._renderLoggedOut();
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
  }
}
