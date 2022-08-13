import React from "react";
import s from "./LasVegas.module.scss";
import vegas0 from "..//../img/vegas0.png";
import vegas2 from "..//../img/vegas2.png";
import vegas3 from "..//../img/vegas3.png";
import vegas4 from "..//../img/vegas4.png";
export const LasVegas = () => {
  return (
    <div className={s.root}>
      <img src={vegas0} alt="vegas" className={s.vegas0}/>
      <p className={s.vegas1}>EDC Las Vegas Mainstage</p>
      <div className={s.vegas2}>
      <img src={vegas2} alt="vegas" />
      <img src={vegas3} alt="vegas" className={s.vegas2second}/>
      </div>
      <img src={vegas4} alt="vegas" className={s.vegas3}/>
    </div>
  );
};
