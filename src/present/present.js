/* eslint-disable no-console */
// import { renderShowMoreButton } from './view/show-more-button';
import SortCinema from '../view/sort.js';
import RatingUser from '../view/rating-user.js';
import Films from '../view/films.js';
import FilmsList from '../view/films-list.js';
import Menu  from '../view/menu.js';
import ListEmpty from '../view/list-empty.js';
import {generateData} from '../mock/data';
import {render} from '../utils';

import FilmPresent from './filmPresent.js';

class Present {
  constructor() {
    this._ratingUser = new RatingUser().getElement();
    this._sortFilms = new SortCinema().getElement();
    this._menu = new Menu().getElement();

    this._films = new Films();
    this._filmsListElement = new FilmsList('All movies. Upcoming', false).getElement();
    this._filmsListTopRated = new FilmsList('Top rated', true).getElement();
    this._filmsListMostComment = new FilmsList('Most comment', true).getElement();

    this._listEmpty = new ListEmpty('Error 404');

    this._body = document.body;
    this._data = generateData();

    this.ratingUserContainer = document.querySelector('.header');
    this.main = document.querySelector('.main');
  }

  init(data = []) {
    this._renderRatingUser();
    this._renderMenu();
    this._renderSort();

    if (data.length > 0 && data !== undefined) {
      this._renderFilms(this._filmsListElement, data);
      this._renderFilms(this._filmsListTopRated, data.slice(0, 2));
      this._renderFilms(this._filmsListMostComment, data.slice(0, 2));
    } else {
      this._renderEmpty();
    }
  }

  _renderRatingUser() {
    render(this.ratingUserContainer, this._ratingUser);
  }

  _renderMenu() {
    render(this.main, this._menu);
  }

  _renderSort() {
    render(this.main, this._sortFilms);
  }

  _renderFilm(container, element) {
    const containerCard = new FilmPresent(container);
    containerCard.init(element);
  }

  _renderFilms(container, filmsItems) {
    if (filmsItems.length > 0) {
      filmsItems.forEach((element) => this._renderFilm(container, element));
      render(this._films.getElement(), container);
      render(this.main, this._films.getElement());
    }
  }

  _renderEmpty() {
    render(this._films.getElement(), this._listEmpty.getElement());
    render(this.main, this._films.getElement());
  }
}

export default Present;
