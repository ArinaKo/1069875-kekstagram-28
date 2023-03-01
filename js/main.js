const mokisNumber = 25;

const messagesMoki = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const namesMoki = [
  'Арина',
  'Агафья',
  'Андерей',
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
  Math.floor(Math.random() * (max - min) + min);

// const createMessage = () => {
//   const firstSentence = getRandomNumber(0, messagesMoki.length - 1);
//   let message = messagesMoki[firstSentence];
//   // Проверка рандома на количество предложений: 1 или 2
//   // if (getRandomNumber(1, 2) === 2) {
//   //   let secondSentence = getRandomNumber(0, messagesMoki.length - 1);
//   //   while (secondSentence === firstSentence) {
//   //     secondSentence = getRandomNumber(0, messagesMoki.length - 1);
//   //   }
//   //   message += messagesMoki[secondSentence];
//   // }
//   return message;
// };

function generateId(min, max) {
  const usedIds = [];
  return function () {
    let newId = getRandomNumber(min, max);
    while (usedIds.includes[newId]) {
      newId = getRandomNumber(min, max);
    }
    usedIds.push(newId);
    return newId;
  };
}

const createCommentId = generateId();

const createComment = () => {
  const obj = {
    id: createCommentId(),
    avatar: `img/${getRandomNumber(1, 6)}.svg`,
    message: messagesMoki[getRandomNumber(0, messagesMoki.length - 1)],
    name: namesMoki[getRandomNumber(0, namesMoki.length - 1)],
  };
  return obj;
};

const createPostId = generateId(1, mokisNumber);
const createPhotoId = generateId(1, mokisNumber);

const createPhoto = () => {
  const obj = {
    id: createPostId(),
    url: `photos/${createPhotoId()}.jpg`,
    description: 'Да я прирожденный фотограф',
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: 5 }, createComment),
  };
  return obj;
};

const createMokis = Array.from({ length: mokisNumber }, createPhoto);
