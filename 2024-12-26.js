let request = new XMLHttpRequest;
let data;

request.onload = function () {
    data = JSON.parse(this.responseText);
    console.log(data);
}

request.onerror = function () {
    console.log(`Error nih`, this);
}

request.open(`GET` , `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
request.send();

fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
    .then((res)=>{
        if(!res.ok){
            throw Error(`Could not fetch the data for that resource`);
        }
        return res.json();
        
    })
    .then((data)=>{
        console.log(`json`, data);
    })
    .catch((err)=>{
        console.log(`error`, err);
    })

const req = async() => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/2/`);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(`json 2`,data);
    } catch(err){
        console.log(`Error: `, err)
    }
}