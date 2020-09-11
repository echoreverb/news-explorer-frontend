import CardList from './CardList';

export default class SavedCardList extends CardList {
  renderSavedCards() {
    this.clear();
    this.mainApi.getArticles()
      .then((res) => {
        if (res.status === 200) {
          this.isAuthorized = true;
          this.savedArticles = res.data.data;
          this.reverseSavedArticles();
          this.savedArticles.forEach((savedArticle) => {
            this._renderCard(savedArticle, savedArticle.keyword, savedArticle._id);
          });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
  }

  reverseSavedArticles() {
    this.savedArticles = this.savedArticles.reverse();
  }
}
