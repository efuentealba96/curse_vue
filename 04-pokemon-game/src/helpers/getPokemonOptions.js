import pokemonApi from '../api/pokemonApi';

const getPokemos  = () =>{

    const pokemonsArr = Array.from(Array(650));
    return pokemonsArr.map((_ , index) => index+1)
}


const getPokemosOptions = async () =>{
    
    const mixedPokemon = getPokemos().sort(() => Math.random()- 0.5) 
    
    const pokemons = await getPokemosNames(mixedPokemon.splice(0,4))
    return pokemons
}

const getPokemosNames = async ( [a,b,c,d] = [] ) =>{
    // const respuesta = await pokemonApi.get(`/1`)
    // console.log(respuesta.data.name);
    const arrPromises = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`)
    ]
    const [p1,p2,p3,p4] = await Promise.all(arrPromises)

    return [
        {name: p1.data.name,id:p1.data.id},
        {name: p2.data.name,id:p2.data.id},
        {name: p3.data.name,id:p3.data.id},
        {name: p4.data.name,id:p4.data.id},
        
    ]
    
}

export default getPokemosOptions