document.addEventListener("DOMContentLoaded", function () {
  setupSkillBars();
  setLanguageAndMode();
});

function setLanguageAndMode() {
  const lang = getUrlParameter("lang") || "ko";
  const mode = getUrlParameter("mode");
  const currentPage = window.location.pathname.split("/").pop();
  const isCorrectPage =
    (lang === "en" && currentPage === "index_en.html") ||
    (lang === "ko" && currentPage === "index.html");

  if (!isCorrectPage) {
    const targetPage = lang === "en" ? "index_en.html" : "index.html";
    const queryString = [];
    if (lang) queryString.push(`lang=${lang}`);
    if (mode) queryString.push(`mode=${mode}`);
    const queryPart = queryString.length > 0 ? `?${queryString.join("&")}` : "";
    window.location.href = targetPage + queryPart;
    return;
  }

  // 모드 설정 (기존 코드 유지)
  if (mode === "sparta") {
    document.documentElement.style.setProperty(
      "--main-organization-color",
      "#E8344E"
    );
    document.documentElement.style.setProperty(
      "--sub-organization-color",
      "#FAD6DC"
    );
    document.documentElement.style.setProperty(
      "--main-svg-filter",
      "invert(30%) sepia(44%) saturate(5563%) hue-rotate(335deg) brightness(96%) contrast(89%)"
    );
    updateLogos("image/sparta-logo.png");
  }
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getUpdatedQueryString(lang, mode) {
  let queryString = "";
  if (mode) {
    queryString += `?mode=${mode}`;
  }
  return queryString;
}

function updateLogos(logoSrc) {
  const sideBarLogo = document.querySelector(".side-bar-logo");
  const introLogo = document.querySelector(".intro-logo");

  if (sideBarLogo) {
    sideBarLogo.src = logoSrc;
  }
  if (introLogo) {
    introLogo.src = logoSrc;
  }
}

function setupSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.setProperty("--progress", progress);

    const progressBar = bar.querySelector(".skill-bar-progress");
    progressBar.style.width = `calc((100% - 14px) * ${progress} / 100)`;

    const rectangle = bar.querySelector(".skill-bar-rectangle");
    rectangle.style.width = `calc(100% - 5px)`;

    const o1 = bar.querySelector(".skill-bar-o1");
    const o2 = bar.querySelector(".skill-bar-o2");
    o1.style.left = `calc(100% - 14px)`;
    o2.style.left = `calc(100% - 11px)`;
  });
}
