import './index.css';
import { itemCounter, onPageLoad } from './modules/onPageLoad.js';

window.addEventListener('DOMContentLoaded', () => {
  onPageLoad();
  itemCounter();
});