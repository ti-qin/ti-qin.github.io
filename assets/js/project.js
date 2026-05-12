AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

const projects = [
  {
    title: "Yeast genome",
    cardImage: "assets/images/project-page/circos.png",
    description:
      "A data portal for genome assembly and annotation files.",
    link: "data/index.html",
    actionText: "Open data portal",
  },
  {
    title: "Microprotein",
    cardImage: "assets/images/project-page/struction.png",
    description:
      "Project repository for microprotein folding, stability, and genetic-code analysis.",
    link: "https://github.com/ti-qin/Microprotein_2026",
    actionText: "Open repository",
  },
  {
    title: "Bioqt",
    cardImage: "assets/images/project-page/logo.jpg",
    description:
      "Project repository for bioinformatics tools and analysis workflows.",
    link: "https://github.com/ti-qin/Bioqt",
    actionText: "Open repository",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, link, actionText }) => {
    output += `
      <div class="column skill-card card single-project-card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
        <a class="project-card-link" href="${link}" aria-label="Open ${title}">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title">${title}</h1>
                </div>
                <p class="project-card-description">${description}</p>
                <span class="project-card-action">${actionText}</span>
              </div>
            </div>
          </div>
        </a>
      </div>`;
  });
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);
