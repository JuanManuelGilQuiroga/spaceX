export const tableInformationRockets = async(Rocket) =>{
    let divTable = document.querySelector("#table__1");
    divTable.innerHTML = "";
    let table__title = document.createElement("h3");
    table__title.classList.add("table__title");
    table__title.textContent = "INFORMATION ROCKET";
    let hr = document.createElement("hr");
    divTable.append(table__title, hr)

    let divDatos = document.createElement("div");
    divDatos.classList.add("divDatos");

    //DIV1
    let div1 = document.createElement("div");
    div1.classList.add("div__dato");
    let span1 = document.createElement("span");
    span1.textContent = "Type";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${Rocket.type}`;
    div1.append(span1, strong1);

    //DIV2
    let div2 = document.createElement("div");
    div2.classList.add("div__dato");
    let span2 = document.createElement("span");
    span2.textContent = "Rocket in service";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.active) ? "Active" : "Low"}`;
    div2.append(span2, strong2);

    //DIV3
    let div3 = document.createElement("div");
    div3.classList.add("div__dato");
    let span3 = document.createElement("span");
    span3.textContent = "Number of stages";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.stages}`;
    div3.append(span3, strong3);

    //DIV4
    let div4 = document.createElement("div");
    div4.classList.add("div__dato");
    let span4 = document.createElement("span");
    span4.textContent = "Number of propellants";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.boosters}`;
    div4.append(span4, strong4);

    //DIV5
    let div5 = document.createElement("div");
    div5.classList.add("div__dato");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`;
    div5.append(span5, strong5);

    //DIV6
    let div6 = document.createElement("div");
    div6.classList.add("div__dato");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`;
    div6.append(span6, strong6);

    divDatos.append(div1, div2, div3, div4, div5, div6);
    divTable.append(divDatos)
    /*
    <div class="divDatos">
        <h3>INFORMATION ROCKET</h3>
        <hr></hr>
        <div class="div__1">
            <span>type</span>
            <strong>rocket</strong>
        </div>
    </div>
    
    */
}



export const tableEngineInformation = async(Rocket) =>{
    let divTable = document.querySelector("#table__2");
    divTable.innerHTML = "";
    let table__title = document.createElement("h3");
    table__title.classList.add("table__title");
    table__title.textContent = "ENGINE INFORMATION";
    let hr = document.createElement("hr");
    divTable.append(table__title, hr)

    let divDatos = document.createElement("div");
    divDatos.classList.add("divDatos");

    //DIV1
    let div1 = document.createElement("div");
    div1.classList.add("div__dato");
    let span1 = document.createElement("span");
    span1.textContent = "Type";
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`;
    div1.append(span1, strong1);

    //DIV2
    let div2 = document.createElement("div");
    div2.classList.add("div__dato");
    let span2 = document.createElement("span");
    span2.textContent = "Rocket in service";
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`;
    div2.append(span2, strong2);

    //DIV3
    let div3 = document.createElement("div");
    div3.classList.add("div__dato");
    let span3 = document.createElement("span");
    span3.textContent = "Number of stages";
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`;
    div3.append(span3, strong3);

    //DIV4
    let div4 = document.createElement("div");
    div4.classList.add("div__dato");
    let span4 = document.createElement("span");
    span4.textContent = "Number of propellants";
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`;
    div4.append(span4, strong4);

    //DIV5
    let div5 = document.createElement("div");
    div5.classList.add("div__dato");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs";
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`;
    div5.append(span5, strong5);

    //DIV6
    let div6 = document.createElement("div");
    div6.classList.add("div__dato");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material";
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`;
    div6.append(span6, strong6);

    divDatos.append(div1, div2, div3, div4, div5, div6);
    divTable.append(divDatos)
    /*
    <div class="divDatos">
        <h3>INFORMATION ROCKET</h3>
        <hr></hr>
        <div class="div__1">
            <span>type</span>
            <strong>rocket</strong>
        </div>
    </div>
    
    */
}