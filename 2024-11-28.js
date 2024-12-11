const button=document.querySelector("#btn1")

button.onmouseover = () =>{
    console.log(`hover`)
}

const scream = ()=>{
    console.log(`click`)
}

button.onclick = scream

button.addEventListener("click", scream)
button.addEventListener("click", ((event)=>{
    console.log('click2');
}))

const button1 = document.querySelector("#generateColor")

const generateColor = ()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

h1=document.querySelector("h1")
button1.addEventListener("click", ()=>{
    h1.innerText=generateColor()
    document.body.style.backgroundColor=generateColor()
})