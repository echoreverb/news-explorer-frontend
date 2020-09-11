import NewsCard from './NewsCard';

export default class MainNewsCard extends NewsCard {
  constructor(props) {
    super(props);
    this.handleMark = this.handleMark.bind(this);
    this.handleUnmark = this.handleUnmark.bind(this);
  }

  getTemplate({
    data,
    keyword,
    isAuthorized = false,
    id,
  }) {
    const cardElement = document.createElement('div');
    const cardTemplate = `
      <a href="" class="card__link" target="_blank"></a>
      <img src="" alt="Иллюстрация к новости" class="card__image" />
      <button class="card__icon card__icon_type_tag card__icon_hidden" type="button"></button>
      <button class="card__icon card__icon_type_add" type="button"></button>
      <button class="card__icon card__icon_type_tip" type="button"></button>
      <div class="card__content">
        <time datetime="" class="card__date"></time>
        <h3 class="card__title"></h3>
        <p class="card__intro"></p>
      </div>
      <span class="card__source"></span>
      `;
    cardElement.classList.add('card');
    cardElement.insertAdjacentHTML('afterbegin', cardTemplate);

    const linkElement = cardElement.querySelector('.card__link');
    const imageElement = cardElement.querySelector('.card__image');
    const titleElement = cardElement.querySelector('.card__title');
    const dateElement = cardElement.querySelector('.card__date');
    const introElement = cardElement.querySelector('.card__intro');
    const sourceElement = cardElement.querySelector('.card__source');
    const addRemoveIconElement = cardElement.querySelector('.card__icon_type_add');
    const tipIconElement = cardElement.querySelector('.card__icon_type_tip');
    const tagElement = cardElement.querySelector('.card__icon_type_tag');

    linkElement.setAttribute('href', data.link);
    imageElement.setAttribute('src', data.image);
    titleElement.textContent = data.title;
    dateElement.setAttribute('datetime', data.date);
    dateElement.textContent = data.date;
    introElement.textContent = data.text;
    sourceElement.textContent = data.source;
    tipIconElement.textContent = 'Войдите, чтобы сохранять статьи';
    tagElement.textContent = keyword;

    if (isAuthorized) {
      tipIconElement.classList.add('card__icon_hidden');
    }

    if (id) {
      addRemoveIconElement.classList.remove('card__icon_type_add');
      addRemoveIconElement.classList.add('card__icon_type_marked');
      cardElement.setAttribute('id', id);
    }
    return cardElement;
  }

  handleMark(event) {
    if (event.target.classList.contains('card__icon_type_add')) {
      const addIcon = event.target.closest('.card__icon_type_add');
      const cardElement = event.target.closest('.card');
      const cardData = {
        keyword: cardElement.querySelector('.card__icon_type_tag').textContent,
        title: cardElement.querySelector('.card__title').textContent,
        text: cardElement.querySelector('.card__intro').textContent,
        date: cardElement.querySelector('.card__date').textContent,
        source: cardElement.querySelector('.card__source').textContent,
        link: cardElement.querySelector('.card__link').getAttribute('href'),
        image: cardElement.querySelector('.card__image').getAttribute('src'),
      };
      this.mainApi.createArticle(cardData).then((res) => {
        if (res) {
          cardElement.setAttribute('id', res.data.id);
          addIcon.classList.add('card__icon_type_marked');
          addIcon.classList.remove('card__icon_type_add');
        }
      }).catch((err) => {
        alert(`Ошибка: ${err}`);
        throw new Error(err);
      });
    }
  }

  handleUnmark(event) {
    if (event.target.classList.contains('card__icon_type_marked')) {
      const markedIcon = event.target.closest('.card__icon_type_marked');
      const cardElement = event.target.closest('.card');
      this.mainApi.deleteArticle(cardElement.id)
        .then((res) => {
          if (res) {
            markedIcon.classList.add('card__icon_type_add');
            markedIcon.classList.remove('card__icon_type_marked');
          }
        })
        .catch((err) => {
          alert(`Ошибка: ${err}`);
          throw new Error(err);
        });
    }
  }
}
