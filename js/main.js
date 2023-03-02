const NUMBER_OF_PHOTOS = 15;
const NUMBER_OF_AVATARS = 6;
const NUMBER_OF_COMMENTS = 5;
const likesLimit = {
  MIN: 15,
  MAX: 200,
};
const commentsIdLimit = {
  MIN: 1000,
  MAX: 9999,
};

const MESSAGE_EXAMPLES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME_EXAMPLES = [
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

function generateId(min, max) {
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

const createCommentId = generateId(commentsIdLimit.MIN, commentsIdLimit.MAX);

const createComment = () => {
  const obj = {
    id: createCommentId(),
    avatar: `img/${getRandomNumber(1, NUMBER_OF_AVATARS)}.svg`,
    message: MESSAGE_EXAMPLES[getRandomNumber(0, MESSAGE_EXAMPLES.length - 1)],
    name: NAME_EXAMPLES[getRandomNumber(0, NAME_EXAMPLES.length - 1)],
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
    likes: getRandomNumber(likesLimit.MIN, likesLimit.MAX),
    comments: Array.from({ length: NUMBER_OF_COMMENTS }, createComment),
  };
  return obj;
};

const examplePosts = Array.from({ length: NUMBER_OF_PHOTOS }, createPost);

console.log(examplePosts);
