// Step 1: Set the total number of images
const totalImages = 110;

// Step 2: Function to generate a random image
function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * totalImages) + 1; // Generate a random number between 1 and 365
    const imagePath = `images/${randomIndex}.jpg`; // Construct the path to the image
    document.getElementById('randomImage').src = imagePath; // Set the image source
}

// Step 3: Automatically display a random image when the page loads
window.onload = showRandomImage;
