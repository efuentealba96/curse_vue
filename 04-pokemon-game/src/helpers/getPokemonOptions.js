import pokemonApi from '../api/pokemonApi';

const getPokemos  = () =>{

    const pokemonsArr = Array.from(Array(650));
    return pokemonsArr.map((_ , index) => index+1)
}


const getPokemosOptions = () =>{
    
    const mixedPokemon = getPokemos().sort(() => Math.random()- 0.5) 
    
    getPokemosNames(mixedPokemon.splice(0,4))
}

const getPokemosNames = async ( [a,b,c,d] = [] ) =>{
    const respuesta = await pokemonApi.get(`/1`)
    console.log(respuesta.data.name);
    console.log(a,b,c,d);
}

export default getPokemosOptions