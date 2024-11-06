"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");
const show_modal = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  //modal.style.display = "block";
  //overlay.style.display = "block";
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", openModal);
}
overlay.addEventListener("click", closeModal);
close_modal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
