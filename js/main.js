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
}

//функция возвращает случайное число
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
//функция возвращает случайное УНИКАЛЬНОЕ число
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
//функция увеличивает счетчик на +1 с каждой итерацией
function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();
const generateUserId = createIdGenerator();


const getUnical = createRandomIdFromRangeGenerator(0, userId.length - 1);

const getRandomUnicalInteger = (nameMassive) => {
  const index = createRandomIdFromRangeGenerator(0, nameMassive.length - 1);
  return nameMassive[index()];
};

// for (let i = 0; i <= 24; i++) {
//   console.log(getRandomUnicalInteger(userId));
// }


const createObjectPhoto = () => ({
  id: generateUserId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: `Прекрасное фото №${getRandomUnicalInteger(userId)}`,
  likes: getRandomUnicalInteger(likes),
  message: getRandomUnicalInteger(coments),
  name: `${getRandomUnicalInteger(userName)}`,
});

objectsPhoto = [];

for (let i = 0; i <= 24; i++) {
  objectsPhoto.push(createObjectPhoto());
}
console.log(objectsPhoto);
