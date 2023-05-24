import "./index.css";
import { displayComment, submitNewComment } from "./modules/comments";
import { displayCats } from "./modules/displayCats.js";
import { closeModal } from "./modules/popup.js";

const cross = document.querySelector(".cross i");
const form = document.querySelector("form");

window.addEventListener("DOMContentLoaded", () => {
  displayCats();
  cross.addEventListener("click", closeModal);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitNewComment();
  });
});
