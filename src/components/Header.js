import { Link } from "gatsby";
import React from "react";
import { Translate } from "react-translated";

const Header = () => {
  const SkewedText = ({ children }) => (
    <span
      className={`before:block before:absolute before:-inset-1 before:sm:even:-skew-y-3 before:sm:odd:skew-y-3 before:group-hover:skew-y-0 pt-2 mx-[3px] relative inline-block my-1.5 before:border-2  before:border-neutral-200 before:transition-all before:bg-gradient-to-r before:from-stone-600 before:to-stone-900 before:hover:from-stone-700 before:rounded-md hover:shadow-2xl`}
    >
      <h3 className="text-5xl leading-2 relative text-white text-center p-2">
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
          <p className="text-7xl">
            <Translate text="tiles" />
          </p>
        </SkewedText>
        <SkewedText>
          <p className="text-7xl">&#38;</p>
        </SkewedText>
        <SkewedText>
          <p className="text-7xl">
            <Translate text="more" />
          </p>
        </SkewedText>
      </div>
      <nav className="group flex justify-center flex-wrap py-5 border-b-2 border-stone-500">
        <SkewedText>
          <Link to="#about">
            <div className="hidden sm:inline-block">
              <Translate text="about" />
            </div>
            📖
          </Link>
        </SkewedText>
        <SkewedText>
          <Link to="#contact">
            <div className="hidden sm:inline-block">
              <Translate text="contact" />
            </div>
            📱
          </Link>
        </SkewedText>
        <SkewedText>
          <Link to="#portfolio">
            <div className="hidden sm:inline-block">
              <Translate text="portfolio" />
            </div>
            🤯
          </Link>
        </SkewedText>
      </nav>
    </>
  );
};

export default Header;
