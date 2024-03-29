const headerBar = document.querySelector(".header");
const about = document.querySelector("#about");
const contact = document.querySelector(".profile__contact");
const home = document.querySelector("#background--sunrise");
const profile = document.querySelector("#profile");
// fix headerBar
const arrow = document.querySelector("#arrow");
import "./img/노을.jpg";
import "./img/프로필.jpg";
import "./img/sun-icon.png";
require("./style.css");

function fixNav() {
  if (window.scrollY > headerBar.clientHeight) {
    headerBar.classList.add(`fixed`);
    arrow.classList.add(`arrowToHome`);
  } else {
    headerBar.classList.remove(`fixed`);
    arrow.classList.remove(`arrowToHome`);
  }
}

window.addEventListener("scroll", fixNav);
window.addEventListener("scroll", fixNav);
// scroll to the desired element
const navBar = document.querySelector(".header__menu");

function onclick(event) {
  const id = event.target.dataset.target;
  const targetElement = document.querySelector(`${id}`);
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

navBar.addEventListener("click", onclick);
contact.addEventListener("click", onclick);
arrow.addEventListener("click", onclick);

// make home trasparent

function transparent() {
  profile.classList.add("transparent");
  profile.style.opacity = 1 - window.scrollY / home.clientHeight;
}

window.addEventListener("scroll", transparent);

// filtering

// function loadData() {
//   return fetch(`data/projectdata.json`) //데이터 받아옴
//     .then((response) => response.json()) //받아온 데이터 json으로 변환
//     .then((json) => json.projects); //json 안에 있는 projects를 return
// }
// function displayProjects(projects) {
//   const projectContainer = document.querySelector(".projects__screenshots");
//   projectContainer.innerHTML = projects.map((project) => jsonToString(project));
// }
// function jsonToString(project) {
//   return `<a href="${project.href}" target="blank" class="project">
//   <img src="${project.src}" alt="${project.alt}" />
//   <div class="project__description">
//     <h3>${project.title}</h3>
//     <span>${project.description}</span>
//   </div>
// </a>`;
// }
const navProjects = document.querySelectorAll(".projects-nav__list");
const projectContainer = document.querySelectorAll(".project");

navProjects.forEach((navProject) =>
  navProject.addEventListener("click", (event) =>
    filterLanguage(event, navProject)
  )
);

function filterLanguage(event, navProject) {
  const Language = event.target.dataset.language;
  const active = document.querySelector(".active");
  if (active != null) {
    active.classList.remove("active");
  }
  navProject.classList.add("active");

  // event.currentTarget.style.backgroundColor = "red";

  if (Language == null) {
    return projectContainer.forEach((project) => {
      project.classList.remove("invisible");
      project.classList.add("visible");
      setTimeout(() => {
        project.classList.remove("visible");
      }, 301);
    });
  }

  projectContainer.forEach((project) => {
    if (Language === project.dataset.language) {
      project.classList.add("visible");
      project.classList.remove("invisible");
      setTimeout(() => {
        project.classList.remove("visible");
        //visible을 삭제해줘야 다시 필터링 할 때 fade-in이 됨
      }, 301);
    } else {
      project.classList.add("invisible");
      project.classList.remove("visible");
    }
  });
}
// responsive web toggle
const headerToggle = document.querySelector(".header__toggle");
const navitems = document.querySelectorAll(".header__menu__item");

function clickToggle() {
  if (navBar.classList.contains("animation-in")) {
    navBar.classList.remove("animation-in");
  } else {
    navBar.classList.add("animation-in");
  }
  navitems.forEach((navitem) => {
    if (navitem.classList.contains("unfold")) {
      setTimeout(() => navitem.classList.remove("unfold"), 200);
    } else {
      navitem.classList.add("unfold");
    }
  });
}

headerToggle.addEventListener("click", clickToggle);

// loadData()
//   .then((projects) => {
//     //functions
//     displayProjects(projects);
//     onclickevent(projects);
//   })
//   .catch(console.log);
