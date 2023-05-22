import React from "react";
import "./Content.scss";

export default function Content() {
  return (
    <div className="content">
      <h5 className="content__header">Course content</h5>

      <div className="part__one">
        <p className="headers">Part 1</p>
        <p className="progress">1/3 | 4 min left</p>

        <div className="courses">
          <div className="coursetitle__one">
            <input type="checkbox" className="checked" />
            <label>Course title</label>
            <p className="progress">2 min</p>
          </div>

          <div className="coursetitle__two">
            <input type="checkbox" className="checked" />
            <label>Course title</label>
            <p className="progress">2 min</p>
          </div>

          <div className="coursetitle__three">
            <input type="checkbox" className="checked" />
            <label>Course title</label>
            <p className="progress">2 min</p>
          </div>
        </div>
      </div>

      <div className="part__two">
        <p className="headers">Part 2</p>
        <p className="progress">1/3 | 35 min left</p>
      </div>

      <div className="part__three">
        <p className="headers">Part 3</p>
        <p className="progress">0/3 | 35 min left</p>
      </div>
    </div>
  );
}
