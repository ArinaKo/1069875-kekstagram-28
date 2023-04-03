const isKeyEscape = (evt) => evt.key === 'Escape';

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

export { isKeyEscape, showError, showSubmitMessage };
