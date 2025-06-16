  <link rel="stylesheet" href="style.css" />
// Back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const typed = new Typed("#typed", {
    strings: ["Azizjon", "Dasturchi", "Talaba", "Kibersportmen"  , "Mutaxassis"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1550,
    loop: true
  });
  // main.js
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Holatni saqlash
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Sahifa yuklanganda holatni tekshirish
window.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
});
<button class="toggle-btn" onclick="toggleDarkMode()">Dark Mode</button>
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

  
