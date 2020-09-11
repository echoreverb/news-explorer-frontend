import BaseComponent from './BaseComponent';

export default class SearchForm extends BaseComponent {
  constructor(props) {
    super(props);

    this.newsApi = props.instances.newsApi;
    this.results = props.instances.results;
    this.cardList = props.instances.cardList;
    this.preloader = props.instances.preloader;
    this.submitButton = props.instances.submitButton;
    this.notFoundElement = props.notFoundElement;
    this.searchInputElement = props.searchInputElement;
    this.SEARCH_INPUT_REGEXP = props.SEARCH_INPUT_REGEXP;

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  setListeners() {
    this.domElement.addEventListener('submit', this._handleSubmit);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.notFoundElement.classList.remove('not-found_visible');

    const keyword = this.searchInputElement.value;
    if (!keyword.match(this.SEARCH_INPUT_REGEXP)) {
      return;
    }
    this.results.show();
    this.preloader.show();
    this.cardList.clear();
    this._disable();
    this.newsApi.getNews(keyword)
      .then((data) => {
        if (data.articles) {
          this.cardList.setArticles({ articles: data.articles, keyword });
          if (this.cardList.articles.length) {
            this.cardList.initRender({ articles: data.articles, keyword })
              .catch((err) => {
                this._enable();
                this.preloader.hide();
                this.results.hide();
                alert(`Ошибка: ${err}`);
                throw new Error(err);
              })
              .finally(() => {
                this._enable();
                this.preloader.hide();
              });
          } else {
            this.notFoundElement.classList.add('not-found_visible');
            this._enable();
            this.preloader.hide();
          }
        }
      })
      .catch((err) => {
        this._enable();
        this.preloader.hide();
        this.results.hide();
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
  }

  _disable() {
    this.submitButton.domElement.classList.add('searchbar__button_disabled');
    this.searchInputElement.classList.add('searchbar__input_disabled');
    this.submitButton.domElement.setAttribute('disabled', 'disabled');
    this.searchInputElement.setAttribute('disabled', 'disabled');
  }

  _enable() {
    this.submitButton.domElement.classList.remove('searchbar__button_disabled');
    this.searchInputElement.classList.remove('searchbar__input_disabled');
    this.submitButton.domElement.removeAttribute('disabled', 'disabled');
    this.searchInputElement.removeAttribute('disabled', 'disabled');
  }
}
