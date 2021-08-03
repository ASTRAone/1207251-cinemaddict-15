import { renderComments, getRandomInteger, transformTime, formatDate } from './task';

export const renderData = () => {
  const arrData = [];

  for (let i = 0; i < 20; i++) {
    const obj = {
      id: `${getRandomInteger(0, 100)}`,
      comments: [renderComments()],
      filmInfo: {
        title: 'A Little Pony Without The Carpet',
        alternativeTitle: 'Laziness Who Sold Themselves',
        totalRating: 5.3,
        poster:
          'images/posters/santa-claus-conquers-the-martians.jpg',
        ageRating: 0,
        director: 'Tom Ford',
        writers: ['Takeshi Kitano'],
        actors: ['Morgan Freeman'],
        release: {
          date: formatDate(new Date()),
          releaseCountry: 'Finland',
        },
        runtime: transformTime(getRandomInteger(60, 150)),
        genre: ['Comedy'],
        description:
          'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
      },
      userDetails: {
        watchlist: false,
        alreadyWatched: true,
        watchingDate: '2019-04-12T16:12:32.554Z',
        favorite: false,
      },
    };

    arrData.push(obj);
  }

  return arrData;
};
