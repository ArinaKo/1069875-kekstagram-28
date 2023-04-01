const isKeyEscape = (evt) => evt.key === 'Escape';

const showError = (message, styleClass, place) => {
  const element = document.createElement('div');
  element.className = styleClass;
  element.textContent = message;
  place.append(element);
  setTimeout(() => element.remove(), 10000);
};

export { isKeyEscape, showError };
