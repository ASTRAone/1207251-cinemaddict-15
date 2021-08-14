import Abstract from './abstract.js';

const renderListEmpty = (title) => `<h2 class="films-list__title">${title}</h2>`;

// Значение отображаемого текста зависит от выбранного фильтра:
// * All movies – 'There are no movies in our database'
// * Watchlist — 'There are no movies to watch now';
// * History — 'There are no watched movies now';
// * Favorites — 'There are no favorite movies now'.

class ListEmpty extends Abstract {
  constructor(value) {
    super();

    this.title = value;
    this._element = null;
  }

  getTemplate() {
    return renderListEmpty(this.title);
  }
}

export default ListEmpty;
