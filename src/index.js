import './index.css';
import { displayCats } from './modules/displayCats.js';
import { closeModal } from './modules/popup.js';

const cross = document.querySelector('.cross i');

window.addEventListener('DOMContentLoaded', () => {
  displayCats();
  cross.addEventListener('click', closeModal);
});
