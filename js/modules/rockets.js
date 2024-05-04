export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    return data;
}
export const getAllRocketsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}
export const getRocketMassTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    return mass;
}

export const getRocketPayloadWeightsTotal  = async() =>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select":{
                "name": 1,
                "payload_weights": 1
            },
            "sort":{
                "payload_weights.kg":"desc"
            },
            "limit": 1
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{payload_weights}]} = await res.json();
    return payload_weights;
}

export const getRocketHeightTotal  = async() =>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select": {
                "name": 1,
                "height": 1
            },
            "sort": {
                "height.meters": "desc"
            },
            "limit": 1
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{height}]} = await res.json();
    return height
}

export const getRocketDiameterTotal  = async() =>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select": {
                "name": 1,
                "diameter": 1
            },
            "sort": {
                "diameter.meters": "desc"
            },
            "limit": 1
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{diameter}]} = await res.json();
    return diameter;
}

export const getRocketSecondStageCompositeFairingDiameterTotal  = async() =>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select": {
                "name": 1,
                "second_stage.payloads.composite_fairing.diameter": 1
            },
            "sort": {
                "second_stage.payloads.composite_fairing.diameter": "desc"
            },
            "limit": 1
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{second_stage:{payloads:{composite_fairing:{diameter}}}}]} = await res.json();
    return diameter;
}

export const getRocketSecondStageCompositeFairingHeightTotal  = async() =>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select": {
                "name": 1,
                "second_stage.payloads.composite_fairing.height": 1
            },
            "sort": {
                "second_stage.payloads.composite_fairing.height": "desc"
            },
            "limit": 1
        })
    };
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{second_stage:{payloads:{composite_fairing:{height}}}}]} = await res.json();
    return height;
}

export const getAllRocketEngineTotal = async()=>{
    let config={
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select":{
                "name": 1,
                "engines": 1
            },
            "sort": {
                "engines.thrust_sea_level": "desc"
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{engines:{thrust_sea_level}}]} = await res.json();
    return thrust_sea_level;
}

export const getAllRocketEngineThrustVacuumTotal = async()=>{
    let config={
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "select":{
                "name": 1,
                "engines": 1
            },
            "sort": {
                "engines.thrust_vacuum": "desc"
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{engines:{thrust_vacuum}}]} = await res.json();
    return thrust_vacuum;
}