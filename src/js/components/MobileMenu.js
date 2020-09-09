import BaseComponent from './BaseComponent';

export default class MobileMenu extends BaseComponent {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this._handelEscClose = this._handelEscClose.bind(this);

    this.mobileOpenButton = props.instances.mobileOpenButton;
    this.mobileCloseButton = props.instances.mobileCloseButton;
    this.overlay = props.instances.overlay;
  }

  setListeners() {
    this.mobileOpenButton.addEventListener('click', this.open);
    this.mobileCloseButton.addEventListener('click', this.close);
    this.overlay.addEventListener('click', this.close);
    document.addEventListener('keydown', this._handelEscClose);
  }

  _handelEscClose(event) {
    if (event.code === 'Escape') {
      this.close();
    }
  }

  open() {
    this.show();
    this.mobileCloseButton.show();
    this.overlay.showAndNoScroll();
  }

  close() {
    this.hide();
    this.mobileCloseButton.hide();
    this.overlay.hideAndScroll();
  }
}
