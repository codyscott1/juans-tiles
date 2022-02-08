import React from "react";
import { Translate } from "react-translated";

const LanguageSelector = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="z-20 text-xl border-2 border-stone-700 p-2 md:w-36 w-full hover:backdrop-blur-sm hover:border-stone-500 hover:text-stone-500 md:absolute md:top-5 md:right-5 rounded-md my-5"
    >
      <Translate text="switch" />
    </button>
  );
};
export default LanguageSelector;
