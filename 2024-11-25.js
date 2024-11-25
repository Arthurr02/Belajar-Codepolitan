const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random()*4500) + 500;
    setTimeout(()=>{
        if(delay>3000){
            failure(`Error: Connection Timeout`);
        } else {
            success(`Succes: ${url} (${delay}ms)`);
        }
    }, delay);
}

// Callback Hell example
requestCallback("google.com", 
    (message) => {
        console.log(message);
        requestCallback("google.com", 
            (message) => {
                console.log(message);
                requestCallback("google.com", 
                    (message) => {
                        console.log(message);
                        requestCallback("google.com", 
                            (message) => {
                                console.log(message);
                            }, 
                            (message) => console.log(message)
                        )
                    }, 
                    (message) => console.log(message)
                )
            }, 
            (message) => console.log(message)
        )
    }, 
    (message) => console.log(message)
)

const requestPromise = (url)=>{
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay>4000){
                reject(`Error: Connection Timeout`)
            } else {
                resolve(`Success: ${url} (${delay})`)
            }
        }, delay)
    })
}

// Promise with Callback Hell example
requestPromise("google.com")
    .then((response) =>{
        console.log(`succeess: ${response}`);
        requestPromise("google.com")
            .then((response) =>{
                console.log(`succeess: ${response}`);
                requestPromise("google.com")
                    .then((response) =>{
                        console.log(`succeess: ${response}`);
                        requestPromise("google.com")
                            .then((response) =>{
                                console.log(`succeess: ${response}`);
                            })
                            .catch((error)=>{
                                console.log(`error: ${error}`)
                            });
                            })
                    .catch((error)=>{
                        console.log(`error: ${error}`)
                    });
                    })
            .catch((error)=>{
                console.log(`error: ${error}`)
            });
            })
    .catch((error)=>{
        console.log(`error: ${error}`)
    });

// Promise yang Benar
requestPromise("google.com")
    .then((result)=>{
        console.log(`page 1`);
        console.log(result);
        return requestPromise("google.com")
    })
    .then((result)=>{
        console.log(`page 2`);
        console.log(result);
        return requestPromise("google.com")
    })
    .then((result)=>{
        console.log(`page 3`);
        console.log(result);
        return requestPromise("google.com")
    })
    .then((result)=>{
        console.log(`page 4`);
        console.log(result);
    })
    .catch((err)=>console.log(err))
    
// Menjalankan Promise Seklaigus
Promise.all([requestPromise("google.com"), requestPromise("google.com"), requestPromise("google.com"), requestPromise("google.com")])
    .then(([result1, result2, result3, result4]) => {
        console.log('halaman 1');
        console.log(result1);
        console.log('halaman 2');
        console.log(result2);
        console.log('halaman 3');
        console.log(result3);
        console.log('halaman 4');
        console.log(result4);
    })
    .catch((err) => console.log(err));

const contohPromise = () => {
    return new Promise ((resolve, reject)=>{
        resolve(()=>
            `berhasil`
        );
        reject(()=>
            `gagal`
        );
        random = Math.random();
        if (random < 0.5) reject();
        else resolve();
    })   
}

const delayedColorChange = (color, delay) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve()
        },delay)
    })
}

// delayedColorChange("red", 1000)
//     .then(()=>delayedColorChange("green", 1000))
//     .then(()=>delayedColorChange("yellow", 1000))
//     .then(()=>delayedColorChange("purple", 1000))
//     .then(()=>delayedColorChange("blue", 1000))
//     .then(()=>delayedColorChange("orange", 1000))
//     .then(()=>delayedColorChange("pink", 1000))
//     .then(()=>delayedColorChange("cyan", 1000))
//     .then(()=>delayedColorChange("black", 1000))

// setInterval(()=>{
//     setTimeout(()=>document.body.style.backgroundColor="pink", 500);
//     setTimeout(()=>document.body.style.backgroundColor="green", 1000);
//     setTimeout(()=>document.body.style.backgroundColor="purple", 1500);
//     setTimeout(()=>document.body.style.backgroundColor="red", 2000);
//     setTimeout(()=>document.body.style.backgroundColor="cyan", 2500);
//     setTimeout(()=>document.body.style.backgroundColor="yellow", 3000);
//     setTimeout(()=>document.body.style.backgroundColor="orange", 3500);
//     document.body.style.backgroundColor = "blue"
// }, 4000)

const hello = async() => {
    throw `Maaf ga kenal`;
    return `Hello World`;
};

hello()
    .then((res)=>{
        console.log(`Response: ${res}`);
    })
    .catch((error)=>{
        console.log(`Error: `, error);
    })

async function changeColor() {
    await delayedColorChange("green", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("purple", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("orange", 1000);
    await delayedColorChange("pink", 1000);
    await delayedColorChange("cyan", 1000);
    await delayedColorChange("black", 1000);
}

async function printRainbow() {
    await changeColor();
    setTimeout(()=>alert(`All Done!`),1000)
}

printRainbow()

const requestHandling = async ()=>{
    try{
        let result = await requestPromise("google.com");
        console.log(result);
    } catch (error){
        console.log(error);
    }
}
