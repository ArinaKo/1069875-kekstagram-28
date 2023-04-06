const COMMENTS_DOSE = 5;

const post = document.querySelector('.big-picture');
const postImage = post.querySelector('.big-picture__img img');
const postLikesCount = post.querySelector('.likes-count');
const postShowingComments = post.querySelector('.showing-comments');
const postCommentsCount = post.querySelector('.comments-count');
const postComments = post.querySelector('.social__comments');
const postComment = post.querySelector('.social__comment');
const postCaption = post.querySelector('.social__caption');

let showingComments;

const createComment = ({ message, avatar, name }) => {
  const commentElement = postComment.cloneNode(true);
  commentElement.querySelector('.social__text').textContent = message;
  const commentImage = commentElement.querySelector('.social__picture');
  commentImage.src = avatar;
  commentImage.alt = name;
  return commentElement;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  const commentsPortion = comments.slice(
    showingComments,
    showingComments + COMMENTS_DOSE
  );
  commentsPortion.forEach((comment) =>
    commentsFragment.append(createComment(comment))
  );
  postComments.append(commentsFragment);
  showingComments += commentsPortion.length;
  postShowingComments.textContent = showingComments;
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
