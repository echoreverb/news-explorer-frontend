import BaseComponent from './BaseComponent';

export default class Overlay extends BaseComponent {
  constructor(props) {
    super(props);

    this.page = props.instances.page;
  }

  showAndNoScroll() {
    this.show();
    this.page.stopScroll();
  }

  hideAndScroll() {
    this.hide();
    this.page.continueScroll();
  }
}
