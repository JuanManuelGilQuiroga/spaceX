//AQUI VA INFORMATION DE CAPSULES

export const infoCapsules1 = async(id, info1, info2)=>{
    let description__container = document.createElement("div");
    description__container.classList.add("description__container");
    let first__div = document.createElement("div");
    let i = document.createElement("i");
    i.classList.add("bx bx-notepad");
    first__div.append(i);

    let last__div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = `ID: ${id}`;
    let small = document.createElement("small");
    small.textContent = `TYPE: ${info1}`;
    let small1 = document.createElement("small");
    small1.textContent = `LAST UPDATE: ${info2}`;
    last__div.append(h3,small,small1);
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