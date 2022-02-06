import React from "react";
import { Translate } from "react-translated";

const About = () => (
  <section className="text-2xl md:col-span-7" id="about">
    <h3 className="text-5xl text-center ">
      <Translate text="about" />
    </h3>
    <Translate text="about-description" />
  </section>
);

export default About;
