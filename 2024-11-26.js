links = document.querySelectorAll("p a");

links.forEach(link => {
    console.log(link.href)
});

// links.forEach(link => {
//     console.log(link.href= "chipi")
// });

img = document.querySelector("img");
// img.setAttribute("src","chipi.png")

src = img.getAttribute("src");
console.log(src)