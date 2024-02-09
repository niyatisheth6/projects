import React from "react";

function Course() {
  return (
    <div>
      <h1 className="title">List of Engineering courses</h1>
      <ol className="flex flex-col gap-10 my-10">
        <li className="btn">Electrical Engineering</li>
        <li className="btn">Mechanical Engineering</li>
        <li className="btn">Civil Engineering</li>
        <li className="btn">Computer Science Engineering</li>
        <li className="btn">Chemical Engineering</li>
        <li className="btn">Biomedical Engineering</li>
        <li className="btn">Aerospace Engineering</li>
        <li className="btn">Environmental Engineering</li>
        <li className="btn">Materials Science and Engineering</li>
        <li className="btn">Industrial Engineering</li>
      </ol>
    </div>
  );
}

export default Course;
