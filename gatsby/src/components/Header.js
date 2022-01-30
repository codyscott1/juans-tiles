import { Link } from "gatsby";
import React from "react";

const Header = () => {
  const SkewedText = ({ children }) => (
    <span
      className={`before:block before:absolute before:-inset-1 before:even:-skew-y-3 before:odd:skew-y-3 before:group-hover:skew-y-0 pt-2 mx-[3px] relative inline-block my-1.5 before:border-2  before:border-neutral-200 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-stone-500 before:to-stone-900 before:hover:from-stone-700 before:group-hover:border-amber-600 before:rounded-md`}
    >
      <h3 className="text-5xl leading-2 relative text-white text-center px-2">
        {children}
      </h3>
    </span>
  );

  return (
    <>
      <div className="flex justify-center flex-wrap py-5 border-b-2 border-stone-500 group">
        <SkewedText>
          <p className="text-7xl">Juan's</p>
        </SkewedText>
        <SkewedText>
          <p className="text-7xl">Tiles</p>
        </SkewedText>
        <SkewedText>
          <p className="text-7xl">&#38;</p>
        </SkewedText>
        <SkewedText>
          <p className="text-7xl">More</p>
        </SkewedText>
      </div>
      <nav className="group flex justify-center flex-wrap py-5">
        <SkewedText>
          <Link to="/about">About</Link>
        </SkewedText>
        <SkewedText>
          <Link to="/contact">Contact</Link>
        </SkewedText>
        <SkewedText>
          <Link to="/portfolio">Portfolio</Link>
        </SkewedText>
      </nav>
    </>
  );
};

export default Header;
