import { 
    paginationRockets,
    paginationCapsules
} from "./modulesComponents/pagination.js";



let paginacion = document.querySelector("#footer__aside__right");
paginacion.innerHTML = ""
paginacion.append(await paginationRockets())

let rockets = document.querySelector("#rockets")
rockets.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
})

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})