const title = document.getElementById("title");
const btns = document.querySelectorAll(".btn");
const counter = document.querySelector("#counter");
let value = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentBtn = e.currentTarget;
    const classList = currentBtn.classList;
    if (classList.contains("reset")) {
      value = 0;
      counter.textContent = value;
    }
    if (classList.contains("increase")) {
      value++;
      counter.textContent = value;
    }
    if (classList.contains("decrease")) {
      value--;
      counter.textContent = value;
    }

    if (value > 0) {
      counter.style.color = "#00ff00";
      title.style.color = "#00ff00";
      title.classList.add("transition");
    }
    if (value === 0) {
      counter.style.color = "#000";
      title.style.color = "#000";
    }
    if (value < 0) {
      counter.style.color = "#ff0000";
      title.style.color = "#ff0000";
    }
  });
});
