export const imageRockets = async(flickr_images) => {
    let section__image = document.querySelector('#section__image');
    let divs = [];

    flickr_images.forEach(image => {
        let div = document.createElement('div');
        div.classList.add("carrusel__image");
        let img = document.createElement('img');
        img.setAttribute("src", image);
        img.setAttribute("referrerpolicy", "no-referrer");
        div.append(img);
        divs.push(div);
    })
    section__image.append(...divs);
}
