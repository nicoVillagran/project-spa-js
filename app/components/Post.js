export function Post(info){
    const $postSection = document.createElement('section');
    let {title, date, content} = info,
        dateFormal = new Date(date).toLocaleDateString();

    $postSection.classList.add('postSection');
    $postSection.innerHTML = `
        <h1>${title.rendered}</h1>
        
        <aside>
            <picture class="post__footer-img">
                <img src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" alt="Nicolas-villagran">
            </picture>
            <div>
                <h3>Name author</h3>
                <time data-time="${date}">${dateFormal}</time>
            </div>
        </aside>
        
        <article>${content.rendered}</article>
    `;

    return $postSection;
};