const doseOfComments = 5;
const post = document.querySelector('.big-picture');
const postImage = post.querySelector('.big-picture__img img');
const postLikesCount = post.querySelector('.likes-count');
const postShowingComments = post.querySelector('.showing-comments');
const postCommentsCount = post.querySelector('.comments-count');
const postComments = post.querySelector('.social__comments');
const postComment = post.querySelector('.social__comment');
const postCaption = post.querySelector('.social__caption');
let showingComments;

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
  const commentsPortion = comments.slice(
    showingComments,
    showingComments + doseOfComments
  );
  commentsPortion.forEach((comment) =>
    commentsFragment.append(renderComment(comment))
  );
  postComments.append(commentsFragment);
  showingComments += commentsPortion.length;
  postShowingComments.innerHTML = showingComments;
};

const renderPost = ({ url, likes, description, comments }) => {
  postImage.src = url;
  postLikesCount.textContent = likes;
  postCaption.textContent = description;
  postCommentsCount.textContent = comments.length;
  postComments.innerHTML = '';
  showingComments = 0;
  renderComments(comments);
};

export { renderPost, renderComments };
