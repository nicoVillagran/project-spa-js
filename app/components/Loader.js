export function Loader(clase){
    const d = document,
        $img = d.createElement('img');
    
    $img.classList.add(clase || 'loader');
    $img.src = 'app/assets/Loader.svg';
    $img.alt = 'Loading...';

    return $img;
}