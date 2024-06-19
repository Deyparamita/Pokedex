import React, { useEffect, useState } from "react";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import usePokemonList from "../Hooks/usePokemonList.js";

const PokemonList = () => {

  const DEFAULT_POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon/";

  const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_POKEDEX_URL);

  return (
    <div className="pokemon-list-wrapper">
      <div id="pokemon-list-header">Pokemon List</div>
      <div className="page-controls">
        <button
          onClick={() =>
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: pokemonListState.prevousUrl,
            })
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setPokemonListState({
              ...pokemonListState,
              pokedexUrl: pokemonListState.nextUrl,
            })
          }
        >
          Next
        </button>
      </div>
      <div className="pokemon-list">
        {pokemonListState.pokemonList.map((pokemon) => (
          <Pokemon
            name={pokemon.name}
            key={pokemon.id}
            url={pokemon.image}
            id={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
