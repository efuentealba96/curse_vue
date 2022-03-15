<template>
  <div class="container-score">
    <h4>Score: {{ score }}</h4>
    <hr>
    <h4>Vidas: {{ lifes }}</h4>
  </div>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture v-bind:pokemonID="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :show-list="showList"
      v-bind:pokemons="pokemonArray"
      @selection="checkAnswer($event)"
    />
    <div v-if="showAnswer" class="fade-in">
      <h2>{{ mensaje }}</h2>
      <button v-if="this.lifes !== 0" @click="nextGame">Continuar</button>
      <button v-if="this.lifes === 0" @click="newGame">Nuevo Juego</button>
    </div>
  </div>
</template> 

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  props: {
    lifes: {
      type: Number,
    },
    score: {
      type: Number,
    },
  },
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      showList: true,
      mensaje: "",
      lifes: 3,
      score: 0,
    };
  },
  methods: {
    async mixPokemonsArray() {
      this.pokemonArray = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArray[rndInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId === this.pokemon.id) {
        this.mensaje = `Correcto el pokemon es ${this.pokemon.name}`;
        this.score += 100;
        this.showList = false;
      } else {
        this.mensaje = `Ops, era ${this.pokemon.name}`;
        this.showList = false;
        this.lifes -= 1;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArray = [];
      this.showList = true;
      this.lifes = 3;
      this.score = 0;
      this.mixPokemonsArray();
    },
    nextGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArray = [];
      this.showList = true;
      this.mixPokemonsArray();
    },
  },
  mounted() {
    this.mixPokemonsArray();
  },
};
</script>

<style>
.container-score {
  margin-left: 15%;
  width: 10%;
  border: 3px solid green;
}

.container-score hr {
  border: 1px solid green;
}
</style>