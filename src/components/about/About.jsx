import React from "react";
import "./About.scss";
import Level from "../../assets/level.png";
import Happy from "../../assets/happy.png";
import Notes from "../../assets/notes.png";
import ID from "../../assets/id.png";

export default function About() {
  return (
    <div className="about">
      <h5 className="about__header">About this course</h5>

      <div className="about__points">
        <img src={Level} /> <label> Easy </label>
        <img src={Happy} /> <label> 20 Lessons</label>
        <img src={Notes} /> <label> 300XP </label>
      </div>

      <div className="about__category">
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
      </div>

      <p className="about__info">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit optio
        quo est neque itaque odit, dolor, nesciunt sequi ut dolore accusantium
        pariatur asperiores illo magnam, alias quisquam quia soluta et.
      </p>

      <div className="about__instructor">
        <img src={ID} width="30px" />
        <li>
          <p>Dr Smith</p>
          <p>Skills</p>
        </li>
      </div>
    </div>
  );
}
