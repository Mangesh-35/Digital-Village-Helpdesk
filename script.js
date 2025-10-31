let sliderIndex = 0;
const slides = document.querySelectorAll(".slider img");
// Mobile Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");  // 👈 add/remove .active
});


function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === sliderIndex) ? "block" : "none";
    });
    sliderIndex = (sliderIndex + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 3000);
