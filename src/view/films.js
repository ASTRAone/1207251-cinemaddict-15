import {createElement} from '../utils';

const renderFilms = () => '<section class="films"></section>';

class Films {
  constructor(data) {
    this._element = null;
    this.data = data;
  }

  getTemplate() {
    return renderFilms(this.data);
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

export default Films;
