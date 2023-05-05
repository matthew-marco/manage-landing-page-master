let links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
  });
});
let email = document.querySelector(".email");
let buttonSubmit = document.querySelector(".submit");
buttonSubmit.addEventListener("click", (e) => {
  let send = false;
  if (
    !(email.value === "") &&
    email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    send = true;
  }
  if (send === false) {
    e.preventDefault();
  } else {
  }
});

let navMenu = document.querySelector(".holdernav");
let navIcon = document.querySelector("i");
let Header = document.querySelector(".showwhenmobile");
navIcon.addEventListener("click", () => {
  navMenu.classList.toggle("close");
  if (!navMenu.classList.contains("close")) {
    Header.style.marginBottom = "150px"
  }
  if (navMenu.classList.contains("close")) {
    Header.style.marginBottom = "80px"
  }
});
