import {createElement} from '../utils';

const renderFilmsList = (title, isExtra) =>
  `<section class="films-list ${isExtra ? 'films-list--extra' : ''}">
        <h2 class="films-list__title ${!isExtra ? 'visually-hidden' : ''}">${title}</h2>
        <div class="films-list__container">
        </div>
        ${!isExtra ? '<button class="films-list__show-more">Show more</button>' : ''}
    </section>`;

class FilmsList {
  constructor(title, isExtra = false) {
    this._element = null;
    this.title = title;
    this.isExtra = isExtra;
  }

  getTemplate() {
    return renderFilmsList(this.title, this.isExtra);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

export default FilmsList;
