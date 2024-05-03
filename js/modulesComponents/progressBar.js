import { 
    getRocketMassTotal, 
    getRocketPayloadWeightsTotal, 
    getRocketHeightTotal, 
    getRocketDiameterTotal,
    getRocketSecondStageCompositeFairingDiameterTotal,
    getRocketSecondStageCompositeFairingHeightTotal
} from "../modules/rockets.js";

export const progressRocketWeight = async(Rockets)=>{
    let {kg} = await getRocketMassTotal();
    let contDiv = [];
    [Rockets].forEach(val =>{
        let information__container = document.createElement("div")
        information__container.classList.add("information__container");
        let first__div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent("Rocket Weight:");

        let progress = document.createElement("progress");
        progress.max=kg;
        progress.value = `${val.mass.kg}`;
        progress.textContent = `${val.mass.kg}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span")
        let numKg = new Intl.NumberFormat("cop").format(val.mass.kg);
        let numLb = new Intl.NumberFormat("cop").format(val.mass.lb);
        span.innerHTML(`${numKg} kg <br> ${numLb} lb`);
        
        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div);
        contDiv.push(information__container);
    })
    let aside__right__section1 = document.querySelector('#aside__right__section1')
    aside__right__section1.append( ...contDiv)
     // <div class="information__container">
    //     <div>
    //         <label>Totle :</label>
    //         <progress max="100" value="70">70%</progress>
    //     </div>
    //     <div>
    //         <span>0 kg <br> 0 lb</span>
    //     </div>
    // </div>
}