import { createElement } from '../utils';

const renderListEmpty = (title) => `<h2 class="films-list__title">${title}</h2>`;

// Значение отображаемого текста зависит от выбранного фильтра:
// * All movies – 'There are no movies in our database'
// * Watchlist — 'There are no movies to watch now';
// * History — 'There are no watched movies now';
// * Favorites — 'There are no favorite movies now'.

class ListEmpty {
  constructor(value) {
    this.title = value;
    this._element = null;
  }

  getTemplate() {
    return renderListEmpty(this.title);
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

export default ListEmpty;
