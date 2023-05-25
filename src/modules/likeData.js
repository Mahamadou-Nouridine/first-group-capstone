import { baseUrl, endPoints } from "./constant";
import displayLikes from "./displayLikes";

const postLike = async (targetId) => {
  await fetch(`${baseUrl}${endPoints.likes}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({item_id : targetId}),
  });
}

const getLikes = async () => {
  await fetch(`${baseUrl}${endPoints.likes}`)
  .then((response) => response.json())
  .then((response )=> displayLikes(response))
}

export { postLike, getLikes };