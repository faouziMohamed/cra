function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
  if (themeName === "theme-light") {
    document.querySelectorAll("img[data-theme='switch']").forEach((element) => {
      element.src = element.src.replace("dark", "light");
    });
  } else {
    document.querySelectorAll("img[data-theme='switch']").forEach((element) => {
      element.src = element.src.replace("light", "dark");
    });
  }
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

export default function enableThemes() {
  let slider = document.querySelector("#slider");
  if (!slider) {
    return;
  }
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    slider.checked = true;
  } else {
    setTheme("theme-light");
    slider.checked = false;
  }

  slider.addEventListener("change", toggleTheme);
}
