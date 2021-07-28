/* eslint-disable no-console */
import { renderShowMoreButton } from './view/show-more-button';
import { renderSortCinema } from './view/sort';
import { renderRatingUser } from './view/rating-user';
import { renderContainerCard } from './view/container-card';
import { renderFilmDetails } from './view/film-details';
import { renderMenu } from './view/menu';

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const ratingUser = document.querySelector('.header');
render(ratingUser, renderRatingUser(), 'beforeend');

const main = document.querySelector('.main');
render(main, renderMenu(), 'beforeend');
render(main, renderSortCinema(), 'beforeend');

render(main, renderContainerCard([{name: 'male', name2: 'maaaaa'}, {name: 'male', name2: 'maaaaa'}]), 'beforeend');
// render(main, renderFilmDetails(), 'beforeend');
