const pictures = document.querySelector('.pictures');
const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createThumbnail = ({ id, url, likes, comments }) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.dataset.thumbnailId = id;

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent =
    comments.length;

  return thumbnailElement;
};

const generateThumbnails = (data) => {
  const thumbnailsFragment = document.createDocumentFragment();

  data.forEach((item) => thumbnailsFragment.append(createThumbnail(item)));

  pictures.append(thumbnailsFragment);
};

export { generateThumbnails };
