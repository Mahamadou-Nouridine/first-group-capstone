/* eslint-disable import/no-cycle */
import { getLikes, postLike } from './likeData.js';
import { setShowListener } from './popup.js';

let catState = [];

export const fetchCats = async () => {
  if (catState.length) {
    return catState;
  }
  const res = await fetch(
    'https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=20&order=ASC',
    {
      headers: {
        'x-api-key':
            'live_bY7Sj61OTOApLZj0Eh5EnRPCEMGjIwAvltIF0RlSbqBFDTrZaljn4BX4IZm4abyR',
      },
    },
  );
  const data = await res.json();
  // localStorage.setItem("cats", JSON.stringify(data));
  // const data = JSON.parse(localStorage.getItem('cats'));
  catState = data;
  return data;
};

const itemCounter = (urls) => {
  const itemCount = document.querySelector('.item-count');
  itemCount.innerHTML = urls.length;
};

const displayCats = async () => {
  const data = await fetchCats();
  localStorage.setItem('cats', JSON.stringify(data));
  const urls = Object.values(data).map((catImage) => catImage.url);
  const holder = document.querySelector('.cat-container');
  urls.forEach((url, index) => {
    const show = document.createElement('div');
    show.classList.add('cat');
    show.innerHTML = `
      <img src=${url} alt='cat'>
      <section class="interactions">
        <button id='${index}' class='heart' >
          <span class='count' id='${index}'>0</span>
          Likes <i class="fa-regular fa-heart"></i>
        </button>
        <button id='${index}' class='message'>
          Comment <i class="fa-regular fa-message"></i>
        </button>
      </section>
    `;
    holder.appendChild(show);
  });
  itemCounter(urls);
  setShowListener();

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('heart')) {
      const targetId = e.target.id;
      postLike(targetId);
      const likeHolder = e.target.firstElementChild;
      let likeNum = Number(likeHolder.textContent);
      likeNum += 1;
      likeHolder.textContent = String(likeNum);
    }
  });
  getLikes();
};

export default displayCats;
