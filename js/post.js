const post = document.querySelector('.big-picture');
const postImage = post.querySelector('.big-picture__img img');
const postLikesCount = post.querySelector('.likes-count');
const postCommentsCount = post.querySelector('.comments-count');
const postComments = post.querySelector('.social__comments');
const postComment = post.querySelector('.social__comment');
const postCaption = post.querySelector('.social__caption');

const renderComment = ({ message, avatar, name }) => {
  const comment = postComment.cloneNode(true);
  comment.querySelector('.social__text').textContent = message;
  const commentImage = comment.querySelector('.social__picture');
  commentImage.src = avatar;
  commentImage.alt = name;
  return comment;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) =>
    commentsFragment.append(renderComment(comment))
  );
  postComments.innerHTML = '';
  postComments.append(commentsFragment);
};

const renderPost = ({ url, likes, description, comments }) => {
  postImage.src = url;
  postLikesCount.textContent = likes;
  postCaption.textContent = description;
  postCommentsCount.textContent = comments.length;
  renderComments(comments);
};

export { renderPost };
