

// DOM access











// ======== Navbar========

let navbar = document.querySelector(".nav-container");
let menu = document.querySelector("#menu");
// console.log(menu);

let places = document.querySelector("#places");
let todo = document.querySelector("#todo");
let tips = document.querySelector("#tips");

let drop1 = document.querySelector("#drop1");
let drop2 = document.querySelector("#drop2");
let drop3 = document.querySelector("#drop3");

let menuOpen = document.querySelector("#menu-open");
let menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click", () => {
  menu.style.display = "flex";
  // console.log("works");
});

menuClose.addEventListener("click", () => {
  menu.style.display = "none";
  // console.log("works");
});

// =========== Nav-bar Event Listeners ==============





//=============== Event one(scroll and Hover)=======

let scrollBefore = 0;

let scrollFunction = () => {
  window.addEventListener("scroll", function (e) {
    const scrolled = window.scrollY;

    if (scrollBefore > scrolled) {
      //   console.log("ScrollUP");
      scrollBefore = scrolled;
      navbar.style.backgroundColor = "white";
      navcolor = navbar.style.color = "#143792";
      navbar.style.display = "flex";
    } else {
      scrollBefore = scrolled;
      //   console.log("ScrollDOWN");
      navbar.style.backgroundColor = "transparent";
      navbar.style.color = "whitesmoke";
      navbar.style.display = "none";
    }
  });
};

let navDisplay = () => {
  navbar.addEventListener("mouseout", () => {
    navbar.style.backgroundColor = "transparent";
    navbar.style.color = "whitesmoke";
  });
};


let navHide = () => {
  navbar.addEventListener("mouseover", () => {
    navbar.style.backgroundColor = "white";
    navbar.style.color = "#143792";
  });
};

// =============Event Two (contentshow)==============





// this function shows the dropdown;
let dropShow = (el1, el2, el3) => {
  el1.style.display = "flex";
  el2.style.display = "none";
  el3.style.display = "none";
  el1.addEventListener("mouseover", () => {
    el1.style.display = "flex";
  });
};




// this function hides the dropdown
let dropHide = (el) => {
  el.style.display = "none";
};
let drophideall = (a, b, c) => {
  a.style.display = "none";
  a.style.display = "none";
  a.style.display = "none";
};
document.addEventListener("scroll", () => {
  drophideall(drop1, drop2, drop3);
});



// ========================================= //
// ============ swiper js ================== //
// ========================================= //
const myJsmedia = (width) => {
  if (width.matches) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
    });
  } else {
    let anotherSwiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

const width = window.matchMedia("(min-width : 800px");
//Call listener function at the run time;
myJsmedia(width);

// attach listener function on state changed
width.addEventListener("change", myJsmedia);












// function calling



scrollFunction();

places.addEventListener("mouseover", () => {
  dropShow(drop1, drop2, drop3);
  console.log(style.display);
});


todo.addEventListener("mouseover", () => {
  dropShow(drop2, drop1, drop3);
});

tips.addEventListener("mouseover", () => {
  dropShow(drop3, drop2, drop1);
});

drop1.addEventListener("mouseout", () => {
  dropHide(drop1);
});

drop2.addEventListener("mouseout", () => {
  dropHide(drop2);
});

drop3.addEventListener("mouseout", () => {
  dropHide(drop3);
});
