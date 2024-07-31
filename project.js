document.addEventListener("DOMContentLoaded", function () {
  function setLanguage() {
    const lang = getUrlParameter("lang") || "ko";
    const mode = getUrlParameter("mode");
    const currentPage = window.location.pathname.split("/").pop();
    const isCorrectPage =
      (lang === "en" &&
        (currentPage === "project_en.html" ||
          currentPage === "project2_en.html")) ||
      (lang === "ko" &&
        (currentPage === "project.html" || currentPage === "project2.html"));

    if (!isCorrectPage) {
      const targetPage =
        lang === "en"
          ? currentPage === "project2.html" ||
            currentPage === "project2_en.html"
            ? "project2_en.html"
            : "project_en.html"
          : currentPage === "project2.html" ||
            currentPage === "project2_en.html"
          ? "project2.html"
          : "project.html";
      const queryString = [];
      if (lang) queryString.push(`lang=${lang}`);
      if (mode) queryString.push(`mode=${mode}`);
      const queryPart =
        queryString.length > 0 ? `?${queryString.join("&")}` : "";
      window.location.href = targetPage + queryPart;
      return;
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
const projectImages = {
  project1: ["p1.png", "p1-detail1.png", "p1-detail2.png"],
  project2: ["p2.png", "p2-detail1.png", "p2-detail2.png"],
};

function updateImages(isAnimating) {
  const images = document.querySelectorAll(".project-picture");

  images.forEach((image, index) => {
    const position = (index - currentImageIndex + 3) % 3;

    if (position === 0) {
      image.className = `project-picture center ${
        isAnimating ? "animating" : ""
      }`;
      image.style.left = "50%";
      image.style.transform = "translate(-50%, 0) scale(1)";
    } else if (position === 1) {
      image.className = `project-picture side right ${
        isAnimating ? "animating" : ""
      }`;
      image.style.left = "75%";
      image.style.transform = "translate(-50%, 0) scale(0.75)";
    } else {
      image.className = `project-picture side ${
        isAnimating ? "animating" : ""
      }`;
      image.style.left = "25%";
      image.style.transform = "translate(-50%, 0) scale(0.75)";
    }

    image.style.opacity = position === 0 ? "1" : "0.3";
    image.style.zIndex = position === 0 ? "2" : "1";
  });
}

function moveImages(direction) {
  const wrapper = document.querySelector(".project-picture-wrapper");
  wrapper.style.transition = "transform 0.5s ease-in-out";

  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % 3;
  } else if (direction === "prev") {
    currentImageIndex = (currentImageIndex - 1 + 3) % 3;
  }

  updateImages(true);

  setTimeout(() => {
    updateImages(false);
  }, 500);
}
