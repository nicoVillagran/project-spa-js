export function Author(author) {
    const $footer = document.createElement('footer');
    const { avatar_urls, link, name } = author;

    $footer.classList.add('post__footer');
    $footer.innerHTML = `
        <a href="${link}"  target="_blank" rel="noopener">
            <div class="post__footer-img">
                <img src="${avatar_urls[96]}" alt="${name || "author's photo"}" class="post__footer-img--image">
            </div>
    
            ${name || 'unknown author'}
        </a>
    `;

    return $footer;
};