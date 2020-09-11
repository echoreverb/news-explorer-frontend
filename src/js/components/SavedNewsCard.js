import NewsCard from './NewsCard';

export default class SavedNewsCard extends NewsCard {
  constructor(props) {
    super(props);
    this.savedNewsTitle = props.instances.savedNewsTitle;
    this.handleRemove = this.handleRemove.bind(this);
  }

  getTemplate({
    data,
    keyword,
    id,
  }) {
    const cardElement = document.createElement('div');
    const cardTemplate = `
      <a href="" class="card__link" target="_blank"></a>
      <img src="" alt="Иллюстрация к новости" class="card__image" />
      <button class="card__icon card__icon_type_tag" type="button"></button>
      <button class="card__icon card__icon_type_delete" type="button"></button>
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
    const tipIconElement = cardElement.querySelector('.card__icon_type_tip');
    const tagElement = cardElement.querySelector('.card__icon_type_tag');

    linkElement.setAttribute('href', data.link);
    imageElement.setAttribute('src', data.image);
    titleElement.textContent = data.title;
    dateElement.setAttribute('datetime', data.date);
    dateElement.textContent = data.date;
    introElement.textContent = data.text;
    sourceElement.textContent = data.source;
    tipIconElement.textContent = 'Убрать из сохранённых';
    tagElement.textContent = keyword;
    cardElement.setAttribute('id', id);

    return cardElement;
  }

  handleRemove(event) {
    if (event.target.classList.contains('card__icon_type_delete')) {
      const cardElement = event.target.closest('.card');
      this.mainApi.deleteArticle(cardElement.id)
        .then((res) => {
          if (res) {
            this.savedNewsTitle.render();
            cardElement.removeEventListener('click', this.handleRemove);
            cardElement.remove();
          }
        })
        .catch((err) => {
          alert(`Ошибка: ${err}`);
          throw new Error(err);
        });
    }
  }
}
