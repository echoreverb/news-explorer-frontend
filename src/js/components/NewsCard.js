export default class NewsCard {
  constructor(props) {
    this.mainApi = props.instances.mainApi;
    this.dateToString = props.dateToString;
  }

  isCorrectData(data) {
    if (data.link
      && data.image
      && data.title
      && data.text
      && data.date
      && data.source) {
      return true;
    }
    return false;
  }

  formatNewsObject(data) {
    return {
      title: data.title,
      text: data.description,
      date: this.dateToString(data.publishedAt),
      source: data.source.name,
      link: data.url,
      image: data.urlToImage,
    };
  }
}
