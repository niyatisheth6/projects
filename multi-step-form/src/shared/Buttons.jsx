import React from "react";
import { useNavigate } from "react-router-dom";

function Buttons({ next, prev }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-10 my-10 flex-wrap">
      <button className="btn-primary" onClick={() => navigate(prev)}>
        Prev
      </button>
      <button
        className="btn-primary"
        type="submit"
        onClick={() => navigate(next)}
      >
        Next
      </button>
    </div>
  );
}

export default Buttons;
