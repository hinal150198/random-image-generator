const totalImages = 39;
let currentIndex = null;

function getRandomImage() {
  const img = document.getElementById('randomImage');

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * totalImages) + 1;
  } while (randomIndex === currentIndex);

  currentIndex = randomIndex;
  img.src = `https://hinal150198.github.io/random-image-generator/${randomIndex}.jpg`;
  img.style.animation = 'none';
  img.offsetHeight; // force reflow so fade-in replays
  img.style.animation = '';
}

window.onload = getRandomImage;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newFactBtn").addEventListener("click", getRandomImage);
  document.getElementById("instagramBtn").addEventListener("click", () => {
    window.open("https://www.instagram.com/fact.o.frame/", "_blank");
  });
});
