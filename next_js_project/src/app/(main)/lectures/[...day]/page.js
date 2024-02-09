"use client";
import React from "react";

function Day({ params }) {
  return (
    <div>
      <h1>{params.day[0]}</h1>
      <h2>{params.day[1]}</h2>
    </div>
  );
}

export default Day;
