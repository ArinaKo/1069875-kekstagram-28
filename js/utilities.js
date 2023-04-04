const isKeyEscape = (evt) => evt.key === 'Escape';

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomNumbers = (amount, fromNum, toNum) => {
  const numbers = [];
  for (let i = 1; i <= amount; i++) {
    let newNum = getRandomNumber(fromNum, toNum);
    while (numbers.includes(newNum)) {
      newNum = getRandomNumber(fromNum, toNum);
    }
    numbers.push(newNum);
  }
  return numbers;
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const showError = (message, styleClass, place) => {
  const element = document.createElement('div');
  element.className = styleClass;
  element.textContent = message;
  place.append(element);
  setTimeout(() => element.remove(), 10000);
};

const showSubmitMessage = (template, place) => {
  const message = template.cloneNode(true);
  message.dataset.userMessage = true;

  message.querySelector('button').addEventListener('click', () => {
    message.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isKeyEscape(evt)) {
      message.remove();
    }
  });
  document.addEventListener('click', (evt) => {
    if (!evt.target.matches('div')) {
      message.remove();
    }
  });

  place.append(message);
};

export {
  isKeyEscape,
  showError,
  showSubmitMessage,
  getRandomNumbers,
  debounce,
};
