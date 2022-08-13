import React from "react";
import bits from "..//..//img/bits.png";
import imgUs from "..//..//img/imgUs.png";
import s from "./AboutUs.module.scss";
export const AboutUs = () => {
  return (
    <div className={s.root}>
      <div className={s.title}>
        <img src={bits} alt="" className={s.logoTitle} />
        <h2>Bright Lights</h2>
      </div>
      <div className={s.us}>
        <div className={s.text}>
          <p>
            Bright Lights is a multi-Grammy nominated singer, songwriter, DJ{" "}
            <br /> and record producer. She has written for numerous <br />{" "}
            <br />
            pop stars including Britney Spears, Justin Bieber, Usher and <br />
            Beyoncé. Her catalog has amassed over 1 billion streams <br />
            worldwide. More than 100 million of those streams can be <br />
            attributed to her artist career and include such hits as Porter{" "}
            <br />
            Robinson's "Language," 3LAU's "How You Love Me" and her own <br />
            single "Runaway." She was also a featured vocalist on Zedd's #1{" "}
            <br />
            Clarity album. Her latest music video, "Put It Down," reached 1
            million
            <br />
            streams in the first week, releasing independently.Bright Lights is{" "}
            <br />
            currently in the studio working on a self-produced album slated for{" "}
            <br />
            release in 2020.
          </p>
          <li className={s.theses}>
            <ul>
              <span>Based in: Los Angeles</span>
            </ul>

            <ul>
              <span> Genre: #DancePop</span>
            </ul>

            <ul>
              <span>Founded in 2011</span>
            </ul>

            <ul>
              <span>Label: 333 Recordings</span>
            </ul>
          </li>
        </div>
        <div className={s.imgUs}>
          <img src={imgUs} alt="" />
        </div>
      </div>
    </div>
  );
};
