/* eslint-disable import/no-cycle */
import { setShowListener } from './popup.js';

let catState = [];

export const fetchCats = async () => {
  if (catState.length) {
    return catState;
  }
  // const res = await fetch(
  //   'https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=20&order=ASC',
  //   {
  //     headers: {
  //       'x-api-key':
  //           'live_bY7Sj61OTOApLZj0Eh5EnRPCEMGjIwAvltIF0RlSbqBFDTrZaljn4BX4IZm4abyR',
  //     },
  //   },
  // );
  // const data = await res.json();
  // localStorage.setItem("cats", JSON.stringify(data));
  const data = JSON.parse(localStorage.getItem("cats"));
  catState = data;
  return data;
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
        <div class='heart'>
          Like <i class="fa-regular fa-heart"></i>
        </div>
        <button id='${index}' class='message'>
          Comment <i class="fa-regular fa-message"></i>
        </button>
      </section>
    `;
    holder.appendChild(show);
  });
  setShowListener();
};

const itemCounter = async () => {
  const res = await fetch(
    'https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=20&order=ASC',
    {
      headers: {
        'x-api-key':
          'live_3LSh5c98OlFcR32CElsjBzHpY2E51GK0xqpsu3c0dmxVtEwQ7m9HCw6g5i7VPjBr',
      },
    },
  );
  const data = await res.json();
  const urls = Object.values(data).map((catImage) => catImage.url);
  const itemCount = document.querySelector('.item-count');
  itemCount.innerHTML = urls.length;
};

export { displayCats, itemCounter };
