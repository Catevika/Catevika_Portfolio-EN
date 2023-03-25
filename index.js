/*=============================================
=              Loader                         =
=============================================*/
window.addEventListener("load", function () {
  document.querySelector(".loader-wrapper").style.display = "none";
});

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
=            CV Download button               = =============================================*/
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', downloadFile);

function downloadFile() {
  const downloadLink = document.createElement('a');

  downloadLink.href = 'assets/Dominique_Bello_CV.pdf';
  downloadLink.download = 'Dominique_Bello_CV.pdf';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

/*=============================================
=     Remix Support Desk Project Modal        =
=============================================*/
const modalSupport = document.getElementById("remix-support-desk");
const btn1 = document.getElementById("modal-btn-remix");
const span1 = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
  modalSupport.style.display = "block";
};

span1.onclick = function () {
  modalSupport.style.display = "none";
};

/*=============================================
=     ShopLineArt Project Modal =
=============================================*/
const modalShop = document.getElementById("shoplineart");
const btn2 = document.getElementById("modal-btn-shop");
const span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function () {
  modalShop.style.display = "block";
};

span2.onclick = function () {
  modalShop.style.display = "none";
};

/*=============================================
=     MovieMania Project Modal               =
=============================================*/
const modalMovie = document.getElementById("movie-mania");
const btn3 = document.getElementById("modal-btn-movie");
const span3 = document.getElementsByClassName("close")[2];

btn3.onclick = function () {
  modalMovie.style.display = "block";
};

span3.onclick = function () {
  modalMovie.style.display = "none";
};

/*=============================================
=     Social Media Project Modal               =
=============================================*/
const modalSocial = document.getElementById("social-media");
const btn4 = document.getElementById("modal-btn-social");
const span4 = document.getElementsByClassName("close")[3];

btn4.onclick = function () {
  modalSocial.style.display = "block";
};

span4.onclick = function () {
  modalSocial.style.display = "none";
};

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