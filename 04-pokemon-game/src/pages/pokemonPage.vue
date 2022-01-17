<template>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture v-bind:pokemonID = "4" :showPokemon="false"/>
    <PokemonOptions/>
</template> 

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

import getPokemoOptions from '@/helpers/getPokemonOptions'

console.log(getPokemoOptions());
export default {
    components:{
        PokemonPicture,
        PokemonOptions
    }
}
</script>
