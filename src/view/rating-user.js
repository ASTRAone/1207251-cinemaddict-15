import Abstract from './abstract.js';

const renderRatingUser = () => (
  `<section class="header__profile profile">
      <p class="profile__rating">Movie Buff</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
);

class RatingUser extends Abstract {
  constructor() {
    super();

    this._element = null;
  }

  getTemplate() {
    return renderRatingUser();
  }
}

export default RatingUser;
