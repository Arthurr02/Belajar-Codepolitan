const input = document.querySelector("#in1");

// input.addEventListener("keyup", (evt)=>
//     console.log(`this on keyup: ${evt.key}`));
// input.addEventListener("keydown", (evt)=>
//     console.log(`this on keydown: ${evt.key}`));

input.addEventListener("keydown", (evt)=>{
    switch (evt.key){
        case "ArrowUp":
            console.log(`ArrowUp`);
            break;
        case "ArrowDown":
            console.log(`ArrowDown`);
            break;
        default:
        console.log(evt.key, evt.code)
    }
})

const input1 = document.querySelector("#in2");
const list = document.querySelector("#notes");
const form = document.querySelector("#form1");
form.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    const value = input1.value;
    const newList = document.createElement("li");
    newList.append(value);
    list.insertAdjacentElement("afterbegin", newList)
    console.log(`submitted`);
    input1.value="";
})

input1.addEventListener("input", ()=>{
    document.querySelector("h2").innerText=`${input1.value}`;
})
input1.addEventListener("change", ()=>{
    console.log(`nilai berubah`)
})

document.querySelector("#a1").addEventListener("click", (evt)=>{
    evt.preventDefault();
    console.log(`Harusnya ke google`);
})

const h1 = document.querySelector("h1");
h1.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert(`h1 ditekan`)
})

const div = document.querySelector("div");
div.addEventListener("click", (e)=>{
    e.stopPropagation();
    alert(`div ditekan`)
})

const section = document.querySelector("section");
section.addEventListener("click", ()=>{
    e.stopPropagation();
    alert(`section ditekan`)
})

list.addEventListener("click", (e)=>{
    e.target.nodeName === "LI" &&  e.target.remove();
}) 

