const dropdowns = document.querySelectorAll(".dropdown");
let menuBtn = document.querySelector(".fa-bars")
let ul = document.querySelector(".mobile-nav")

menuBtn.addEventListener('click', () => {
	ul.classList.toggle("toggleClass")
})

dropdowns.forEach(e => {

  const button = e.querySelector(".dropdown-btn");
  
  button.addEventListener("click", () => {

    Array.from(dropdowns).filter(x => x != e).forEach(e => e.classList.remove("is-open"));

    e.classList.toggle("is-open");
  });
});