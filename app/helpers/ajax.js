export async function ajax(props){
    let {url, cbSuccess, el} = props;

    await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        cbSuccess(json);
    })
    .catch(err => {
        let msg = err.statusText || 'there was an error acceting to API';

        if(err.status === 404){
            open(localStorage.getItem('backupUrl'));
            return false;
        }

        let tag = el || document.getElementById('root');
        
        tag.innerHTML += `
            <div>
                <p>Error ${err.status}: ${msg}</p>
            </div>
        `;

        console.log(err);
    })


}