const modal = document.getElementById("projectModal");
const btns = document.querySelectorAll(".seeProject");
const closeBtn = document.querySelector(".close-btn");

btns.forEach((btn) => {
  btn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    window.scrollTo(0, 0);
  };
});

closeBtn.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
};