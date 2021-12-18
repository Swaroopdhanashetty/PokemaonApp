// import { Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import FavoriteList from "./components/FavoriteList";

const PAGE_POKEMON = "PokemonList";
const PAGE_FAV = "FavoriteList";
const App = () => {
  const [fav, setFav] = useState([]);
  const [page, setPage] = useState(PAGE_POKEMON);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  return (
    <div className="">
      {/* <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/" element={<PokemonList />}></Route>
        <Route path="product/:productId" element={<FavoriteList />}></Route>
      </Routes> */}
      <ul class="flex  justify-around py-5">
        <li class="flex justify-center ">
          <button
            className={`text-center block border border-blue-500 rounded  py-2 px-4 ${
              page === PAGE_POKEMON ? "bg-blue-500 text-white " : ""
            } `}
            onClick={() => navigateTo(PAGE_POKEMON)}
          >
            View Pokemon List
          </button>
        </li>
        <li class="flex justify-center    ">
          <button
            className={`text-center block border border-blue-500 rounded  py-2 px-4 ${
              page === PAGE_FAV ? "bg-blue-500 text-white " : ""
            } `}
            onClick={() => navigateTo(PAGE_FAV)}
          >
            Favorite Pokemon List
          </button>
        </li>
      </ul>
      {page === PAGE_POKEMON && <PokemonList fav={fav} setFav={setFav} />}
      {page === PAGE_FAV && <FavoriteList fav={fav} setFav={setFav} />}
    </div>
  );
};
export default App;
