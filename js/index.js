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
    Header.style.marginBottom = "150px";
  }
  if (navMenu.classList.contains("close")) {
    Header.style.marginBottom = "80px";
  }
});

let points = document.querySelectorAll(".points");
let holder = document.querySelector(".section_three .container .holder");
let areas = document.querySelector(".section_three .container .holder .areas");

holder.addEventListener("scroll", () => {
  let holdernumb = holder.scrollLeft;
  if (holder.scrollLeft === 0 || holder.scrollLeft < 351) {
    points.forEach((p) => {
      p.classList.remove("active");
    });
    document.querySelector(".first").classList.add("active");
  } else if (holder.scrollLeft === 350 || holder.scrollLeft < 729) {
    points.forEach((p) => {
      p.classList.remove("active");
    });
    document.querySelector(".second").classList.add("active");
  } else if (holder.scrollLeft === 730 || holder.scrollLeft < 1125) {
    points.forEach((p) => {
      p.classList.remove("active");
    });
    document.querySelector(".third").classList.add("active");
  }
});

points.forEach((p) => {
  p.addEventListener("click", (e) => {
    points.forEach((ee) => {
      ee.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.classList.contains("first")) {
      holder.scrollTo(0, 0);
    } else if (e.target.classList.contains("second")) {
      holder.scrollTo(375, 0);
    } else if (e.target.classList.contains("third")) {
      holder.scrollTo(750, 0);
    }
    // holder.scrollBy(areas.scrollWidth,0)
  });
});
