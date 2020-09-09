export default class CardList {
  constructor(props) {
    this.domElement = props.domElement;
    this.mainApi = props.instances.mainApi;
    this.showMoreButton = props.instances.showMoreButton;
    this.newsCard = props.instances.newsCard;
    this.cardListeners = props.cardListeners;
    this.moreQuantity = props.moreQuantity;

    this.renderIndex = 0;
    this.articles = [];
    this.renderedCards = [];
    this.keyword = '';
    this.keywordArticles = [];
    this.savedArticles = [];
    this._renderMoreCards = this._renderMoreCards.bind(this);
  }

  setListeners() {
    if (this.showMoreButton) {
      this.showMoreButton.addEventListener('click', this._renderMoreCards);
    }
  }

  _setCardListeners(element, listeners) {
    listeners.forEach((listener) => {
      element.addEventListener(listener.event, listener.handler);
    });
  }

  _removeCardListeners(element, listeners) {
    listeners.forEach((listener) => {
      element.removeEventListener(listener.event, listener.handler);
    });
  }

  setArticles({ articles, keyword }) {
    this.clear();
    const formattedArticles = articles.map((article) => this.newsCard.formatNewsObject(article));
    this.articles = formattedArticles.filter((data) => this.newsCard.isCorrectData(data));
    this.keyword = keyword;
  }

  clear() {
    if (this.showMoreButton) {
      this.showMoreButton.hide();
    }
    if (this.renderedCards.length) {
      this.renderedCards.forEach((cardElement) => {
        this._removeCardListeners(cardElement, this.cardListeners);
      });
    }
    this.renderedCards = [];
    this.renderIndex = 0;
    while (this.domElement.firstChild) {
      this.domElement.removeChild(this.domElement.lastChild);
    }
  }

  _renderMoreCards() {
    const startIndex = this.renderIndex;
    const quantity = this.moreQuantity;
    if ((startIndex + quantity) >= this.articles.length) {
      const articlesToShow = this.articles.slice(startIndex, this.articles.length);
      articlesToShow.forEach((article) => {
        let id = '';
        this.keywordArticles.forEach((keywordArticle) => {
          if (keywordArticle.link === article.link) {
            id = keywordArticle._id;
          }
        });
        this._renderCard(article, this.keyword, id);
      });
      this.showMoreButton.hide();
      return;
    }
    this.renderIndex += quantity;
    const articlesToShow = this.articles.slice(startIndex, this.renderIndex);
    articlesToShow.forEach((article) => {
      let id = '';
      this.keywordArticles.forEach((keywordArticle) => {
        if (keywordArticle.link === article.link) {
          id = keywordArticle._id;
        }
      });
      this._renderCard(article, this.keyword, id);
    });
    this.showMoreButton.show();
  }

  _renderCard(article, keyword, id) {
    const cardElement = this.newsCard.getTemplate({
      data: article,
      keyword,
      isAuthorized: this.isAuthorized,
      id,
    });
    this.domElement.append(cardElement);
    if (this.isAuthorized) {
      this._setCardListeners(cardElement, this.cardListeners);
      this.renderedCards.push(cardElement);
    }
  }
}
