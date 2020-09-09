export default class BaseComponent {
  constructor({ domElement, visibleClass, hiddenClass }) {
    this.domElement = domElement;
    this.visibleClass = visibleClass;
    this.hiddenClass = hiddenClass;
    this.addEventListener = this.addEventListener.bind(this);
  }

  addEventListener(...args) {
    this.domElement.addEventListener(...args);
  }

  removeEventListener(...args) {
    this.domElement.removeEventListener(...args);
  }

  show() {
    if (this.visibleClass) {
      this.domElement.classList.add(this.visibleClass);
    }
    if (this.hiddenClass) {
      this.domElement.classList.remove(this.hiddenClass);
    }
  }

  hide() {
    if (this.visibleClass) {
      this.domElement.classList.remove(this.visibleClass);
    }
    if (this.hiddenClass) {
      this.domElement.classList.add(this.hiddenClass);
    }
  }
}
