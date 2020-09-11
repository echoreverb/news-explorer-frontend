import BaseComponent from './BaseComponent';

export default class SavedNewsTitle extends BaseComponent {
  constructor(props) {
    super(props);
    this.mainApi = props.instances.mainApi;
    this.logoutButtonTextElement = props.logoutButtonTextElement;

    this.titleElement = props.titleElement;
    this.subtitleElement = props.subtitleElement;
    this.subtitleIntroElement = props.subtitleIntroElement;
    this.firstKeywordElement = props.firstKeywordElement;
    this.firstKeywordAfterElement = props.firstKeywordAfterElement;
    this.secondKeywordElement = props.secondKeywordElement;
    this.secondKeywordAfterElement = props.secondKeywordAfterElement;
    this.thirdKeywordElement = props.thirdKeywordElement;
    this.subtitleHiddenClass = props.subtitleHiddenClass;

    this.userName = '';
    this.savedArticles = [];
    this.uniqueKeywordsQuantity = 0;
  }

  addUserName(userName) {
    this.userName = userName;
  }

  reverseSavedArticles() {
    this.savedArticles = this.savedArticles.reverse();
  }

  render() {
    this.mainApi.getArticles()
      .then((res) => {
        if (res.status === 200) {
          this._reset();
          this.savedArticles = res.data.data;
          this.reverseSavedArticles();
          const keywords = this.savedArticles.map((article) => article.keyword);
          const uniqueKeywords = this._getUniqueKeywords(keywords);
          const overallQuantity = keywords.length;
          this._renderGreeting(this.userName, overallQuantity);
          if (uniqueKeywords.length) this._renderKeywords(uniqueKeywords);
        }
      })
      .catch((err) => {
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
  }

  _reset() {
    this.subtitleElement.classList.remove(this.subtitleHiddenClass);
    this.titleElement.textContent = '';
    this.firstKeywordElement.textContent = '';
    this.firstKeywordAfterElement.textContent = '';
    this.secondKeywordElement.textContent = '';
    this.secondKeywordAfterElement.textContent = '';
    this.thirdKeywordElement.textContent = '';
  }

  _renderGreeting(userName, overallQuantity) {
    let reminder = overallQuantity % 100;

    if (overallQuantity === 0) {
      this.titleElement.textContent = `${userName}, у вас нет сохранённых статей`;
      this.subtitleElement.classList.add(this.subtitleHiddenClass);
      return;
    }

    if (reminder > 20) reminder %= 10;

    if ((reminder === 0 || reminder >= 5)) {
      this.titleElement.textContent = `${userName}, у вас ${overallQuantity} сохранённых статей`;
    } else if (reminder === 1) {
      this.titleElement.textContent = `${userName}, у вас ${overallQuantity} сохранённая статья`;
    } else if (reminder > 1 || reminder < 5) {
      this.titleElement.textContent = `${userName}, у вас ${overallQuantity} сохранённые статьи`;
    }
  }

  _renderKeywords(uniqueKeywords) {
    const uniqueQuantity = uniqueKeywords.length;

    if (uniqueQuantity === 1) {
      this.subtitleIntroElement.textContent = 'По ключевому слову: ';
      [this.firstKeywordElement.textContent] = uniqueKeywords;
      return;
    }

    if (uniqueQuantity === 2) {
      [
        this.firstKeywordElement.textContent,
        this.secondKeywordElement.textContent,
      ] = uniqueKeywords;
      this.firstKeywordElement.textContent += ' ';
      this.firstKeywordAfterElement.textContent = 'и ';
      this.thirdKeywordElement.textContent = '';
      return;
    }

    if (uniqueQuantity === 3) {
      [
        this.firstKeywordElement.textContent,
        this.secondKeywordElement.textContent,
        this.thirdKeywordElement.textContent,
      ] = uniqueKeywords;
    } else {
      [
        this.firstKeywordElement.textContent,
        this.secondKeywordElement.textContent,
      ] = uniqueKeywords;

      let rendered = [
        this.firstKeywordElement.textContent,
        this.secondKeywordElement.textContent,
      ];

      const rest = uniqueQuantity - rendered.length;
      [rendered] = uniqueKeywords;
      this.thirdKeywordElement.textContent = `${rest} другим`;
    }

    this.secondKeywordElement.textContent += ' ';
    this.firstKeywordAfterElement.textContent = ', ';
    this.secondKeywordAfterElement.textContent = 'и ';
  }

  _getUniqueKeywords(keywords) {
    return keywords.filter((value, index, self) => (self.indexOf(value) === index));
  }
}
