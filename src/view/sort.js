import Abstract from './abstract.js';

const renderSortCinema = () => (
  `<ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
);

class SortCinema extends Abstract {
  constructor() {
    super();

    this._element = null;
  }

  getTemplate() {
    return renderSortCinema();
  }
}

export default SortCinema;
