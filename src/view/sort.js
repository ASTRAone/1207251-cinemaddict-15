import {createElement} from '../utils';

const renderSortCinema = () => (
  `<ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
);

class SortCinema {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return renderSortCinema();
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

export default SortCinema;
