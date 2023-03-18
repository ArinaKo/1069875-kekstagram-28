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

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

const isKeyEscape = (evt) => evt.key === 'Escape';

export { getRandomNumber, generateId, getRandomElement, isKeyEscape };
