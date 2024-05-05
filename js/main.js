import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets
} from "./modulesComponents/pagination.js";


let pagination = document.querySelector("#footer__aside__right");
pagination.append(await paginationRockets())