import React from "react";
import Video from "../../assets/Video.png";
import "./Tutorial.scss";
import sad from "../../assets/sad.png";
import love from "../../assets/love.png";
import confused from "../../assets/confused.png";

export default function tutorial() {
  return (
    <div className="tutorial">
      <img src={Video} width="100%" alt="" />

      <div className="comment">
        <section className="rate">
          <p>Rate this course</p>
          <div className="rate__images">
            <img src={sad} />
            <img src={confused} />
            <img src={love} />
          </div>
        </section>

        <section className="buttons">
          <button className="buttons__download">Download File</button>
          <button className="buttons__continue">Complete & Continue </button>
        </section>
      </div>
    </div>
  );
}
