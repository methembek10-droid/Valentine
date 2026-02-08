let yesBtn = document.querySelector('.yes-btn');
let scale = 1;
let images = document.querySelectorAll('.image-slider img');
let currentImage = 0;

document.querySelector('.yes-btn').addEventListener('click', () => {
  window.location.href = 'page.html';
});

document.querySelector('.no-btn').addEventListener('click', () => {
  scale += 0.5;
  yesBtn.style.transform = `scale(${scale})`;
});

setInterval(() => {
  images[currentImage].style.opacity = 0;
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = 1;
}, 5000);
window.addEventListener('load', () => {
  let audio = document.getElementById('myAudio');
  audio.play();
});
window.addEventListener('load', () => {
  let audio = document.getElementById('myAudio');
  audio.play();
});

