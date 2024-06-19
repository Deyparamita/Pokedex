import axios from "axios";
import React, { useEffect, useState } from "react";
import downloadPokemons from "../../utils/downloadPokemon";

const usePokemonList = (DEFAULT_POKEDEX_URL) => {
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: DEFAULT_POKEDEX_URL,
    nextUrl: DEFAULT_POKEDEX_URL,
    prevousUrl: DEFAULT_POKEDEX_URL,
  });

  useEffect(() => {
    downloadPokemons(
      pokemonListState,
      setPokemonListState,
      DEFAULT_POKEDEX_URL
    );
  }, [pokemonListState.pokedexUrl]);

  return [pokemonListState, setPokemonListState];
};

export default usePokemonList;
