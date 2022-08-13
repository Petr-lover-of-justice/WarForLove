import React from "react";
import { AboutUs } from "../component/AboutUs";
import { Commits } from "../component/Commits";
import { Header } from "../component/Header";
import { LastTracks } from "../component/LastTracks";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row header">
          <Header />
          <AboutUs />
          <Commits />
          <LastTracks />
        </div>
      </div>
    </div>
  );
};
