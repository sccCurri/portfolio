document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("image1")) {
    updateImages();
  }
});

let currentImageIndex = 0;
const images = ["p1.png", "p2.png", "p3.png"];

function updateImages() {
  for (let i = 0; i < 3; i++) {
    const imageIndex = (currentImageIndex + i) % 3;
    const imageElement = document.getElementById(`image${i + 1}`);
    const imgElement = imageElement.querySelector("img");

    imgElement.src = `image/${images[imageIndex]}`;

    if (i === 1) {
      imageElement.className = "project-picture center";
    } else {
      imageElement.className = "project-picture side";
    }
  }
}

function moveImages(direction) {
  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % 3;
  } else if (direction === "prev") {
    currentImageIndex = (currentImageIndex - 1 + 3) % 3;
  }
  updateImages();
}
