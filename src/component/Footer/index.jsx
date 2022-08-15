import React from "react";
import s from "./Footer.module.scss";
import slogan from "..//../img/slogan.png";
import logo from "..//../img/logo.png";
import youtubeFooter from "..//../img/youtubeFooter.png";
import spotifyFooter from "..//../img/spotifyFooter.png";
import appleFooter from "..//../img/appleFooter.png";
export const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.imgProduct}>
          <img className={s.logo} src={logo} alt="slogan" />
          <img className={s.slogan} src={slogan} alt="slogan" />
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.artist}>
          <span>Artist Management:</span> <p>Jake Henny</p>
          <span>EMAIL::</span> <p>jake@brightlightsofficial.com</p>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.network}>
          <img src={youtubeFooter} alt="network" className={s.networkImgs} />
          <img src={spotifyFooter} alt="network" className={s.networkImgs} />
          <img src={appleFooter} alt="network" className={s.networkImgs} />
        </div>
      </div>

      <div className={s.wrapper}>
        <p className={s.commint}>© DJ bright lights.</p>
      </div>
    </div>
  );
};
