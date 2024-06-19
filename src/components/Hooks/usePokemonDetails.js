import axios from "axios";
import React, { useEffect, useState } from "react";
import downloadPokemons from "../../utils/downloadPokemon";
import { useParams } from "react-router-dom";

const usePokemonDetails = ({ pokemonName }) => {
  const { id } = useParams();

  const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/";

  const [pokemon, setPokemon] = useState(null);

  // Creating another new state form similar pokemons lists
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: "",
    nextUrl: "",
    prevousUrl: "",
  });

  async function downloadGivenPokemonDetails(id) {
    const response = await axios.get(
      POKEMON_DETAILS_URL + (pokemonName ? pokemonName : id)
    );
    const pokemon = response.data;
    console.log(pokemon);
    setPokemon({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types,
      image: pokemon.sprites.other.dream_world.front_default,
    });
    const types = response.data.types.map((t) => t.type.name);
    return types[0];
  }

  async function downloadGivenPokemonAndRelated(id) {
    try {
      const type = await downloadGivenPokemonDetails(id);
      downloadPokemons(
        pokemonListState,
        setPokemonListState,
        `https://pokeapi.co/api/v2/type/${type}`
      );
    } catch (error) {
      console.log(error, "No such pokemon exists");
    }
  }

  useEffect(() => {
    downloadGivenPokemonAndRelated(id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, pokemonName]);

  return [pokemon, pokemonListState];
};

export default usePokemonDetails;
