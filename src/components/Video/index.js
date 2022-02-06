import React from "react";
import Hero from "../../images/Hero.mp4";

const Video = () => (
  <video
    controls
    muted
    className="row-span-2 md:col-span-3 rounded-lg border-4 border-stone-500 hover:shadow-2xl hover:border-stone-700 transition-all mx-auto md:mx-0"
  >
    <source src={Hero} type="video/mp4" />
  </video>
);

export default Video;
