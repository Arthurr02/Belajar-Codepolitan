function coba() {
    const rand=Math.random();
    if (rand >0.1 ){
        return function () {
            console.log(`Selamat, angka anda >0.1`)
        }
    } else{
        return function (){
            comnsole.log(`Maaf, anda kurang beruntung`)
        }
    }
}

const myMath={
    perkalian: function (x, y) {
        return x + y;
    }
}
