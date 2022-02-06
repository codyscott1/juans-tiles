import BackgroundSection from "../components/BackgroundSection";
import Grid from "../components/Grid";
import Header from "../components/Header";
import { Provider } from "react-translated";
import translation from "../../translation";
import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import About from "../components/About";
import Contact from "../components/Contact";
import Video from "../components/Video";

const IndexPage = () => {
  const [isSpanish, setIsSpanish] = useState(false);
  const handleClick = () => setIsSpanish(!isSpanish);

  return (
    <Provider language={isSpanish ? "es" : "en"} translation={translation}>
      <BackgroundSection>
        <div className="max-w-screen h-screen font-Dongle leading-3">
          <div className="px-5">
            <LanguageSelector onClick={handleClick} />
            <Header />
          </div>
          <div className="grid md:grid-cols-10 p-5 text-center gap-y-5 md:gap-y-0">
            <Video />
            <Contact />
            <About />
          </div>
          <Grid />
        </div>
      </BackgroundSection>
    </Provider>
  );
};

export default IndexPage;
