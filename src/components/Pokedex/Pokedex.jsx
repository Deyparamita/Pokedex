import React, { useState } from "react";
import "./Pokedex.css";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokedex-wrapper">
      <h1>POKEDEX</h1>
      <Search uploadSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <PokemonDetails pokemonName={searchTerm} />
      ) : (
        <PokemonList />
      )}
    </div>
  );
};

export default Pokedex;
