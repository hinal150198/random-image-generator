const totalImages = 39;

function getRandomImage() {
  const img = document.getElementById('randomImage');
  const randomIndex = Math.floor(Math.random() * totalImages) + 1;
  img.src = `https://hinal150198.github.io/random-image-generator/${randomIndex}.jpg`;
  // Replay fade-in animation on each new fact
  img.style.animation = 'none';
  img.offsetHeight; // force reflow
  img.style.animation = '';
}

window.onload = getRandomImage;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newFactBtn").addEventListener("click", getRandomImage);
  document.getElementById("instagramBtn").addEventListener("click", () => {
    window.open("https://www.instagram.com/fact.o.frame/", "_blank");
  });
});
