/* eslint-disable no-console */
// import { renderShowMoreButton } from './view/show-more-button';
import { renderSortCinema } from './view/sort';
import { renderRatingUser } from './view/rating-user';
import { renderContainerCard } from './view/container-card';
// import { renderFilmDetails } from './view/film-details';
import { renderMenu } from './view/menu';
import {renderComments, getRandomInteger} from './mock/task';

const renderData = () => {
  const arrData = [];

  for (let i = 0; i < 20; i++) {
    const obj = {
      nameMovie: 'V - значит вендетта',
      poster: '../public/images/posters/santa-claus-conquers-the-martians.jpg',
      description: renderComments(),
      rating: getRandomInteger(0, 5),
      yearMovie: '2005',
      duration: '2m 30m',
      genre: 'Боевик/Триллер',
      shortDescription:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      numberComments: renderComments().comment.length,
    };

    arrData.push(obj);
  }

  return arrData;
};

console.log(renderData());

const render = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

const ratingUser = document.querySelector('.header');
render(ratingUser, renderRatingUser(), 'beforeend');

const main = document.querySelector('.main');
render(main, renderMenu(), 'beforeend');
render(main, renderSortCinema(), 'beforeend');

render(main, renderContainerCard([{name: 'male', name2: 'maaaaa'}, {name: 'male', name2: 'maaaaa'}]), 'beforeend');
