import Abstract from './abstract.js';

const renderMoviesCard = ({ comments, filmInfo }) => {
  const { title, totalRating, release, runtime, genre, poster, description } = filmInfo;
  return `<article class="film-card">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
                <span class="film-card__year">${release.date}</span>
                <span class="film-card__duration">${runtime}</span>
                <span class="film-card__genre">${genre}</span>
            </p>
            <img src=${poster} alt="" class="film-card__poster">
            <p class="film-card__description">${description}</p>
            <a class="film-card__comments">${comments.length} comments</a>
            <div class="film-card__controls">
                <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
            </div>
          </article>`;
};

class FilmCard extends Abstract {
  constructor(data) {
    super();

    this.data = data;
    this._element = null;

    this._editClickHandler = this._editClickHandler.bind(this);
  }

  getTemplate() {
    return renderMoviesCard(this.data);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick(evt);
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().addEventListener('click', this._editClickHandler);
  }
}

export default FilmCard;
