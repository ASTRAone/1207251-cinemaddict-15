const defaultText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  "Cras aliquet varius magna, non porta ligula feugiat eget.",
  "Fusce tristique felis at fermentum pharetra.",
  "Aliquam id orci ut lectus varius viverra.",
  "Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",
];

export const getRandomInteger = (min, max) => {
  const random = Math.floor(min + Math.random() * (max + min - min));
  return random;
};

const renderText = (min, max, arr) => {
  const len = getRandomInteger(min, max);
  const setText = [];

  for (let i = 0; i < len; i++) {
    if (!setText.includes(defaultText[i])) {
      setText.push(arr[i]);
    }
  }

  return setText;
};

export const renderComments = () => {
  const obj = {
    emotion: "funny",
    date: new Date(),
    author: "Vlad",
    comment: renderText(0, 5, defaultText),
  };

  return obj;
};
