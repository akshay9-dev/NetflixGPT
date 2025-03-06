import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder="Whats would you like to watch today?"
          className="p-4 m-4 bg-white col-span-9"></input>
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
