import React from "react";
import s from "./Commits.module.scss";
import mtv from "..//../img/mtv.png";
import quotationMarks from "..//../img/quotationMarks.png";
export const Commits = () => {
  return (
    <div className={s.root}>
      <div className={s.commits}>
        <p className={s.text}>
          “In an age where mainstream music is designed to be as
          <br />
          easily consumed as possible, listening to Bright Lights is
          <br />
          refreshing, to say the least. Her sound is perfect for radio
          <br />
          but complex enough to separate her from other pop<br />
           newcomers.”
        </p>
        <div className={s.border}></div>
        <p className={s.popUl}>PopULove.net</p>
        <img className={s.imgMtv} src={mtv} alt="mtv" />
        <img src={quotationMarks} alt="" className={s.quotationMarks}/>
      </div>
    </div>
  );
};
