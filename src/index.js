import './index.css';
import { submitNewComment } from './modules/comments.js';
import { displayCats } from './modules/displayCats.js';
import { closeModal } from './modules/popup.js';

const cross = document.querySelector('.cross i');
const form = document.querySelector('form');

window.addEventListener('DOMContentLoaded', () => {
  displayCats();
  cross.addEventListener('click', closeModal);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitNewComment();
  });
});
