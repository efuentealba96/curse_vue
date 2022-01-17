<template>
<h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture v-bind:pokemonID="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions v-bind:pokemons="pokemonArray" />
  </div>
</template> 

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon:false
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArray = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArray[rndInt];
    },
  },
  mounted() {
    this.mixPokemonsArray();
  },
};
</script>
