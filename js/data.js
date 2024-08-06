import { getRandomInteger } from './util.js';
import { createRandomIdFromRangeGenerator } from './util.js';
import { createIdGenerator } from './util.js';


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USER_NAME = ['Александр', 'Мария', 'Иван', 'Анастасия', 'Дмитрий', 'Елена', 'Николай', 'Ольга', 'Артем', 'Екатерина', 'Владимир', 'Светлана', 'Павел', 'Татьяна', 'Сергей', 'Наталья', 'Алексей', 'Людмила', 'Андрей', 'Анна', 'Максим', 'Юлия', 'Ирина', 'Василий', 'Оксана'];


const generationPhotoId = createIdGenerator();
const generationUserId = createIdGenerator();

const countIdComments = createRandomIdFromRangeGenerator(1, 1000);

//функция генерирует случайное кол-во комментариев
const generationComment = () => ({
  id: countIdComments(),
  avatar: `img/avatar-${getRandomInteger(0, 6)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: USER_NAME[getRandomInteger(0, USER_NAME.length - 1)]
});

const generationComments = () => {
  const countComments = getRandomInteger(0, 30);
  return Array.from({ length: countComments }, generationComment);
};

const createObjectPhoto = () => ({
  photoId: generationUserId(),
  url: `photos/${generationPhotoId()}.jpg`,
  description: `Прекрасное фото №${getRandomInteger(0, 25)}`,
  likes: getRandomInteger(0, 200),
  comments: generationComments()
});

const generateArrayPhoto = () => Array.from({ length: 25 }, createObjectPhoto);
export { generateArrayPhoto };
