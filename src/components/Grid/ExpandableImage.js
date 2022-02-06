import classNames from "classnames";
import React, { useState } from "react";

const ExpandableImage = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <div className="relative sm:basis-1/4 basis-full md:-m-5">
      <button
        className={classNames("group", {
          "fixed top-0 h-full w-full left-0 z-10 mx-auto overflow-auto":
            isExpanded,
        })}
        id="portfolio"
        onClick={handleClick}
        aria-label="expand photo"
      >
        {children}
        <div className="opacity-0 group-hover:opacity-100 transition-all absolute top-5 right-5 duration-500 scale-150">
          {isExpanded ? "❌" : "🔎"}
        </div>
      </button>
    </div>
  );
};

export default ExpandableImage;
