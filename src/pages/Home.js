import React, { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import image from "../images/Pokemon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const [allPokemons, setAllPokemons] = useState([]);
  console.log(allPokemons);

  const fetchData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/${input}?limit=10&offset=200`)
      .then((res) => {
        setAllPokemons(res.data);
      });
  };

  const inputhandle = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src={image}
        alt=""
        className=" h-44 absolute top-44 right mr-4 w-11/12 "
      ></img>
      <br />
      <form className="relative">
        <input
          className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg "
          type="search"
          value={input}
          onChange={(e) => inputhandle(e)}
          name="search"
          placeholder="Search"
        />

        {input === "pokemon" ? (
          <Link
            to="/PokemonListWithFav"
            type="submit"
            className="absolute right-2 top-3 mr-4"
          >
            Search
          </Link>
        ) : (
          ""
        )}
      </form>
      <p>This App is Confgured to handle pokemon input</p>
    </div>
  );
};
export default Home;
