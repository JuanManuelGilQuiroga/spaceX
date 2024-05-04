export const informationRockets = async(country, description)=>{
    let description__container = document.createElement("div");
    description__container.classList.add("description__container");
    let first__div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "../../storage/img/mech.svg");
    first__div.append(img);

    let last__div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = country;
    let small = document.createElement("small");
    small.textContent = description;
    last__div.append(h3, small);
    description__container.append(first__div, last__div);

    let main__aside__left = document.querySelector("#main__aside__left");
    main__aside__left.append(description__container)
    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}