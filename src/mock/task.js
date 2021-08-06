const defaultText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

const emotions = ['smile', 'sleeping', 'puke', 'angry'];

// Получение целого рандомного числа
export const getRandomInteger = (min, max) => {
  const random = Math.floor(min + Math.random() * (max + min - min));
  return random;
};

// Генерирование рандомного текста, рандомной длинны
const renderText = (min, max, arr = []) => {
  const len = getRandomInteger(min, max);
  const setText = [];

  for (let i = 0; i < len; i++) {
    if (!setText.includes(arr[i])) {
      setText.push(arr[i]);
    }
  }

  return setText;
};

// Обработка минут в часы и минуты
export const transformTime = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  return `${hours}h ${minutes}m`;
};

// Преобразование даты
export const formatDate = (date) => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear() % 100;

  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  if (yy < 10){
    yy = `0${yy}`;
  }

  return `${dd}-${mm}-${yy}`;
};

// Получение рандомных комментариев
export const renderComments = () => {
  const obj = {
    id: `${getRandomInteger(0, 200)}`,
    emotion: emotions[Math.floor(Math.random() * emotions.length)],
    date: formatDate(new Date()),
    author: 'Vlad',
    comment: renderText(0, 5, defaultText),
  };

  return obj;
};
