document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");

  if (localStorage.getItem("darkMode") === "on") {
    document.documentElement.classList.add("dark");
  }

  if (toggle) {
    toggle.onclick = () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "darkMode",
        document.documentElement.classList.contains("dark") ? "on" : "off"
      );
    };
  }
});
