import { Articles } from "../components/Articles.js";
import { Loader } from "../components/Loader.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export default async function infiniteScroll(e){
    let el = e.target.documentElement || e.target,
        query = localStorage.getItem('wpSearch'),
        apiURL,
        Components;

    let {hash} = window.location;

    if(el.scrollTop + el.clientHeight + 1 >= el.scrollHeight) {
        api.page ++;
        if(!hash || hash === '#/'){
            if (el.lastElementChild.className == 'loaderElement') return false;
            el.insertAdjacentElement('beforeend', Loader('loaderElement'));
            apiURL = `${api.POSTS}&page=${api.page}`;
            Components = Articles;
        }else if(hash.includes('#/Search')){
            el = document.querySelector('.searchPosts');
            if (el.lastElementChild.className == 'loaderElement') return false;
            el.insertAdjacentElement('beforeend', Loader('loaderElement'));
            apiURL = `${api.SEARCH}${query}&page=${api.page}`;
            Components = SearchCard;
        }else return false;

        await ajax({
            url: apiURL,
            cbSuccess: (info)=>{
                let html = '';
                info.forEach(e => html += Components(e).nodeType === Node.ELEMENT_NODE ? Components(e).outerHTML : Components(e));
                let imgL = document.querySelector('.loaderElement');
                el.removeChild(imgL);
                // console.log(info)
                el.insertAdjacentHTML('beforeend', html);
            }
        })
        // document.querySelector('.loaderElement').style.display = 'none';
        // alert('Loading more posts...');
    }
}