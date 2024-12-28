// Function Expression 
function coba() {
    const rand=Math.random();
    if (rand >0.1 ){
        return function () {
            console.log(`Selamat, angka anda >0.1`)
        }
    } else{
        return function (){
            console.log(`Maaf, anda kurang beruntung`)
        }
    }
}

const myMath={
    perkalian: function (x, y) {
        return x + y;
    }
}

const saya ={
    nama: "Fathur",
    hobi: "Mancing",
    kenalan: function (){
        return `Saya ${this.nama}, Hobi saya ${this.hobi}`
    }
}

try{
console.log(`${saya.nama}`);;
} catch{
console.log(`Error!`)
}

function teriak(msg){
    try{
        console.log(msg.toUpperCase());
    } catch (error){
        console.log(error);
        console.log(`Masukkan tipe String, bukan integer`)
    }
}

const angka = [1,2,3,4,5,6,7,8,9,10];
angka.forEach(function(el){
    if (el%2===0)
    console.log(el);
})

const angkaDouble= angka.map(function (num){
    if (num%2===0) return num*2;
})

const buku =[
    {
        title:"Kalkulus",
        author:"Fathur1"
    },
    {
        title:"Metstat",
        author:"Fathur2"
    }
]

const hasil=buku.forEach(function(buku){
    console.log(`1. Judul: ${buku.title}, dengna Author: ${buku.author}`)
})
console.log(hasil)

const bukuList = buku.map(function (buku){
    return buku.title.toUpperCase();
})

// Arrow Function
const random =()=> {
    return Math.floor(Math.random()*1000);
}

const bukuList2 = buku.map( (buku)=>{
    return buku.title.toUpperCase();
})

const random1 = () => (
    a=Math.random()*1000
);

setTimeout(() => {
    console.log(`Halo ${random1()}`)
}, 5000);

const iint = setTimeout(()=>(
    console.log(random1())
), 2000)