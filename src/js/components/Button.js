import BaseComponent from './BaseComponent';

export default class Button extends BaseComponent {
  constructor(props) {
    super(props);

    this.disabledClass = props.disabledClass;
  }

  enable() {
    this.domElement.classList.remove(this.disabledClass);
    this.domElement.removeAttribute('disabled', 'disabled');
  }

  disable() {
    this.domElement.classList.add(this.disabledClass);
    this.domElement.setAttribute('disabled', 'disabled');
  }
}
