const pictures = document.querySelector('.pictures');
const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createThumbnail = ({ id, url, likes, comments }, fragment) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.id = id;

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  fragment.append(thumbnail);
};

const generateThumbnails = (data) => {
  const thumbnailsFragment = document.createDocumentFragment();

  data.forEach((item) => createThumbnail(item, thumbnailsFragment));

  pictures.append(thumbnailsFragment);
};

export { generateThumbnails };
