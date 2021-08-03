/* eslint-disable no-console */
// import { renderShowMoreButton } from './view/show-more-button';
import { renderSortCinema } from './view/sort';
import { renderRatingUser } from './view/rating-user';
import { renderContainerCard } from './view/container-card';
// import { renderFilmDetails } from './view/film-details';
import { renderMenu } from './view/menu';
import {renderData} from './mock/data';

console.log(renderData());

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

// const body = document.body;
const ratingUser = document.querySelector('.header');
render(ratingUser, renderRatingUser(), 'beforeend');

const main = document.querySelector('.main');
render(main, renderMenu(), 'beforeend');
render(main, renderSortCinema(), 'beforeend');
// render(body, renderFilmDetails(), 'beforeend');

render(main, renderContainerCard(renderData()), 'beforeend');
