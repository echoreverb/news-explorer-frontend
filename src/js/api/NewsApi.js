import daysToMs from '../utils/days-to-ms';
import formatDate from '../utils/format-date';

export default class NewsApi {
  constructor(options) {
    this.options = options;
  }

  getNews(keyword) {
    const searchPeriodMs = daysToMs(this.options.searchPeriodDays);
    const currentDate = formatDate(new Date());
    const previousDate = formatDate(new Date(Date.parse(currentDate) - searchPeriodMs));
    return fetch(`${this.options.baseUrl}${keyword}&from=${previousDate}&to=${currentDate}&language=${this.options.newsLang}&sortBy=publishedAt&pageSize=${this.options.pageSize}&apiKey=${this.options.key}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise));
      })
      .catch((err) => Promise.reject(err));
  }
}
