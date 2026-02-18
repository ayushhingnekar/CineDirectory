const banner = document.querySelector(".banner");
const images = document.querySelectorAll(".banner img");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide() {
    banner.style.transform = `translateX(-${index * 100}%)`;
}

// nextBtn.addEventListener("click", () => {
//     index++;
//     if (index >= images.length) index = 0;
//     showSlide();
// });

// prevBtn.addEventListener("click", () => {
//     index--;
//     if (index < 0) index = images.length - 1;
//     showSlide();
// });

// Auto slide (optional)
setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    showSlide();
}, 3000);