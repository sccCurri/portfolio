document.addEventListener("DOMContentLoaded", function () {
  function setLanguage() {
    const lang = getUrlParameter("lang") || "ko";
    if (lang === "en") {
      window.location.href = "project_en.html" + window.location.search;
    }
  }

  function getUrlParameter(name) {
    const url = window.location.href;
    const param = url.match(new RegExp(`[?&]${name}=([^&]*)`));
    return param && param[1];
  }

  setLanguage();

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
  const wrapper = document.querySelector(".project-picture-wrapper");
  wrapper.style.transition = "transform 0.5s ease-in-out";

  if (direction === "next") {
    wrapper.style.transform = "translateX(-33.33%)";
    currentImageIndex = (currentImageIndex + 1) % 3;
  } else if (direction === "prev") {
    wrapper.style.transform = "translateX(33.33%)";
    currentImageIndex = (currentImageIndex - 1 + 3) % 3;
  }

  setTimeout(() => {
    wrapper.style.transition = "none";
    wrapper.style.transform = "translateX(0)";
    updateImages();
  }, 500);
}
