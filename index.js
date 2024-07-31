document.addEventListener("DOMContentLoaded", function () {
  setupSkillBars();
  setLanguageAndMode();
  updateCards();
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

const cards = [
  {
    ko: {
      period: "00년 00개월",
      company: "회사/기업명 1",
      term: "YYYY.MM~YYYY.MM",
      team: "소속팀, 직무/직함 1",
      task: "주요 업무 1",
      taskTerm: "YYYY.MM~YYYY.MM",
      project: "주요 프로젝트 1",
      projectDetail: "프로젝트 소개 및 TASK 1",
    },
    en: {
      period: "00 years 00 months",
      company: "Company/Organization Name 1",
      term: "YYYY.MM~YYYY.MM",
      team: "Team, Position/Title 1",
      task: "Main Task 1",
      taskTerm: "YYYY.MM~YYYY.MM",
      project: "Main Project 1",
      projectDetail: "Project Introduction and TASK 1",
    },
  },
  {
    ko: {
      period: "00년 00개월",
      company: "회사/기업명 2",
      term: "YYYY.MM~YYYY.MM",
      team: "소속팀, 직무/직함 2",
      task: "주요 업무 2",
      taskTerm: "YYYY.MM~YYYY.MM",
      project: "주요 프로젝트 2",
      projectDetail: "프로젝트 소개 및 TASK 2",
    },
    en: {
      period: "00 years 00 months",
      company: "Company/Organization Name 2",
      term: "YYYY.MM~YYYY.MM",
      team: "Team, Position/Title 2",
      task: "Main Task 2",
      taskTerm: "YYYY.MM~YYYY.MM",
      project: "Main Project 2",
      projectDetail: "Project Introduction and TASK 2",
    },
  },
  {
    ko: {
      period: "00년 00개월",
      company: "회사/기업명 3",
      term: "YYYY.MM~YYYY.MM",
      team: "소속팀, 직무/직함 3",
      task: "주요 업무 3",
      taskTerm: "YYYY.MM~YYYY.MM",
      project: "주요 프로젝트 3",
      projectDetail: "프로젝트 소개 및 TASK 3",
    },
    en: {
      period: "00 years 00 months",
      company: "Company/Organization Name 3",
      term: "YYYY.MM~YYYY.MM",
      team: "Team, Position/Title 3",
      task: "Main Task 3",
      taskTerm: "YYYY.MM~YYYY.MM",
      project: "Main Project 3",
      projectDetail: "Project Introduction and TASK 3",
    },
  },
];

let currentIndex = 0;

function updateCards() {
  const lang = getUrlParameter("lang") || "ko";
  const cardElements = document.querySelectorAll(".exp-card");

  cardElements.forEach((card, index) => {
    const cardIndex = (currentIndex + index) % 3;
    const cardData = cards[cardIndex][lang];

    card.querySelector(".exp-card-period").textContent = cardData.period;
    card.querySelector(".exp-card-company").textContent = cardData.company;
    card.querySelector(".exp-card-term").textContent = cardData.term;
    card.querySelector(".exp-card-team-name").textContent = cardData.team;
    card.querySelector(".exp-card-task-text").textContent = cardData.task;
    card.querySelector(".exp-card-task-term").textContent = cardData.taskTerm;
    card.querySelector(".exp-card-proj-name").textContent = cardData.project;
    card.querySelector(".exp-card-task-detail-text").textContent =
      cardData.projectDetail;

    card.style.transition = "all 0.5s ease";
    if (index === 1) {
      card.style.transform = "scale(1)";
      card.style.opacity = "1";
      card.style.zIndex = "2";
    } else {
      card.style.transform = "scale(0.75)";
      card.style.opacity = "0.3";
      card.style.zIndex = "1";
    }
  });
}

function moveCards(direction) {
  const cardElements = document.querySelectorAll(".exp-card");

  cardElements.forEach((card) => {
    card.style.transition = "none";
  });

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % 3;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + 3) % 3;
  }

  setTimeout(() => {
    updateCards();
  }, 50);
}
