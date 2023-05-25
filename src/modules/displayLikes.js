const displayLikes = (results) => {
  const counts = document.querySelectorAll('.count');
  results.forEach((result) => {
    counts.forEach((count) => {
      if(count.id === result.item_id) {
        count.textContent = result.likes;
      };
    });
  });
}

export default displayLikes;