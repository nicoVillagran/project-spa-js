import { ajax } from "../helpers/ajax.js";
import infiniteScroll from "../helpers/infiniteScroll.js";
import api from "../helpers/wp_api.js";
import { Articles } from "./Articles.js";
import { Form } from "./Form.js";
import MainArticles from "./MainArticles.js";
import { Post } from "./Post.js";
import { Projector } from "./Projector.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  const d = document,
    $main = d.querySelector("main"),
    $fragment = d.createDocumentFragment();

  let { hash } = location;

  if (!hash || hash === "#/") {
    window.removeEventListener("scroll", infiniteScroll);
    await ajax({
      url: api.POSTS,
      cbSuccess: (info) => {
        $main.appendChild(Projector(info[0]));

        info.shift();
        info.forEach((e) => {
          let nodeArt = Articles(e);
          $fragment.appendChild(nodeArt);
        });
        $main.appendChild(MainArticles($fragment));
        $main.classList.add("mainHeight");
      },
    });
  } else if (hash.includes("#/Search")) {
    let html = "",
      query = localStorage.getItem("wpSearch");

    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${localStorage.getItem("wpSearch")}`,
      cbSuccess: (info) => {
        if (info.length === 0) {
          html = `
                        <div id="errorMsg">
                            <p>The reference entered has not been found</p>
                            <mark>${query}</mark>
                        </div>
                    `;
        } else info.forEach((e) => (html += SearchCard(e)));

        $main.classList.add("searchPosts");
        window.addEventListener("scroll", infiniteScroll);
        $main.innerHTML = html;
      },
    });
  } else if (hash == "#/contact") {
    $main.classList.add("contact-section");
    $main.appendChild(Form());
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPost")}`,
      cbSuccess: (info) => {
        $main.appendChild(Post(info));
      },
    });
  }

  document.querySelector(".loader").style.display = "none";
}
