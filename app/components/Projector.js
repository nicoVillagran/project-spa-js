import { Author } from "./Author.js";
import { Poster } from "./Poster.js";

export function Projector(info){
    const $article = document.createElement('article');
    let {id, slug, title,_embedded, excerpt} = info,
        src = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : 'app/assets/img.svg';

    $article.classList.add('post')
    $article.appendChild(Poster(src, title.rendered, excerpt.rendered, id, slug));
    $article.appendChild(Author(_embedded.author[0]));

    return $article;
};