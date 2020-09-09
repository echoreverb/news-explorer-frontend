import CardList from './CardList';

export default class MainCardList extends CardList {
  initRender() {
    return this.mainApi.getArticles()
      .then((res) => {
        if (res.status === 200) {
          this.isAuthorized = true;
          this.keywordArticles = res.data.data
            .filter((article) => article.keyword === this.keyword);
        } else if (res.status === 401) {
          this.isAuthorized = false;
        }
        this._renderMoreCards();
      })
      .catch((err) => {
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
  }
}
