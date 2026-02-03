// Typing Animation
const text = "Frontend Web Developer";
let index = 0;

function typeEffect() {
  document.querySelector(".typing").innerHTML = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
