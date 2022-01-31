import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Grid = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        nodes {
          gatsbyImageData(quality: 100)
          original {
            src
          }
        }
      }
    }
  `);

  const filtered = nodes.filter(
    ({ original }) => !original.src.includes("marble")
  );

  return (
    <div className="flex flex-wrap w-full bg-amber-50 pt-2.5">
      {filtered.map(({ gatsbyImageData, original }) => (
        <div
          key={original.src}
          className="sm:basis-1/2 basis-full p-2.5 even:pr-5 odd:pl-5"
          id="portfolio"
        >
          <GatsbyImage
            image={gatsbyImageData}
            quality={100}
            alt="portfolio example"
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;
