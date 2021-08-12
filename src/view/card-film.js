import {createElement} from '../utils';

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

class FilmCard {
  constructor(data) {
    this.data = data;
    this._element = null;
  }

  getTemplate() {
    return renderMoviesCard(this.data);
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

export default FilmCard;
