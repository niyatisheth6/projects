import React from "react";

function Button({ name, type }) {
  return (
    <>
      <button className="btn-primary" type={type}>
        {name}
      </button>
    </>
  );
}

export default Button;
