// Assuming your images are named image1.jpg, image2.jpg, ..., image365.jpg
const totalImages = 110; // Total number of images

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const imagePath = `https://hinal150198.github.io/random-image-generator/image${randomIndex}.jpg`; // Update this line
    document.getElementById('randomImage').src = imagePath;
}

// Call the function when the page loads
window.onload = getRandomImage;
