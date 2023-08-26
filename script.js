const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav__link")

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("hide")
})

console.log("Hello world")
