import React from "react";
import slogan from "..//../img/slogan.png";
import logo from "..//../img/logo.png";
import play from "..//../img/play.png";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.root}>
      <li className={s.menu}>
        <div className={s.imgProduct}>
          <img className={s.logo} src={logo} alt="slogan" />
          <img className={s.slogan} src={slogan} alt="slogan" />
        </div>
        <ul className={s.about}>About</ul>
        <ul>News</ul>
        <ul>Music</ul>
        <ul>Media</ul>
        <ul>Tours</ul>
        <ul>Contacts</ul>
      </li>
      <h2>New Single</h2>
      <h1>War For Love</h1>

      <div className={s.player}>
        <img className={s.play} src={play} alt="play" />

        <input type="range" className={s.line} />
        <div className={s.playerTime}>00:22-02:54</div>
      </div>
      <div className={s.card}>
        <div className={s.card1}>
          <p>
            Working on my upcoming full-lenth <br />
            album that`s releasing later this year.
          </p>
        </div>
        <div className={s.card2}>
          <p>Halloween vibes.<br /> Listen my new track!</p>
        </div>
        <div className={s.card3}>
          <p>WarForLove is OUT NOW!!<br /> Stream it here!</p>
        </div>
      </div>
    </div>
  );
};
