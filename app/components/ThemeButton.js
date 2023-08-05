import changeTheme from "../helpers/changeTheme.js";

export default function ThemeButton() {
  const $btn = document.createElement("button");
  let theme = localStorage.getItem("mode");

  document.addEventListener("click", (e) => {
    let el = e.target;

    if (!el.matches(".themeButton")) return false;
    if (el.classList.contains("light")) {
      $btn.dataset.mode = "🌙";
      $btn.classList.replace("light", "dark");
      localStorage.setItem("mode", "dark");

      changeTheme({ color: 95, fill: 18, boxFill: 15 });
    } else if (el.classList.contains("dark")) {
      $btn.dataset.mode = "☀️";
      $btn.classList.replace("dark", "light");
      localStorage.setItem("mode", "light");

      changeTheme({ color: 18, fill: 95, boxFill: 100 });
    }
  });

  $btn.classList.add("themeButton");
  $btn.classList.add(theme || "light");
  $btn.setAttribute("data-mode", theme == "dark" ? "🌙" : "☀️");
  theme == "dark"
    ? changeTheme({ color: 95, fill: 18, boxFill: 15 })
    : changeTheme({ color: 18, fill: 95, boxFill: 100 });
  return $btn;
}
