const totalImages = 24; // Update with the correct number of images

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const imagePath = `https://hinal150198.github.io/random-image-generator/${randomIndex}.jpg`;
    document.getElementById('randomImage').src = imagePath;
}

// Call the function when the page loads
window.onload = getRandomImage;

// Handle button actions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("instagramBtn").addEventListener("click", () => {
        window.open("https://www.instagram.com/fact.o.frame/", "_blank");
    });

    document.getElementById("newFactBtn").addEventListener("click", () => {
        location.reload();
    });
});

