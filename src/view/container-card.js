const renderMoviesAll = ({name, name2}) => (
    `<article class="film-card">
        <h3 class="film-card__title">The Dance of Life</h3>
        <p class="film-card__rating">8.3</p>
        <p class="film-card__info">
            <span class="film-card__year">${name}</span>
            <span class="film-card__duration">${name2}</span>
            <span class="film-card__genre">Musical</span>
        </p>
        <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
        <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
        <a class="film-card__comments">5 comments</a>
        <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
        </div>
    </article>`
);

const renderMoviesExtra = ({name, name2}) => (
    `<article class="film-card">
        <h3 class="film-card__title">The Man with the Golden Arm</h3>
        <p class="film-card__rating">9.0</p>
        <p class="film-card__info">
            <span class="film-card__year">${name}</span>
            <span class="film-card__duration">${name2}</span>
            <span class="film-card__genre">Drama</span>
        </p>
        <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
        <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
        <a class="film-card__comments">18 comments</a>
        <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
        </div>
    </article>`
);

const renderCardsAll = (cards = []) => cards.map(renderMoviesAll).join('');
const renderCardsExtra = (cards = []) => cards.map(renderMoviesExtra).join('');

const allMovies = (cards) => (
    `<section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
        <div class="films-list__container">
            ${renderCardsAll(cards)}
        </div>
        <button class="films-list__show-more">Show more</button>
    </section>`
);

const extraTopMovies = (cards) => (
    `   <section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
        ${renderCardsExtra(cards)}
    </div>
</section>`
);

const extraMostMovies = (cards) => (
    `<section class="films-list films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
        <div class="films-list__container">
            ${renderCardsExtra(cards)}
        </div>
    </section>`
);

export const renderContainerCard = (cards) => (
    `<section class="films">
        ${allMovies(cards)}
        ${extraTopMovies(cards)}    
        ${extraMostMovies(cards)}
    </section>`
);

