const generateColor=()=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", colorize)
});

const h1s = document.querySelectorAll("h1");
h1s.forEach((h1) =>{
    h1.addEventListener("click", colorize)
})

function colorize(){
    this.style.backgroundColor=generateColor();
    this.style.color=generateColor();
}