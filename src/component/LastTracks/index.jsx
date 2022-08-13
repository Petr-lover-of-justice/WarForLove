import React from "react";
import s from "./LastTracks.module.scss";
import lastTrack from "..//../img/lastTracks.png";
import bits from "..//..//img/bits.png";
import play from "..//../img/play.png";
import spotify from "..//../img/spotify.png";
import iTines from "..//../img/iTines.png";
export const LastTracks = () => {
  const array = [
    "3LAU, Bright Lights — How You Love Me",
    "Bright Lights, Kaleena Zanders, Kandy — War For Love",
    "Pink Is Punk, Benny Benassi, Bright Lights — Ghost",
    "Hardwell, Dyro, Bright Lights — Never Say Goodbye",
    "Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now",
    "Zedd, Bright Lights — Follow You Down",
  ];
  const song = array.map((item, i) => {
    return (
      <ul>
        <span>0{i + 1}</span>
        {item}
      </ul>
    );
  });
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <img src={lastTrack} alt="lact" className={s.lastTrackImg} />
      </div>
      <div className={s.track}>
        <div className={s.title}>
          <img src={bits} alt="bits" className={s.logoBits} />
          <h2>Last tracks</h2>
        </div>
        <div className={s.player}>
          <img src={play} alt="play" />
          <input type="range" className={s.playe} />
          <p>00:47-03:30</p>
        </div>
        <li>{song}</li>
        <div className={s.FollowMe}>
          <h4>Follow me</h4>
          <img src={spotify}alt="spotify" className={s.spotify}/>
          <img src={iTines} alt="iTines" className={s.iTines}/>
        </div>
      </div>
    </div>
  );
};
