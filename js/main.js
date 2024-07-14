const counUsers = 25;

const userId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const coments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const userName = ['Александр, Мария, Иван, Анастасия, Дмитрий, Елена, Николай, Ольга, Артем, Екатерина, Владимир, Светлана, Павел, Татьяна, Сергей, Наталья, Алексей, Людмила, Андрей, Анна, Максим, Юлия, Ирина, Василий, Оксана'];


function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

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

const getRandomArrayElement = (elements) => elements[createRandomIdFromRangeGenerator(0, elements.length - 1)];

const createWizard = () => ({
  id: getRandomArrayElement(userId),
  url: `photos/${ getRandomArrayElement(userId) }.jpg` ,
  description: `Прекрасное фото №${ getRandomArrayElement(userId)}`,
  message:getRandomArrayElement(coments),
  name: `${getRandomArrayElement(userName) }`,
});

console.log(createWizard());

// const similarWizards = Array.from({length: counUsers}, createWizard);

// console.log(similarWizards);

