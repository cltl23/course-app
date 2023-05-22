import React from "react";
import "./notes.scss";

export default function Notes() {
  return (
    <div className="notes">
      <p>Lesson note </p>
      <textarea placeholder="Type here" rows={10} cols={50}></textarea>

      <div className="buttons">
        <button className="buttons__reset"> Reset </button>
        <button className="buttons__save"> Save </button>
      </div>
    </div>
  );
}
