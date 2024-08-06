const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USER_NAME = ['Александр', 'Мария', 'Иван', 'Анастасия', 'Дмитрий', 'Елена', 'Николай', 'Ольга', 'Артем', 'Екатерина', 'Владимир', 'Светлана', 'Павел', 'Татьяна', 'Сергей', 'Наталья', 'Алексей', 'Людмила', 'Андрей', 'Анна', 'Максим', 'Юлия', 'Ирина', 'Василий', 'Оксана'];

//функция возвращает случайное число
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
//функция возвращает случайное УНИКАЛЬНОЕ число
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
//функция увеличивает счетчик на +1 с каждой итерацией
function createIdGenerator() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generationPhotoId = createIdGenerator();
const generationUserId = createIdGenerator();

const countIdComments = createRandomIdFromRangeGenerator(1, 1000);

//функция генерирует случайное кол-во коментариев
const generationComment = () => ({
  id: countIdComments(),
  avatar: `img/avatar-${getRandomInteger(0, 6)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: USER_NAME[getRandomInteger(0, USER_NAME.length - 1)]
});

const genegateComments = () => {
  const countComments = getRandomInteger(0, 30);
  return Array.from({ length: countComments }, generationComment);
};

const createObjectPhoto = () => ({
  photoId: generationUserId(),
  url: `photos/${generationPhotoId()}.jpg`,
  description: `Прекрасное фото №${getRandomInteger(0, 25)}`,
  likes: getRandomInteger(0, 200),
  comments: genegateComments()
});

const OBJECTS_PHOTO = [];

for (let i = 0; i <= 24; i++) {
  OBJECTS_PHOTO.push(createObjectPhoto());
}
