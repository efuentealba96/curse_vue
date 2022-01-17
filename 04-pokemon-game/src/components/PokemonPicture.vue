<template>
  <div class="pokemon-contain">
    <img v-bind:src="imgSrc" class="hidden-pokemon" alt="pokemon" />
    <img v-if="showPokemon" v-bind:src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonID: {
      type: Number,
      required: true,
    },
    showPokemon:{
        type: Boolean,
        required: true,
        default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonID}.svg`;
    },
  },
};
</script>

<style scope>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>