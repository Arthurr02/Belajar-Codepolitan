function Color (r,g,b) {
    this.r=r;
    this.g=g;
    this.b=b;
}

Color.prototype.rgb= function() {
    const {r,g,b}=this;
    return `rgb(${r},${g},${b})`
}

Color.prototype.hex= function(){
    const {r,g,b}=this;
    return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
}

Color.prototype.rgba= function(a){
    const {r,g,b}=this;
    return `rgba(${r},${g},${b},${a})`
}

class Warna {
    constructor(r,g,b,warna){
        this.r=r;
        this.g=g;
        this.b=b;
        this.warna=warna;
        this.hex();
    }

    rgb(){
        const {r,g,b}=this;
        return `rgb(${r},${g},${b})`
    }

    rgba(a){
        const {r,g,b}=this;
        return `rgba(${r},${g},${b},${a})`
    }

    hex(){
        const {r,g,b}=this;
        this.hexcode= '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
        return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    }

    colorName(){
        return `This color is ${this.warna}`
    }
}

class Peliharaan {
    constructor(name, age){
        this.name = name;
        this.age=age;
    }
}

class Kucing extends Peliharaan {
    constructor(name, age, lives){
        super(name, age);
        this.lives=lives;
    }

    meong(){
        return `Meong!`;
    }
}

class Anjing extends Peliharaan {
    gonggong(){
        return `Guk! Guk!`;
    }
}

setTimeout(()=>{
    document.body.style.backgroundColor="red";
    setTimeout(()=>{
        document.body.style.backgroundColor="green";
        setTimeout(()=>{
            document.body.style.backgroundColor="blue";
            setTimeout(()=>{
                document.body.style.backgroundColor="yellow";
            },1000
        )
        }, 1000
    )
    }, 1000
)
}, 1000
)