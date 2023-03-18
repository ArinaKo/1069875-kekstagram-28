import { getRandomNumber, generateId, getRandomElement } from './utilities.js';

const NUMBER_OF_PHOTOS = 25;
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

const DESCRIPTION_EXAMPLES = [
  'Да я прирожденный фотограф',
  'Никогда не позволяйте никому скучать',
  'Я точно знаю, кто я, и я чертовски горжусь этим',
  'Поймали дзен',
  'Жизнь не идеальна, но еда может быть вполне',
  'Это моя бандитская жизнь',
  'Без слов',
  'Good vibes only',
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

const createCommentId = generateId(commentsIdLimit.MIN, commentsIdLimit.MAX);

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, NUMBER_OF_AVATARS)}.svg`,
  message: getRandomElement(MESSAGE_EXAMPLES),
  name: getRandomElement(NAME_EXAMPLES),
});

const createPostId = generateId(1, NUMBER_OF_PHOTOS);
const createPhotoId = generateId(1, NUMBER_OF_PHOTOS);

const createPost = () => ({
  id: createPostId(),
  url: `photos/${createPhotoId()}.jpg`,
  description: getRandomElement(DESCRIPTION_EXAMPLES),
  likes: getRandomNumber(likesLimit.MIN, likesLimit.MAX),
  comments: Array.from({ length: NUMBER_OF_COMMENTS }, createComment),
});

const generatePosts = () =>
  Array.from({ length: NUMBER_OF_PHOTOS }, createPost);

export { generatePosts };
