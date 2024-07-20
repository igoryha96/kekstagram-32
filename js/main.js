const userId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const coments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const userName = ['Александр', 'Мария', 'Иван', 'Анастасия', 'Дмитрий', 'Елена', 'Николай', 'Ольга', 'Артем', 'Екатерина', 'Владимир', 'Светлана', 'Павел', 'Татьяна', 'Сергей', 'Наталья', 'Алексей', 'Людмила', 'Андрей', 'Анна', 'Максим', 'Юлия', 'Ирина', 'Василий', 'Оксана'];

const likes = [];

for (let i = 1; i <= 200; i++) {
  likes.push(i);
};


function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createObjectPhoto = () => ({
  id: getRandomArrayElement(userId),
  url: `photos/${getRandomArrayElement(userId)}.jpg`,
  description: `Прекрасное фото №${getRandomArrayElement(userId)}`,
  likes: getRandomArrayElement(likes),
  message: getRandomArrayElement(coments),
  name: `${getRandomArrayElement(userName)}`,
});

objectsPhoto = [];

for (let i = 0; i <= 25; i++) {
  objectsPhoto.push(createObjectPhoto());
}
console.log(objectsPhoto);
