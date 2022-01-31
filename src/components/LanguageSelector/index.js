import React from "react";
import { Translate } from "react-translated";

const LanguageSelector = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="z-20 text-sm border-2 border-stone-700 p-2 w-36  hover:backdrop-blur-sm hover:border-stone-500 font-sans hover:text-stone-500 absolute top-5 right-5 rounded-md"
    >
      <Translate text="switch" />
    </button>
  );
};
export default LanguageSelector;
