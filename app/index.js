"use strict";
import { App } from "./app.js";
import wp_api from "./helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", (e) => {
  wp_api.page = 1;
  // wp_api.PER_PAGE = 15;
  App();
});
