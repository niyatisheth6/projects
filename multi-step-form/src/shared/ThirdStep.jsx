import React from "react";
import TextField from "./TextField";

function ThirdStep({ prev }) {
  return (
    <>
      <div>
        <TextField label="Country" name="country" type="text" />
        <TextField label="PinCode" name="pincode" type="text" />
      </div>
      <div className="flex justify-center gap-10 my-10 flex-wrap">
        <button className="btn-primary" onClick={prev}>
          Prev
        </button>
        <button className="btn-primary" type="submit">
          Submit
        </button>
      </div>
    </>
  );
}

export default ThirdStep;
