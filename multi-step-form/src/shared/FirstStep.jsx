import React from "react";
import TextField from "./TextField";

function FirstStep({ next }) {
  return (
    <>
      <div>
        <TextField label="First Name" name="firstname" type="text" />
        <TextField label="Last Name" name="lastname" type="text" />
      </div>
      <div className="flex justify-center gap-10 my-10 flex-wrap">
        <button className="btn-primary" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}

export default FirstStep;
