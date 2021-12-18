import React from "react";

export default function PokeDetails({ setShowModel, showModel, pokemon }) {
  return (
    <>
      {showModel ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {pokemon.name.toUpperCase()}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex sm:flex md:flex justify-between lg:flex justify-around">
                  <div
                    className=" h-28 w-28 flex justify-center sm:h-auto sm:w-48 md:w-auto flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
                    // style="background-image: url('https://unsplash.it/804/800')"
                  >
                    <img
                      className="object-center object-cover  h-56   w-60"
                      src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                      alt={pokemon.name}
                    />
                  </div>

                  <div className=" w-full  max-w-lg mx-auto sm:gap-2 md:gap-2 lg:gap-5 flex flex-col items-class mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <div>
                      <h3 className="text-gray-700 uppercase text-lg">
                        Height{" "}
                      </h3>
                      <span className="text-gray-500 mt-3">
                        {pokemon.height}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-700 uppercase text-lg">
                        weight
                      </h3>
                      <span className="text-gray-500 mt-3">
                        {pokemon.weight}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-700 uppercase text-lg">XP</h3>
                      <span className="text-gray-500 mt-3">
                        {pokemon.base_experience}
                      </span>
                    </div>
                  </div>
                  <hr className="my-3"></hr>
                  <div className=" w-full  max-w-lg mx-auto  sm:gap-4 md:gap-3 lg:gap-5 flex flex-col items-class mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <div>
                      <h3 className="text-gray-700 uppercase text-lg">
                        abilites{" "}
                      </h3>
                      <span className="text-gray-500 mt-3">
                        {pokemon.abilities[0].ability.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-gray-700 uppercase text-lg">Type</h3>
                      {pokemon.types.map((type) => (
                        <span className="text-gray-500 mt-3">
                          {type.type.name},
                        </span>
                      ))}
                    </div>
                  </div>

                  <hr className="my-3"></hr>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModel(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
