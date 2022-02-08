import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BackgroundSection = () => (
  <StaticImage
    src="../../images/background/marble.webp"
    alt="background"
    className="fixed top-0 left-0 min-h-full min-w-full -z-10 bg-image"
  />
);

export default BackgroundSection;
