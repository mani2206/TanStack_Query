import React from "react";
import { useRef } from "react";

function Dialog({ message, onConfirm, subHeader, dialogRef }) {

  return (
    <article className="parent ">
      <div className="bg-light h-20 d-flex justify-content-center flex-column align-items-center p-4 rounded child">
        <div className="">
          <h4>{message}</h4>
          <p className="fw-bold">{subHeader}</p>
          <input required placeholder="Enter the Name" id="dailogRef"  ref={dialogRef}/>
          <div className="d-flex justify-content-center flex-row align-items-center">
            <button
              className="btn btn-success me-3"
              onClick={() => onConfirm(true)}
            >
              Yes
            </button>
            <button className="btn btn-danger" onClick={() => onConfirm(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Dialog;
