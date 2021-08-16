// eslint-disable no-console
import Present from './present/present.js';
import {generateData} from './mock/data';

const data = generateData();
new Present().init(data);


// // import { renderShowMoreButton } from './view/show-more-button';
// import SortCinema from './view/sort.js';
// import RatingUser from './view/rating-user.js';
// import Films from './view/films.js';
// import FilmsList from './view/films-list.js';
// import FilmCard from './view/card-film.js';
// import FilmDetails  from './view/film-details.js';
// import Menu  from './view/menu.js';
// import ListEmpty from './view/list-empty.js';
// import {generateData} from './mock/data';
// import {render} from './utils';

// const body = document.body;
// const data = generateData();
// let filmDetails = null;

// const ratingUserContainer = document.querySelector('.header');
// const main = document.querySelector('.main');

// render(ratingUserContainer, new RatingUser().getElement());
// render(main, new Menu().getElement());
// render(main, new SortCinema().getElement());

// body.addEventListener('keydown', (e) => {
//   if (filmDetails !== null && e.key === 'Escape') {
//     body.removeChild(filmDetails.getElement());
//     body.classList.remove('hide-overflow');
//   }
// });

// const renderFilm = (container, element) => {
//   const card = new FilmCard(element);
//   const listContainer = container.querySelector('.films-list__container');
//   const poster = card.getElement().querySelector('.film-card__poster');
//   const title = card.getElement().querySelector('.film-card__title');
//   const comments = card.getElement().querySelector('.film-card__comments');

//   card.setEditClickHandler((e) => {
//     if (e.target.contains(poster) || e.target.contains(title) || e.target.contains(comments)) {
//       filmDetails = new FilmDetails(element);
//       render(body, filmDetails.getElement());
//       body.classList.add('hide-overflow');

//       filmDetails.setEditClickHandler(() => {
//         if (filmDetails !== null && body.contains(filmDetails.getElement())) {
//           body.removeChild(filmDetails.getElement());
//           body.classList.remove('hide-overflow');
//         }
//       });
//     }
//   });

//   render(listContainer, card.getElement());
// };

// const films = new Films();
// const filmsListElement = new FilmsList('All movies. Upcoming', false).getElement();
// const filmsListTopRated = new FilmsList('Top rated', true).getElement();
// const filmsListMostComment = new FilmsList('Most comment', true).getElement();

// const renderFilms = (container, filmsItems) => {
//   if (filmsItems.length > 0) {
//     filmsItems.forEach((element) => renderFilm(container, element));
//     render(films.getElement(), container);
//   }
// };

// renderFilms(filmsListElement, data);
// renderFilms(filmsListTopRated, data.slice(0, 2));
// renderFilms(filmsListMostComment, data.slice(0, 2));

// if (data.length === 0 || !Array.isArray(data)) {
//   const listEmpty = new ListEmpty('There are no movies in our database');
//   render(films.getElement(), listEmpty.getElement());
// } else {
//   render(main, films.getElement());
// }
