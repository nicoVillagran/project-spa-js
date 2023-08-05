export function SearchCard(info){
    let {title, id, url, _embedded} = info;

    document.addEventListener('click', e => {
        if(!e.target.matches('div[role="contentinfo"] h3 a')) return false
        
        localStorage.setItem('wpPost', e.target.dataset.id);
        localStorage.setItem('backupUrl', e.target.dataset.backupurl);
    });

    return `
        <div role="contentinfo">
            <h3><a href="#/${_embedded.self[0].slug}" data-id="${id}" data-backupUrl="${url}">${title}</a></h3>
            ${_embedded.self[0].excerpt.rendered}
        </div>
    `;
};