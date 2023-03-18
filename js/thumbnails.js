const pictures = document.querySelector('.pictures');
const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const generateThumbnails = (data) => {
  const thumbnailsFragment = document.createDocumentFragment();

  data.forEach(({ id, url, likes, comments }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);

    thumbnail.id = id;

    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;

    thumbnailsFragment.append(thumbnail);
  });

  pictures.append(thumbnailsFragment);
};

export { generateThumbnails };
