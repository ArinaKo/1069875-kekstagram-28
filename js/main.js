const NUMBER_OF_PHOTOS = 15;

const messageExamples = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const nameExamples = [
  'Арина',
  'Агафья',
  'Андрей',
  'Артем',
  'Анна',
  'Агата',
  'Антон',
  'Аркадий',
  'Анфиса',
  'Анастасия',
  'Алексей',
  'Артур',
];

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

function generateId (min, max) {
  const usedIds = [];
  return function () {
    let newId = getRandomNumber(min, max);
    while (usedIds.includes(newId)) {
      newId = getRandomNumber(min, max);
    }
    usedIds.push(newId);
    return newId;
  };
}

const createCommentId = generateId(1000, 9999);

const createComment = () => {
  const obj = {
    id: createCommentId(),
    avatar: `img/${getRandomNumber(1, 6)}.svg`,
    message: messageExamples[getRandomNumber(0, messageExamples.length - 1)],
    name: nameExamples[getRandomNumber(0, nameExamples.length - 1)],
  };
  return obj;
};

const createPostId = generateId(1, NUMBER_OF_PHOTOS);
const createPhotoId = generateId(1, NUMBER_OF_PHOTOS);

const createPost = () => {
  const obj = {
    id: createPostId(),
    url: `photos/${createPhotoId()}.jpg`,
    description: 'Да я прирожденный фотограф',
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: 5 }, createComment),
  };
  return obj;
};

const examplePosts = Array.from({ length: NUMBER_OF_PHOTOS }, createPost);

console.log(examplePosts);
