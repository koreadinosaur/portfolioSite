const navBar = document.querySelector(".header");
const about = document.querySelector("#about");
const projects = document.querySelector("#myProjects");
const contact = document.querySelector(".profile__contact");
const home = document.querySelector("#background--sunrise");
const profile = document.querySelector("#profile");
// fix navBar
const arrow = document.querySelector("#arrow");

function fixNav() {
  if (window.scrollY > navBar.clientHeight) {
    navBar.classList.add(`fixed`);
    arrow.classList.add(`arrowToHome`);
  } else {
    navBar.classList.remove(`fixed`);
    arrow.classList.remove(`arrowToHome`);
  }
}

window.addEventListener("scroll", fixNav);
window.addEventListener("scroll", fixNav);
// scroll to the desired element

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
function loadData() {
  return fetch(`data/projectdata.json`) //데이터 받아옴
    .then((response) => response.json()) //받아온 데이터 json으로 변환
    .then((json) => json.projects); //json 안에 있는 projects를 return
}
function displayProjects(projects) {
  const projectContainer = document.querySelector(".projects__screenshots");
  projectContainer.innerHTML = projects.map((project) => jsonToString(project));
}
function jsonToString(project) {
  return `<a href="${project.href}" target="blank" class="project">
  <img src="${project.src}" alt="${project.alt}" />
  <div class="project__description">
    <h3>${project.title}</h3>
    <span>${project.description}</span>
  </div>
</a>`;
}
function onclickevent(projects) {
  const navProject = document.querySelector(".projects-nav");
  const all = document.querySelector(".projects__all");
  console.log(navProject);
  all.addEventListener("click", () => displayProjects(projects));
  navProject.addEventListener("click", (event) =>
    filterLanguage(event, projects)
  );
}

function filterLanguage(event, projects) {
  const Language = event.target.dataset.language;
  if (Language == null) {
    return;
  }
  const filteredProjects = projects.filter((project) => {
    return Language === project.language;
  });
  displayProjects(filteredProjects);
}

loadData()
  .then((projects) => {
    //functions
    displayProjects(projects);
    onclickevent(projects);
  })
  .catch(console.log);
