import api from "../helpers/wp_api.js";

export function title() {
  const $h1 = document.createElement("h1");
  let t = api.NAME.includes("-") ? api.NAME.split("-") : api.NAME;
  // console.log(typeof t)
  $h1.classList.add("header__logo");
  $h1.innerHTML = typeof t == "object" ? `${t[0]} <span>${t[1]}</span>` : t;

  return $h1;
}
