import {createElement} from '../utils';
import {renderCards} from '../main';


const renderAllMovies = (cards) =>
  `<section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container">
            ${renderCards(cards)}
        </div>
        <button class="films-list__show-more">Show more</button>
    </section>`;

const renderExtraMovies = (cards, title) =>
  `<section class="films-list films-list--extra">
        <h2 class="films-list__title">${title}</h2>
        <div class="films-list__container">
            ${renderCards(cards)}
        </div>
    </section>`;

const renderContainerCard = (cards = []) =>
  `<section class="films">
        ${renderAllMovies(cards)}
        ${renderExtraMovies(cards.slice(0, 2), 'Top rated')}
        ${renderExtraMovies(cards.slice(0, 2), 'Most comment')}
    </section>`;


class ContainerCard {
  constructor(data) {
    this._element = null;
    this.data = data;
  }

  getTemplate() {
    return renderContainerCard(this.data);
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

export default ContainerCard;
