import { baseUrl, endPoints } from './constant.js';

const commentsListEl = document.querySelector('.comments-list');
const commenterName = document.querySelector('#commenter-name');
const commentText = document.querySelector('#comment-text');
const modal = document.querySelector('.modal');
const errorBox = document.querySelector('.error-box');
const commentsCountEl = document.querySelector('.comments-count');

const showErrorBox = (message, status) => {
  if (status) errorBox.style.setProperty('color', 'green');
  else errorBox.style.setProperty('color', 'red');

  errorBox.textContent = message;
  setTimeout(() => {
    errorBox.textContent = '';
  }, 3000);
};

export const commentsCounter = (comments) => (comments ? comments.length : 0);

export const createComment = async (itemId, username, comment) => {
  try {
    const createdComment = await fetch(`${baseUrl}${endPoints.comments}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
    });

    return createdComment !== undefined;
  } catch (error) {
    return false;
  }
};

export const getComments = async (itemId) => {
  try {
    const comments = await fetch(
      `${baseUrl}${endPoints.comments}?item_id=${itemId}`,
    );
    if (comments.status !== 200) {
      return false;
    }
    const data = comments.json();
    return data;
  } catch (error) {
    return false;
  }
};

export const displayComment = async (itemId) => {
  commentsListEl.innerHTML = '';
  const comments = await getComments(itemId);
  if (comments) {
    commentsCountEl.textContent = `(${commentsCounter(comments)})`;
    comments.forEach((comment) => {
      const commentEL = document.createElement('div');
      commentEL.classList.add('comment');
      commentEL.innerHTML = `
            <div class="person-icon">
                <i class="fa-solid fa-circle-user"></i>
            </div>
            <div class="conmment-content">
                <h4 class="commenter-name">
                    ${comment.username} . <span>${comment.creation_date}</span>
                </h4>
                <div class="comment-body">
                ${comment.comment}
                </div>
            </div>
        `;
      commentsListEl.appendChild(commentEL);
    });
  } else {
    commentsCountEl.textContent = `(${commentsCounter(false)})`;
    commentsListEl.textContent = 'No comment created';
  }
};

export const submitNewComment = async () => {
  const { id } = modal;
  const newComment = await createComment(
    id,
    commenterName.value,
    commentText.value,
  );

  if (newComment) showErrorBox('Comment created Successfully', true);
  else showErrorBox('An error occurs while creating the comment', false);

  commenterName.value = '';
  commentText.value = '';
  if (newComment) displayComment(id);
};
