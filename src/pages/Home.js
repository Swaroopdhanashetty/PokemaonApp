import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "tailwindcss/tailwind.css";
import image from "../images/Pokemon.svg";

const Home = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const [allPokemons, setAllPokemons] = useState([]);
  console.log(allPokemons);

  // let url = `https://pokeapi.co/api/v2/${input}?limit=10&offset=200`;

  const fetchData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/${input}?limit=10&offset=200`)
      .then((res) => {
        setAllPokemons(res.data);
      });
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src={image}
        alt=""
        className=" h-44 absolute top-44 right mr-4 w-11/12 "
      ></img>
      <form className="relative">
        <input
          className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="search"
          placeholder="Search"
        />

        <button
          to="/PokemonList"
          type="submit"
          className="absolute right-2 top-3 mr-4"
          onClick={fetchData}
        >
          Search
        </button>
        {/* <Link to="/PokemonList">Search</Link> */}
      </form>
    </div>
  );
};
export default Home;
