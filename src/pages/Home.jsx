import React from "react";
import { AboutUs } from "../component/AboutUs";
import { Header } from "../component/Header";

export const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row header">
          <Header />
          <AboutUs />
        </div>
      </div>
    </div>
  );
};
