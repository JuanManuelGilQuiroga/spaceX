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
        label.textContent= "Rocket Weight:";

        let progress = document.createElement("progress");
        progress.max=kg;
        progress.value = `${val.mass.kg}`;
        progress.textContent = `${val.mass.kg}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span")
        let numKg = new Intl.NumberFormat("cop").format(val.mass.kg);
        let numLb = new Intl.NumberFormat("cop").format(val.mass.lb);
        span.innerHTML=`${numKg} kg <br> ${numLb} lb`;
        
        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div);
        contDiv.push(information__container);
    })
    let main__aside__right = document.querySelector('#main__aside__right')
    main__aside__right.append( ...contDiv)
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

export const progressPayloadWeights = async(Rockets)=>{
    let {kg} = await getRocketPayloadWeightsTotal();
    let contDiv = [];
    Rockets.payload_weights.forEach(val =>{
        let information__container = document.createElement("div");
        information__container.classList.add("information__container");
        let first__div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent="Low earth orbit";

        let progress = document.createElement("progress");
        progress.max=kg;
        progress.value = `${val.kg}`;
        progress.textContent = `${val.kg}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span");
        let numKg = new Intl.NumberFormat("cop").format(val.kg);
        let numLb = new Intl.NumberFormat("cop").format(val.lb);
        span.innerHTML=`${numKg} kg <br> ${numLb} lb`;

        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div)
        contDiv.push(information__container);
    })
    let main__aside__right = document.querySelector('#main__aside__right')
    main__aside__right.append( ...contDiv)
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

export const progressHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketHeightTotal();
    let contDiv = [];
    [Rockets.height].forEach(val =>{
        let information__container = document.createElement("div");
        information__container.classList.add("information__container");
        let first__div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent="Rocket Height";

        let progress = document.createElement("progress");
        progress.max = meters;
        progress.value = `${val.meters}`;
        progress.textContent = `${val.meters}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span");
        let numMeters = new Intl.NumberFormat("cop").format(val.meters);
        let numFeet = new Intl.NumberFormat("cop").format(val.feet);
        span.innerHTML=`${numMeters} M <br> ${numFeet} F`;

        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div)
        contDiv.push(information__container);
    })
    let main__aside__right = document.querySelector('#main__aside__right')
    main__aside__right.append( ...contDiv)
}

export const progressDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketDiameterTotal();
    let contDiv = [];
    [Rockets.diameter].forEach(val =>{
        let information__container = document.createElement("div");
        information__container.classList.add("information__container");
        let first__div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent="Rocket Diameter";

        let progress = document.createElement("progress");
        progress.max = meters;
        progress.value = `${val.meters}`;
        progress.textContent = `${val.meters}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span");
        let numMeters = new Intl.NumberFormat("cop").format(val.meters);
        let numFeet = new Intl.NumberFormat("cop").format(val.feet);
        span.innerHTML=`${numMeters} M <br> ${numFeet} F`;

        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div)
        contDiv.push(information__container);
    })
    let main__aside__right = document.querySelector('#main__aside__right')
    main__aside__right.append( ...contDiv)
}

export const progressSecondStageDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingDiameterTotal();
    let contDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val =>{
        let information__container = document.createElement("div");
        information__container.classList.add("information__container");
        let first__div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent="Diameter Rocket Shield";

        let progress = document.createElement("progress");
        progress.max = meters;
        progress.value = `${val.meters}`;
        progress.textContent = `${val.meters}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span");
        let numMeters = new Intl.NumberFormat("cop").format(val.meters);
        let numFeet = new Intl.NumberFormat("cop").format(val.feet);
        span.innerHTML=`${numMeters} M <br> ${numFeet} F`;

        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div)
        contDiv.push(information__container);
    })
    let main__aside__right = document.querySelector('#main__aside__right')
    main__aside__right.append( ...contDiv)
}

export const progressSecondStageHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingHeightTotal();
    let contDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.height].forEach(val =>{
        let information__container = document.createElement("div");
        information__container.classList.add("information__container");
        let first__div = document.createElement("div");
        let label = document.createElement("label");
        label.textContent="Height Rocket Shield";

        let progress = document.createElement("progress");
        progress.max = meters;
        progress.value = `${val.meters}`;
        progress.textContent = `${val.meters}%`;

        let last__div = document.createElement("div");
        let span = document.createElement("span");
        let numMeters = new Intl.NumberFormat("cop").format(val.meters);
        let numFeet = new Intl.NumberFormat("cop").format(val.feet);
        span.innerHTML =`${numMeters} M <br> ${numFeet} F`;

        first__div.append(label);
        first__div.append(progress);
        last__div.append(span);
        information__container.append(first__div);
        information__container.append(last__div)
        contDiv.push(information__container);
    })
    let main__aside__right = document.querySelector('#main__aside__right')
    main__aside__right.append( ...contDiv)
}