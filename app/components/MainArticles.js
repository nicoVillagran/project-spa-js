import infiniteScroll from "../helpers/infiniteScroll.js";

export default function MainArticles(articles){
    const d = document,
    $posts = d.createElement('article');
    $posts.classList.add('morePosts');

    d.addEventListener('mouseover', addScroll)

    function addScroll(event){
        let e = event.target;
        if(!e.matches('.morePosts, .morePosts *')) return false;
    
        e.matches('.morePosts *') ? e = event.target.closest('article') : e;
        
        e.addEventListener('scroll', (e)=>{infiniteScroll(e)})
        d.removeEventListener('mouseover', addScroll)
    }

    // console.log(articles)
    $posts.appendChild(articles);
    // $posts.insertAdjacentElement('beforeend', Articles(article))

    return $posts;
}