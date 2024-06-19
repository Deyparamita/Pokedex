import React, { useEffect, useState } from "react";
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import usePokemonDetails from "../Hooks/usePokemonDetails";
import Pokemon from "../Pokemon/Pokemon";

const PokemonDetails = ({ pokemonName }) => {
  const [pokemon, pokemonListState] = usePokemonDetails({
    pokemonName: pokemonName || "",
  });

  return (
    <>
      <h1>
        <Link to="/">POKEDEX</Link>
      </h1>
      {pokemon && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-details">
            <div className="pokemon-details-name">{pokemon.name}</div>
            <div className="pokemon-details-image">
              <img src={pokemon.image} alt="" />
            </div>
            <div className="pokemon-details-height-weight">
              <div> Height : {pokemon.height}</div>
              <div>Weight : {pokemon.weight}</div>
            </div>

            <div className="pokemon-details-type">
              Type:{" "}
              {pokemon.types.map((t) => (
                <span key={t.type.name}>{t.type.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="similar-pokemon">
        <h1>Similar Pokemons</h1>
        <div className="similar-pokemons-list">
          {console.log(pokemonListState.pokemonList.length)}
          {console.log(pokemonListState.pokemonList)}
          {pokemonListState.pokemonList.length > 0 &&
            pokemonListState.pokemonList.map((pokemon) => {
              return (
                <Pokemon
                  name={pokemon.name}
                  key={pokemon.id}
                  url={pokemon.image}
                  id={pokemon.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
