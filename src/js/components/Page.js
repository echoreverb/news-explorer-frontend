import BaseComponent from './BaseComponent';

export default class Page extends BaseComponent {
  constructor(props) {
    super(props);
    this.pageNoScrollClass = props.pageNoScrollClass;
    this._handleOnload = this._handleOnload.bind(this);
  }

  stopScroll() {
    this.domElement.classList.add(this.pageNoScrollClass);
  }

  continueScroll() {
    this.domElement.classList.remove(this.pageNoScrollClass);
  }

  _handleOnload() {
    this.domElement.removeAttribute('style', 'style');
  }

  setListeners() {
    this.domElement.onload = this._handleOnload;
  }
}
