const modalOverlay = document.querySelector(".modal-overlay");
const btnSignup = document.querySelector(".btn-signup");
const closeBtn = document.querySelector(".close-modal-btn");

btnSignup.addEventListener("click", () => {
  //console.log("button click")
    modalOverlay.classList.toggle("open-modal");
  });

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});
