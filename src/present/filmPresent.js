import FilmCard from '../view/card-film.js';
import FilmDetails  from '../view/film-details.js';
import {render} from '../utils';

class FilmPresent {
  constructor(container) {
    this._container = container;
    this._filmDetails = null;
    this._body = document.body;
  }

  init(element) {
    this.element = element;

    const card = new FilmCard(element);
    const listContainer = this._container.querySelector('.films-list__container');
    const poster = card.getElement().querySelector('.film-card__poster');
    const title = card.getElement().querySelector('.film-card__title');
    const comments = card.getElement().querySelector('.film-card__comments');

    card.setEditClickHandler((e) => {
      if (e.target.contains(poster) || e.target.contains(title) || e.target.contains(comments)) {
        this._filmDetails = new FilmDetails(element);
        render(this._body, this._filmDetails.getElement());
        this._body.classList.add('hide-overflow');

        this._filmDetails.setEditClickHandler(() => {
          if (this._filmDetails !== null && this._body.contains(this._filmDetails.getElement())) {
            this._body.removeChild(this._filmDetails.getElement());
            this._body.classList.remove('hide-overflow');
          }
        });
      }
    });

    render(listContainer, card.getElement());
  }
}

export default FilmPresent;
