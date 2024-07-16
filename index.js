document.addEventListener("DOMContentLoaded", function () {
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

  // 초기 카드 설정
  updateCards();
});

const cards = [
  {
    period: "00년 00개월",
    company: "회사/기업명 1",
    term: "YYYY.MM~YYYY.MM",
    team: "소속팀, 직무/직함 1",
    task: "주요 업무 1",
    taskTerm: "YYYY.MM~YYYY.MM",
    project: "주요 프로젝트 1",
    projectDetail: "프로젝트 소개 및 TASK 1",
  },
  {
    period: "00년 00개월",
    company: "회사/기업명 2",
    term: "YYYY.MM~YYYY.MM",
    team: "소속팀, 직무/직함 2",
    task: "주요 업무 2",
    taskTerm: "YYYY.MM~YYYY.MM",
    project: "주요 프로젝트 2",
    projectDetail: "프로젝트 소개 및 TASK 2",
  },
  {
    period: "00년 00개월",
    company: "회사/기업명 3",
    term: "YYYY.MM~YYYY.MM",
    team: "소속팀, 직무/직함 3",
    task: "주요 업무 3",
    taskTerm: "YYYY.MM~YYYY.MM",
    project: "주요 프로젝트 3",
    projectDetail: "프로젝트 소개 및 TASK 3",
  },
];

let currentIndex = 0;

function updateCards() {
  for (let i = 0; i < 3; i++) {
    const cardIndex = (currentIndex + i) % 3;
    const card = cards[cardIndex];
    const cardElement = document.getElementById(`card${i + 1}`);

    cardElement.querySelector(".experience-card-period").textContent =
      card.period;
    cardElement.querySelector(".experience-card-company").textContent =
      card.company;
    cardElement.querySelector(".experience-card-term").textContent = card.term;
    cardElement.querySelector(".experience-card-team-name").textContent =
      card.team;
    cardElement.querySelector(".experience-card-task-text").textContent =
      card.task;
    cardElement.querySelector(".experience-card-task-term").textContent =
      card.taskTerm;
    cardElement.querySelector(".experience-card-project-name").textContent =
      card.project;
    cardElement.querySelector(".experience-card-task-detail-text").textContent =
      card.projectDetail;

    if (i === 1) {
      cardElement.style.transform = "scale(1)";
      cardElement.style.opacity = "1";
    } else {
      cardElement.style.transform = "scale(0.75)";
      cardElement.style.opacity = "0.3";
    }
  }
}

function moveCards(direction) {
  const frame = document.querySelector(".experience-card-frame");
  frame.style.transition = "transform 0.5s ease-in-out";

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % 3;
    frame.style.transform = "translateX(-33.33%)";
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + 3) % 3;
    frame.style.transform = "translateX(33.33%)";
  }

  setTimeout(() => {
    frame.style.transition = "none";
    frame.style.transform = "translateX(0)";
    updateCards();
  }, 500);
}
