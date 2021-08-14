import Abstract from './abstract.js';

const renderFilms = () => '<section class="films"></section>';

class Films extends Abstract {
  constructor(data) {
    super();

    this._element = null;
    this.data = data;
  }

  getTemplate() {
    return renderFilms(this.data);
  }
}

export default Films;
