/* eslint-disable no-console */
// import { renderShowMoreButton } from './view/show-more-button';
import SortCinema from './view/sort.js';
import RatingUser from './view/rating-user.js';
import ContainerCard from './view/container-card.js';
import FilmDetails  from './view/film-details.js';
import Menu  from './view/menu.js';
import {generateData} from './mock/data';
import {render} from './utils';

const body = document.body;
const data = generateData();
const [first] = data;

const ratingUserContainer = document.querySelector('.header');
const main = document.querySelector('.main');

const menu = new Menu();
const sortCinema = new SortCinema();
const containerCard = new ContainerCard(data);
const filmDetails = new FilmDetails(first);

// Не знал, куда навешивать событие(на какой элемент)
containerCard.getElement().querySelectorAll('.film-card img').forEach((elem) => {
  elem.addEventListener('click', () => {
    render(body, filmDetails.getElement());
  });
});

filmDetails.getElement().querySelector('.film-details__close-btn').addEventListener('click', () => {
  if (body.contains(filmDetails.getElement())) {
    body.removeChild(filmDetails.getElement());
  }
});

render(ratingUserContainer, new RatingUser().getElement());
render(main, menu.getElement());
render(main, sortCinema.getElement());
render(main, containerCard.getElement(data));
