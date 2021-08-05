const renderMoviesCard = ({ comments, filmInfo }) =>
  `<article class="film-card">
        <h3 class="film-card__title">${filmInfo.title}</h3>
        <p class="film-card__rating">${filmInfo.totalRating}</p>
        <p class="film-card__info">
            <span class="film-card__year">${filmInfo.release.date}</span>
            <span class="film-card__duration">${filmInfo.runtime}</span>
            <span class="film-card__genre">${filmInfo.genre}</span>
        </p>
        <img src=${filmInfo.poster} alt="" class="film-card__poster">
        <p class="film-card__description">${filmInfo.description}</p>
        <a class="film-card__comments">${comments.length} comments</a>
        <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
        </div>
    </article>`;

const renderCards = (cards = []) =>
  cards.map((item) => renderMoviesCard({ ...item })).join('');

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

export const renderContainerCard = (cards = []) =>
  `<section class="films">
        ${renderAllMovies(cards)}
        ${renderExtraMovies(cards.slice(0, 2), 'Top rated')}
        ${renderExtraMovies(cards.slice(0, 2), 'Most comment')}
    </section>`;
