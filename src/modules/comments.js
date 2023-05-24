/* eslint-disable no-unused-vars */
import { baseUrl, endPoints } from './constant.js';

export const createComment = async (itemId, username, comment) => {
  try {
    const createdComment = await fetch(`baseUrl${endPoints.comments}`, {
      method: 'POST',
      body: {
        item_id: itemId,
        username,
        comment,
      },
    });

    return createComment !== undefined;
  } catch (error) {
    return false;
  }
};

export const getComments = async (itemId) => {
  try {
    const comments = await fetch(
      `baseUrl${endPoints.comments}?item_id=${itemId}`,
    );
    const data = comments.json();
    return data;
  } catch (error) {
    return false;
  }
};
