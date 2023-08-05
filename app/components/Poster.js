export function Poster(img, title, p, id, slug){
    const $picture = document.createElement('picture');

    $picture.classList.add('post__picture')
    $picture.innerHTML = `
        <img src="${img}" alt="${title}">

        <div role="contentinfo" class="post__picture-info">
            <h2><a href="#/${slug}" data-id="${id}">${title}</a></h2>
    
            <p>${p}</p>
        </div>
    `;

    return $picture;
};