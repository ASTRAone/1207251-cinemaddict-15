/* eslint-disable no-console */
// import { renderShowMoreButton } from './view/show-more-button';
import { renderSortCinema } from './view/sort';
import { renderRatingUser } from './view/rating-user';
import { renderContainerCard } from './view/container-card';
import { renderFilmDetails } from './view/film-details';
import { renderMenu } from './view/menu';
import {generateData} from './mock/data';

console.log(generateData());

const body = document.body;
const data = generateData();
const [first] = data;
console.log(first);


const render = (container, template, position = 'beforeend') => {
  container.insertAdjacentHTML(position, template);
};

const ratingUser = document.querySelector('.header');
render(ratingUser, renderRatingUser());

const main = document.querySelector('.main');
render(main, renderMenu());
render(main, renderSortCinema());
render(main, renderContainerCard(data));
render(body, renderFilmDetails({...first}));
