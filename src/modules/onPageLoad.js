const onPageLoad = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=20&order=ASC', {
    headers: {
      'x-api-key': 'live_3LSh5c98OlFcR32CElsjBzHpY2E51GK0xqpsu3c0dmxVtEwQ7m9HCw6g5i7VPjBr',
    },
  });
  const data = await res.json();
  const urls = Object.values(data).map((catImage) => (catImage.url));
  let show = '';
  const holder = document.querySelector('.cat-container');
  urls.forEach((url) => {
    show += `
    <div class='cat'>
      <img src=${url} alt='cat'>
    </div>
    `;
  });
  holder.innerHTML = show;
};

const itemCounter = async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=20&order=ASC', {
    headers: {
      'x-api-key': 'live_3LSh5c98OlFcR32CElsjBzHpY2E51GK0xqpsu3c0dmxVtEwQ7m9HCw6g5i7VPjBr',
    },
  });
  const data = await res.json();
  const urls = Object.values(data).map((catImage) => (catImage.url));
  const itemCount = document.querySelector('.item-count');
  itemCount.innerHTML = urls.length;
};

export { onPageLoad, itemCounter };