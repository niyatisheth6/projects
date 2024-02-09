import React from "react";
import TextField from "./TextField";

function SecondStep({ next, prev }) {
  return (
    <>
      <div>
        <TextField label="Email" name="email" type="text" />
        <TextField label="City" name="city" type="text" />
      </div>
      <div className="flex justify-center gap-10 my-10 flex-wrap">
        <button className="btn-primary" onClick={prev}>
          Prev
        </button>
        <button className="btn-primary" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

export default SecondStep;
