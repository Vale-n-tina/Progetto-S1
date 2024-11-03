const nav = document.getElementById("firstNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 347) {
    nav.classList.add("changeNav");
  } else {
    nav.classList.remove("changeNav");
  }
});

const button = document.querySelector("header ul button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 347) {
    button.classList.add("changeButton");
  } else {
    button.classList.remove("changeButton");
  }
});
