//dynamic route
"use client";
import React from "react";

function Student({ params }) {
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name : {params.student}</h3>
    </div>
  );
}

export default Student;
