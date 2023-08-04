const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const imageGallery = document.querySelector('.image-gallery');

let scrollAmount = 0;
const slideAmount = 200; // Adjust this value to set the amount of sliding per click

prevBtn.addEventListener('click', () => {
  scrollAmount += slideAmount;
  imageGallery.style.transform = `translateX(${scrollAmount}px)`;
});

nextBtn.addEventListener('click', () => {
  scrollAmount -= slideAmount;
  imageGallery.style.transform = `translateX(${scrollAmount}px)`;
});
