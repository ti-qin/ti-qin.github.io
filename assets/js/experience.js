AOS.init();

// Conference cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "The 4th AsiaEvo Conference",
    cardImage: "assets/images/experience-page/4th evo.png",
    place: "Oral presentation",
    time: "December 8-12, 2025",
    desp: 'Genome-wide profiling of evolutionary constraints defines the functional core of human microproteins',
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Funding cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Funding 1",
    cardImage: "assets/images/experience-page/1.jpg",
    description: "Funding details will be added here.",
  },
  {
    title: "Funding 2",
    cardImage: "assets/images/experience-page/2.jpg",
    description: "Funding details will be added here.",
  },
  {
    title: "Funding 3",
    cardImage: "assets/images/experience-page/3.jpg",
    description: "Funding details will be added here.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
        <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
        <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p>
        </div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hide the old hackathon template section.
document.addEventListener("DOMContentLoaded", () => {
  const hackathonHeading = document.querySelector(".mcard");
  if (hackathonHeading && hackathonHeading.parentElement) {
    hackathonHeading.parentElement.style.display = "none";
  }
});
