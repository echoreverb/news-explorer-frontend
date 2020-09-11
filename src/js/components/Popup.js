import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(props) {
    super(props);

    this.mobileOpenButton = props.instances.mobileOpenButton;
    this.mobileCloseButton = props.instances.mobileCloseButton;
    this.overlay = props.instances.overlay;
    this.mobileMenu = props.instances.mobileMenu;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.hide = this.hide.bind(this);
    this._escCloseHandler = this._escCloseHandler.bind(this);
  }

  setListeners() {
    this.mobileCloseButton.addEventListener('click', this.close);
    this.overlay.addEventListener('click', this.close);
    document.addEventListener('keydown', this._escCloseHandler);
    if (this.domElement.querySelector('.popup__close')) {
      this.domElement
        .querySelector('.popup__close')
        .addEventListener('click', this.close);
    }
    if (this.domElement.querySelector('.popup__link')) {
      this.domElement
        .querySelector('.popup__link')
        .addEventListener('click', this.hide);
    }
  }

  _escCloseHandler(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  }

  open() {
    this.show();
    this.mobileMenu.close();
    this.mobileOpenButton.hide();
    this.mobileCloseButton.show();
    this.overlay.showAndNoScroll();
  }

  close() {
    this.hide();
    this.mobileOpenButton.show();
    this.mobileCloseButton.hide();
    this.overlay.hideAndScroll();
  }
}
