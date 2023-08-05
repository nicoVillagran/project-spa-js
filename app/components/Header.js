import { ButtonMenu } from "./ButtonMenu.js";
import { FormSearch } from "./FormSearch.js";
import { Nav } from "./Nav.js";
import { title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");

  $header.classList.add("header");
  $header.appendChild(title());
  $header.appendChild(FormSearch());
  $header.appendChild(ButtonMenu());
  $header.appendChild(Nav());

  return $header;
}
