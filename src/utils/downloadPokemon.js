import axios from "axios";

async function downloadPokemons(pokemonListState, setPokemonListState,DEFAULT_POKEDEX_URL) {

    const response = await axios.get(
      pokemonListState.pokedexUrl
        ? pokemonListState.pokedexUrl
        : DEFAULT_POKEDEX_URL
    );
    const pokemonResults = response.data.results ? response.data.results : response.data.pokemon ;

    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevousUrl: response.data.previous,
    })); 

    const pokemonPromise = pokemonResults.map((p) => {
        if(p.url) {
            return axios.get(p.url)
        } 
        else if(p.pokemon.url) {
            return axios.get(p.pokemon.url)
        }
    })

    const pokemonListData = await axios.all(pokemonPromise);
      console.log("Pokemon List Data",pokemonListData);
    const pokemonFinalList = pokemonListData.map((pokemonData) => {
      const pokemon = pokemonData.data; 

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
      };
    });
    console.log(pokemonFinalList);

    setPokemonListState((state) => ({ ...state, pokemonList: pokemonFinalList }));
  }
  export default downloadPokemons;
