const SERVER = 'https://28.javascript.pages.academy/kekstagram';
const Paths = {
  GET_DATA: '/data',
  SEND_DATA: '',
};
const Methods = {
  GET_DATA: 'GET',
  SEND_DATA: 'POST',
};
const ErrorTexts = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const createFetch = (route, errorMessage, method = Methods.GET_DATA, body = null) =>
  fetch(`${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorMessage);
    });

const getData = () =>
  createFetch(
    SERVER + Paths.GET_DATA,
    ErrorTexts.GET_DATA
  );

const sendData = (data) =>
  createFetch(
    SERVER + Paths.SEND_DATA,
    ErrorTexts.SEND_DATA,
    Methods.SEND_DATA,
    data
  );

export { getData, sendData };
