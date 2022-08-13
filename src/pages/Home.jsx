import React from "react";
import { AboutUs } from "../component/AboutUs";
import { Commits } from "../component/Commits";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { LastTracks } from "../component/LastTracks";
import { LasVegas } from "../component/LasVegas";
import { Slider } from "../component/Slider";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row header">
          <Header />
          <AboutUs />
          <Commits />
          <LastTracks />
          <LasVegas />
          <Slider />
          <Footer />
        </div>
      </div>
    </div>
  );
};
