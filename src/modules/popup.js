// eslint-disable-next-line import/no-cycle
import { displayComment } from "./comments.js";
import { fetchCats } from "./displayCats.js";

const modal = document.querySelector(".modal");
const popup = document.querySelector(".popup");
const popupDescription = document.querySelector(".popup-description p");
const popupImage = document.querySelector(".popup-image");
const popupTitle = document.querySelector(".popup-title");

const updatePopupInfo = (catName, description, category, image) => {
  popupTitle.textContent = `${catName} (${category})`;
  popupDescription.textContent = description;
  popupImage.src = image;
};

const openModal = async (cat) => {
  displayComment(cat.id);
  const catstate = await fetchCats();
  const image = cat.url;
  const category = cat.breeds[0].name;
  const { description } = cat.breeds[0];
  const name = `cat ${catstate.indexOf(cat) + 1}`;
  updatePopupInfo(name, description, category, image);
  modal.classList.add("modal-open");
  modal.id = cat.id;
  document.body.style.setProperty("overflow", "hidden");
  setTimeout(() => {
    popup.classList.add("popup-open");
  }, 400);
};

export const closeModal = () => {
  popup.classList.remove("popup-open");
  setTimeout(() => {
    modal.classList.remove("modal-open");
    document.body.style.setProperty("overflow", "unset");
  }, 400);
};

export const setShowListener = async () => {
  const catstate = await fetchCats();
  const messagesIcons = document.querySelectorAll(".message");
  messagesIcons.forEach((icon) => {
    const index = Number(icon.id);
    const cat = catstate[index];
    icon.addEventListener("click", () => {
      openModal(cat);
    });
  });
};
