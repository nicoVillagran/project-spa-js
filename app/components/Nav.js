import ThemeButton from "./ThemeButton.js";

export function Nav(){
    const $Nav = document.createElement("nav");

    $Nav.classList.add('header__nav');
    $Nav.setAttribute('id', 'nav');
    $Nav.innerHTML = `
        <a href="#/" class="header__nav-a">Home</a>
        <a href="#/Search" class="header__nav-a">Search</a>
        <a href="#/contact" class="header__nav-a">Contact</a>
        <!--<a href="https://aprendejavascript.org/"  target="_blank" rel="noopener" class="header__nav-a">Learn JavaScript</a>-->
    `;
    $Nav.insertAdjacentElement('beforeend', ThemeButton())

    return $Nav;
};