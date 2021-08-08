import {createElement} from '../utils';

const renderRatingUser = () => (
  `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
);

class RatingUser {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return renderRatingUser();
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

export default RatingUser;
