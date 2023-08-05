export function Articles(info){
    const $art = document.createElement('div');
    let {id, slug, title,_embedded, excerpt} = info,
        src = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : 'app/assets/img.svg';

    document.addEventListener('click', (e)=>{
        if(!e.target.matches('article a')) return false;

        localStorage.setItem('wpPost', e.target.dataset.id);
        return false;
    })

    $art.setAttribute('role', 'contentinfo');
    $art.setAttribute('data-author', _embedded.author[0].name);
    $art.innerHTML = `
        <picture class="picture">
            <img src="${src}" alt="${title.rendered}">
        </picture>

        <a href="#/${slug}" data-id="${id}">${title.rendered}</a>
        <p>${excerpt.rendered}</p>
    `;

    return $art;
};