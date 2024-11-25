const angka = [1,2,3,4,5,6,7,8]
console.log(`${Math.max(...angka)}`)

const nama = ["Fathur", "Sayawal", "Prima"]
const campuran = [...angka, ...nama]
console.log(`${campuran}`)

const user = {
    nama : "Fathurrahmanuddin",
    kelas : "3SI2"
}
const credential = {
    password : "hai aku fathur"
}

const dataUser = {
    ...user,
    ...credential,
    login: "23-11-20224"
}

const sumAll = (...el)=>el.reduce((total, el)=>total+el);
const nama1 = [a=>"Fathur", b=>"Bagas", c=>"Rahman", d=>"Syawal", e=>"Prima"]
const pemenang = (gold, silver, bronze, ...sisa)=>{
    console.log(`Medali emas diraih: ${gold}`);
    console.log(`Medali silve diraih: ${silver}`);
    console.log(`Medali bronze diraih: ${bronze}`);
    console.log(`Peserta lainnya: ${sisa}`)
}

const [gold, silver, bronze, ...sisa] = nama1

const {nama: namaUser="arthur", kelas} = user;

const userPassword = ({nama, password})=>
    console.log(`${nama} ${password}`);

const daftarBuku=[
    {
        judul: "Kalkulus",
        tahun:2024
    },
    {
        judul: "Allin",
        tahun:2023
    },
    {
        judul: "Matemaatika",
        tahun:2020
    }
]

const buku = daftarBuku.map(({judul})=>
`${judul}`)


const hex = (r,g,b) => {
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
};

const rgb=(r, g, b)=>{
    return `rgb(${r}, ${g}, ${b})`;
};

function convertion (r, g, b) {
    const color={};
    color.r=r;
    color.g=g;
    color.b=b

    color.rgb = function(){
        const{r, g ,b}=this;
        return `${rgb(r, g, b)}`;
    };

    color.hex = function(){
        const {r, g, b}=this;
        return `${hex(r, g, b)}`;
    };

    return color


}


