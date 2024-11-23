const angka = [1,2,3,4,5,6,7,8,9,10]
const angkaGanjil = angka.map((el)=>{
    if (el%2 ==1) return el*5
})

const nilaiApg = [
    {nama: "Fathur",
        nilai: 90
    },
    {nama: "Coba",
        nilai:50
    },
    {
        nama: "Coba2",
        nilai:100
    }
]

const nilaiA= nilaiApg.filter((nilaiApg)=>
    (nilaiApg.nilai>80)).map((nilaiApg)=> nilaiApg.nilai)

const isGraduate1 = nilaiApg.every((nilaiApg)=>nilaiApg.nilai>80)

const isGraduate2 = nilaiApg.some((nilaiApg)=>nilaiApg.nilai>80)

const nilaiTertinggi = nilaiApg.reduce((nilaiTertinggi, nilai)=>{
    if (nilaiTertinggi.nilai < nilai.nilai) return nilai
    return nilaiTertinggi;
})

const identitas = {
    nama: "Fathurrahmanuddin",
    kelas: "3SI2",
    umur: 20,
    getUmur: function(){
        console.log(this.umur)
    },
    getKelas: ()=> console.log(identitas.kelas),
    panggil: function() {
        setTimeout(()=> {
            console.log(this.nama);
        }, 2000);
    }
}



