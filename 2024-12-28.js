axios.get(`https://pokeapi.co/api/v2/pokemon/2/`)
.then((res)=>{
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})

const req = async(id)=>{
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        console.log(res.data);
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.data);
    }
}

const getJokes = async() => {
    try {
        const config = {
            headers:{
                Accept:`application/json`,
            },
        };
        const res = await axios.get(`https://icanhazdadjoke.com`, config);
        return(res.data.joke);
    } catch (error) {
        return(`Jokes is not available`)
    }
   
};

const jokes = document.querySelector(`#jokes`) 
const addJoke = async() => {
    const jokeText = await getJokes();
    const newLi = document.createElement(`li`);
    newLi.append(jokeText);
    jokes.append(newLi)

}

const button = document.querySelector(`button`)
button.addEventListener(`click`, addJoke)

const form = document.querySelector(`#search-form`);
form.addEventListener(`submit`, async(e)=>{
    e.preventDefault();
    document.querySelectorAll(`img`).forEach((img)=>img.remove());
    const keyword = form.elements.query.value;
    const config = {
        params: {q:keyword}
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    getImages(res.data);
    form.elements.query.value = ``;
})

const getImages = (shows)=>{
    for(let result of shows) {
        if(result.show.image){
            const newImg = document.createElement(`img`);
            newImg.src = result.show.image.medium;
            document.body.append(newImg);
        }
    }
}