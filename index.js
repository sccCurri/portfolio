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
});
