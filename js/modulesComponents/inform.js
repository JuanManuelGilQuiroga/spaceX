import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";

export const informRocketEngineThrustSeaLevel = async(thrust__sea__level)=>{
    let {kN:totalKN} = await getAllRocketEngineTotal();
    let porcentaje = (thrust__sea__level.kN * 100)/totalKN;
    let divGeneral = document.createElement("div");
    divGeneral.classList.add("carousel__item");
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("item__progress__bar");
    let firstDivChild = document.createElement("div");
    firstDivChild.classList.add("progress__value");
    firstDiv.style = `background: radial-gradient(closest-side, #1d1f38 90%, transparent 85% 100%), conic-gradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let strong = document.createElement("strong");
    strong.textContent = "Atmospheric acceleration";
    let firstSmall = document.createElement("small");
    firstSmall.textContent = `${porcentaje.toFixed(2)} %`;
    let lastSmall = document.createElement("small");
    let numKn = new Intl.NumberFormat("cop").format(thrust__sea__level.kN);
    let numLbf = new Intl.NumberFormat("cop").format(thrust__sea__level.lbf);
    lastSmall.innerHTML=`${numKn} kN <br> ${numLbf} lbf`;

    firstDivChild.append(strong, firstSmall, lastSmall);
    firstDiv.append(firstDivChild);
    divGeneral.append(firstDiv);

    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(divGeneral)
    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}

export const informRocketEngineThrustVacuum = async(thrust_vacuum)=>{
    let {kN:totalKN} = await getAllRocketEngineThrustVacuumTotal();
    let porcentaje = (thrust_vacuum.kN * 100)/totalKN;

    let divGeneral = document.createElement("div");
    divGeneral.classList.add("carousel__item");
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("item__progress__bar");
    let firstDivChild = document.createElement("div");
    firstDivChild.classList.add("progress__value");
    firstDiv.style = `background: radial-gradient(closest-side, #1d1f38 90%, transparent 85% 100%), conic-gradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let strong = document.createElement("strong");
    strong.textContent = "Speed in space";
    let firstSmall = document.createElement("small");
    firstSmall.textContent = `${porcentaje.toFixed(2)} %`;
    let lastSmall = document.createElement("small");
    let numKn = new Intl.NumberFormat("cop").format(thrust_vacuum.kN);
    let numLbf = new Intl.NumberFormat("cop").format(thrust_vacuum.lbf);
    lastSmall.innerHTML=`${numKn} kN <br> ${numLbf} lbf`;

    firstDivChild.append(strong, firstSmall, lastSmall);
    firstDiv.append(firstDivChild);
    divGeneral.append(firstDiv);

    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.append(divGeneral)
}
