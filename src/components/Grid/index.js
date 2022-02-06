import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import ExpandableImage from "./ExpandableImage";

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
    <div className="flex flex-wrap w-full md:p-10 p-5 md:gap-12 gap-5 justify-center">
      {filtered.map(({ gatsbyImageData }, index) => (
        <ExpandableImage key={index}>
          <GatsbyImage
            image={gatsbyImageData}
            quality={100}
            alt="portfolio example"
          />
        </ExpandableImage>
      ))}
    </div>
  );
};

export default Grid;
