import { shallowMount, mount } from "@vue/test-utils";
import pokemonPage from "@/pages/pokemonPage.vue";
import {pokemons} from "../mocks/pokemon.mock"

describe("PokemonPage Component", () => {
  let wrapper;
  beforeEach(() => {
    
    wrapper = shallowMount(pokemonPage);
  });

  test("debe de llamar el mixPokemon arr al montar", () => {
    const mixPokemonArraySpy = jest.spyOn(
      pokemonPage.methods,
      "mixPokemonsArray"
    );
    shallowMount(pokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("debe de hacer match con el snapshot cuando cargan los pokemosn",() =>{
    const wrapper = shallowMount(pokemonPage,{
      data(){
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          showList: true,
          mensaje: "",
          lifes: 3,
          score: 0,
        };
      }
    });

    expect(wrapper.html()).toMatchSnapshot()

  });

  test("debe de mostar los componente de PokemonPicture y PokemonOptions",() =>{
    const wrapper = shallowMount(pokemonPage,{
      data(){
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          showList: true,
          mensaje: "",
          lifes: 3,
          score: 0,
        };
      }
    });
    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub")
    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes("pokemonid")).toBe("1");
    expect(options.attributes("pokemons")).toBeTruthy();
  })




});
