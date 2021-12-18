import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import Loader from "../components/Loader";
import PokeDetails from "../components/PokeDetails";
const PokemonList = ({ setFav, fav }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [showModel, setShowModel] = useState(false);
  console.log(showModel);
  // const [type, setType] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  const [pokDetails, setPokDetails] = useState([]);
  // const [select, setSelect] = useState("");
  // console.log(select);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  let newFav = [...fav];

  const addToCart = (pokemon) => {
    let itemInFav = newFav.find((item) => pokemon.name === item.name);
    if (!itemInFav) {
      itemInFav = {
        ...pokemon,
      };
      newFav.push(itemInFav);
      console.log(newFav);
    }

    setFav(newFav);
  };
  const pokeDetails = (pokemon) => {
    setShowModel(true);
    if (pokemon) {
      setPokDetails(pokemon);
    }
    console.log(pokemon);
  };

  const getAllPokemons = () => {
    setLoading(true);
    axios.get(loadMore).then((res) => {
      const data = res.data;
      setLoadMore(data.next);
      function pokemonObj(results) {
        results.map((pokemon) => {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}?limit=10`)
            .then((res) => {
              const data = res.data;
              console.log(data);

              setAllPokemons((currentList) => [...currentList, data]);
              console.log(allPokemons);
            });
        });
      }
      pokemonObj(data.results);

      setLoading(false);
    });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="  bg-gray-800">
          <div className="text-center p-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Pokemon Cards
            </h1>
          </div>
          <div className=" flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className=" grid grid-cols-1   gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 m-10 w-auto bg-gray-800">
            {allPokemons
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((pokemon, index) => (
                <div
                  key={index}
                  className={`w-full bg-${pokemon.types[0].type.name} rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center`}
                >
                  <p className="text-base text-gray-400 font-normal">
                    #{pokemon.id}
                  </p>
                  <div className="mb-8">
                    <img
                      className="object-center object-cover   h-36 w-36"
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={pokemon.name}
                      onClick={() => pokeDetails(pokemon)}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl  text-gray-700 font-bold mb-2">
                      {pokemon.name.toUpperCase()}
                    </p>
                    <PokeDetails
                      setShowModel={setShowModel}
                      showModel={showModel}
                      pokemon={pokDetails}
                    />
                    <div className="">
                      <button
                        id={pokemon.id}
                        className={`rounded-lg px-8 py-2 bg-green-700 text-green-100 ${
                          pokemon.id === newFav.id
                            ? "opacity-50 cursor-not-allowed disabled:opacity-50"
                            : " hover:bg-green-800 duration-300"
                        }`}
                        onClick={() => addToCart(pokemon)}
                      >
                        Add to Favorite List
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 flex justify-center items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => getAllPokemons()}
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </>
  );
  //   (
  //     <div>
  //       <h1>goodMornig</h1>
  //       <Loader />
  //     </div>
  //   );
};
export default PokemonList;
