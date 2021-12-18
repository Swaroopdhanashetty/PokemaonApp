import React, { useState } from "react";
import PokeDetails from "./PokeDetails";
function FavoriteList({ setFav, fav }) {
  console.log(fav);
  const [showModel, setShowModel] = useState(false);
  const [pokeDetails, setPokeDetails] = useState([]);
  const removeFromFav = (pokemonToRemove) => {
    setFav(fav.filter((item) => item !== pokemonToRemove));
  };
  const pokemonDetails = (pokemon) => {
    setShowModel(true);
    if (pokemon) {
      setPokeDetails(pokemon);
    }
    console.log(pokemon);
  };
  return (
    <div className="   bg-gray-800">
      <div className="text-center p-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
          Favorite Cards
        </h1>
      </div>

      <div class=" grid grid-cols-1   gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 m-10 w-auto bg-gray-800 pb-10 ">
        {fav.map((pokemon, index) => (
          <div
            key={index}
            className={`w-full bg-${pokemon.types[0].type.name} rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center`}
          >
            <p className="text-base text-gray-400 font-normal">#{pokemon.id}</p>
            <div className="mb-8">
              <img
                className="object-center object-cover   h-36 w-36"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                onClick={() => pokemonDetails(pokemon)}
              />
            </div>
            <div className="text-center">
              <p className="text-xl  text-gray-700 font-bold mb-2">
                {pokemon.name.toUpperCase()}
              </p>
              <PokeDetails
                setShowModel={setShowModel}
                showModel={showModel}
                pokemon={pokeDetails}
              />
            </div>
            <div className="rounded-lg px-8 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300">
              <button onClick={() => removeFromFav(pokemon)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteList;
