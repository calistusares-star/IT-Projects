/*============================================ 01.SELECT HTML ELEMENTS ============================================*/
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");
const year = document.getElementById("year");

/*============================================ 02.MOBILE NAVIGATION  ============================================*/
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

             const isOpen =
    navLinks.classList.contains("active");

menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.setAttribute("aria-label", isOpen ? "Close navigation  menu" : "Open navigation menu");

  });
}
  


/*============================================ 03.CLOSE MOBILE MEBU AFTER CLICKING A LINK ============================================*/
if (navLinks && menuToggle) {
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active") 
       menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}


/*============================================= 04. LIGHT / DARK THEME  ============================================*/
  if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    
            const isDarkMode = document.body.classList.toggle("light-mode");
            themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
            themeToggle.setAttribute("aria-label", isDarkMode ? "Switch to light theme" : "Switch to dark theme");
            themeToggle.setAttribute("title", isDarkMode ? "Light" : "Dark");
  });
}

/*============================================= 05. LOAD SAVED THEME ============================================*/
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("light-mode");

  if (themeToggle) {
  themeToggle.textContent = "☀️";
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
  }

}

/*============================================= 06. CURRENT YEAR ============================================*/
if (year) {
year.textContent = new Date().getFullYear();
}
