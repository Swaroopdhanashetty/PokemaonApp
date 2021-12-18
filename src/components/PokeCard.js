import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import PokeDetails from "./PokeDetails";

const PokeCard = ({ id, image, name, type, key, items }) => {
  console.log(name);

  const addToCart = (product) => {
    let newCart = [];
    let itemCart = product.find((item) => item.name === name);
    newCart.push(itemCart);

    console.log(newCart);
  };
  return (
    <div
      className={`w-full bg-${type} rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center`}
    >
      <p className="text-base text-gray-400 font-normal">#{id}</p>
      <div className="mb-8">
        <a href={`product/${id}`}>
          <img
            className="object-center object-cover   h-36 w-36"
            src={image}
            alt={name}
          />
        </a>
      </div>
      <div className="text-center">
        <p className="text-xl  text-gray-700 font-bold mb-2">
          {name.toUpperCase() + name.slice(1)}
        </p>
        <p className="text-base text-gray-400 font-normal">Type:{type}</p>
        <button onClick={() => addToCart(items)}>Add to Cart</button>
      </div>
    </div>
  );
};
export default PokeCard;
