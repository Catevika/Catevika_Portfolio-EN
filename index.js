/*=============================================
=            Toggle light dark themes         =
=============================================*/
let preferredDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-mode" : "light-mode";

let theme = localStorage.getItem("theme") || preferredDarkTheme;

const button = document.querySelector(".btn-toggle");
const sun = document.querySelector(".sun");
const day = document.querySelector(".day");
const moon = document.querySelector(".moon");
const night = document.querySelector(".night");

document.body.classList.add(theme);
localStorage.setItem("theme", theme);

if (theme == "dark-mode") {
  sun.style.opacity = "1";
  day.style.opacity = "1";

  moon.style.opacity = "0";
  night.style.opacity = "0";
} else {
  sun.style.opacity = "0";
  day.style.opacity = "0";

  moon.style.opacity = "1";
  night.style.opacity = "1";
}

// Define a function to switch the theme
function switchTheme() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");

    sun.style.opacity = "0";
    day.style.opacity = "0";

    moon.style.opacity = "1";
    night.style.opacity = "1";

    localStorage.setItem("theme", "light-mode");

  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");

    sun.style.opacity = "1";
    day.style.opacity = "1";


    moon.style.opacity = "0";
    night.style.opacity = "0";

    // Store the theme in localStorage
    localStorage.setItem("theme", "dark-mode");
  }
}

// Add an event listener to the button to call switchTheme on click
button.addEventListener("click", switchTheme);

/*== End of Toggle light dark themes block  ==*/

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

/*=============================================
=            Active class on Click            =
=============================================*/
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });

  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

/*=============================================
=            Active class on Scroll          =
=============================================*/
window.addEventListener('scroll', function () {
  let currentPos = window.scrollY;

  sections.forEach(section => {
    let top = section.offsetTop - 55;
    let height = section.offsetHeight;

    if (currentPos >= top && currentPos < top + height) {
      let targetId = section.getAttribute('id');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${targetId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});

/*=============================================
=     Remix Support Desk Project Modal        =
=============================================*/
// Get the modal
const modalSupport = document.getElementById("remix-support-desk");

// Get the button that opens the modal
var btn1 = document.getElementById("modal-btn-remix");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modalSupport.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  modalSupport.style.display = "none";
};

/*=============================================
=     ShopLineArt Project Modal =
=============================================*/
// Get the modal
const modalShop = document.getElementById("shoplineart");

// Get the button that opens the modal
var btn2 = document.getElementById("modal-btn-shop");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  modalShop.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  modalShop.style.display = "none";
};

/*=============================================
=     MovieMania Project Modal               =
=============================================*/
// Get the modal
const modalMovie = document.getElementById("movie-mania");

// Get the button that opens the modal
var btn3 = document.getElementById("modal-btn-movie");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn3.onclick = function () {
  modalMovie.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modalMovie.style.display = "none";
};

/*=============================================
=     Social Media Project Modal               =
=============================================*/
// Get the modal
const modalSocial = document.getElementById("social-media");

// Get the button that opens the modal
var btn4 = document.getElementById("modal-btn-social");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btn4.onclick = function () {
  modalSocial.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modalSocial.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalSupport) {
    modalSupport.style.display = "none";
  } else if (event.target == modalShop) {
    modalShop.style.display = "none";
  } else if (event.target == modalMovie) {
    modalMovie.style.display = "none";
  } else if (event.target == modalSocial)
    modalSocial.style.display = "none";
};