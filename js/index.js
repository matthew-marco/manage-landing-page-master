let links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target);
  });
});
let email = document.querySelector(".email");
let buttonSubmit = document.querySelector(".submit");
let inputErrort = document.querySelector(
  ".hidewhenmobile .container .third_row form .inputforerror"
);

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
    inputErrort.classList.add("error");
  } else {
  }
});

let emailmob = document.querySelector(".email.mob");
let buttonSubmitmob = document.querySelector(".submit.mob");
let inputError = document.querySelector(
  ".showwhenmobile .container .third_row form .inputforerror"
);

buttonSubmitmob.addEventListener("click", (e) => {
  let send = false;
  if (
    !(emailmob.value === "") &&
    emailmob.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    send = true;
  } else if (send === false) {
    e.preventDefault();
    // console.log("false");
    inputError.classList.add("error");
  }
});

let navMenu = document.querySelector(".holdernav");
let navIcon = document.querySelector("i");
let Header = document.querySelector(".showwhenmobile");
let linksNav = document.querySelectorAll(".showwhenmobile .container .holdernav a ");
navIcon.addEventListener("click", () => {
  navMenu.classList.toggle("close");
  linksNav.forEach(link => {
    link.classList.toggle("close")
    
  });
  if (!navMenu.classList.contains("close")) {
    Header.style.marginBottom = "150px";
  } else if (navMenu.classList.contains("close")) {
    Header.style.marginBottom = "80px";
  }
});

let points = document.querySelectorAll(".points");
let holder = document.querySelector(".section_three .container .holder");
let areas = document.querySelector(".section_three .container .holder .areas");

holder.addEventListener("scroll", (e) => {
  // e.target.scrollTo(holder.scrollWidth / 3, 0);
  let holdernumb = holder.scrollLeft;

  if (holder.scrollLeft < holder.scrollWidth - 30) {
    points.forEach((p) => {
      p.classList.remove("active");
      // console.log(holder.scrollWidth / 3);
    });
    document.querySelector(".first").classList.add("active");
  }
  if (holder.scrollLeft > holder.scrollWidth / 4) {
    points.forEach((p) => {
      p.classList.remove("active");
      // console.log(holder.scrollLeft);
    });
    document.querySelector(".second").classList.add("active");
  }
  if (
    holder.scrollLeft >
    holder.scrollWidth / 3 + holder.scrollWidth / 3 - 40
  ) {
    points.forEach((p) => {
      p.classList.remove("active");
      // console.log(holder.scrollLeft);
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
      holder.scrollTo(holder.scrollWidth / 3, 0);
    } else if (e.target.classList.contains("third")) {
      holder.scrollTo(holder.scrollWidth / 3 + holder.scrollWidth / 3, 0);
    }
    // holder.scrollBy(areas.scrollWidth,0)
  });
});
