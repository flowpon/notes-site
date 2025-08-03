document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark-mode");
  const root = document.documentElement;

  if (localStorage.getItem("darkMode") === "enabled") {
    root.classList.add("dark-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      root.classList.toggle("dark-mode");
      if (root.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});
