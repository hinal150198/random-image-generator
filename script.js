const totalImages = 39;

function getRandomImage() {
  const img = document.getElementById('randomImage');
  const card = document.getElementById('imageCard');

  // Reset fade for new load
  img.classList.remove('loaded');
  card.classList.remove('loaded');

  const randomIndex = Math.floor(Math.random() * totalImages) + 1;
  img.src = `https://hinal150198.github.io/random-image-generator/${randomIndex}.jpg`;

  img.onload = () => {
    img.classList.add('loaded');
    card.classList.add('loaded'); // hides shimmer
  };
}

document.addEventListener("DOMContentLoaded", () => {
  getRandomImage(); // Load first image on arrival

  document.getElementById("newFactBtn").addEventListener("click", getRandomImage);

  document.getElementById("instagramBtn").addEventListener("click", () => {
    window.open("https://www.instagram.com/fact.o.frame/", "_blank");
  });
});
