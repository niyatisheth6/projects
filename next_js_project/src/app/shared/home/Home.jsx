"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Course from "../course/Course";
import Material from "../material/Material";
import Video from "../videos/Video";


function Home() {
  const router = useRouter();
  const [course, setcourse] = useState(false);
  const [material, setMaterial] = useState(false);
  const [video, setVideo] = useState(false);
  const video1 = "nx3v8OMU8U_tbN0l";
  const video2 = "rYUrTdjCdyI6sqqT";

  return (
    <div className="container">
      <div className="main">
        {/* //routing practice */}
        {/* <div>
          <h1 onClick={() => router.push("/studentlist")} className="list">
            1. Student List
          </h1>
        </div>
        <div>
          <h1 onClick={() => router.push("/lectures")} className="list">
            2. Study Material
          </h1>
        </div> */}

        <div className="login">
          <button
            onClick={() => router.push("/student-details")}
            className="btn"
          >
            Student Details
          </button>
          <button onClick={() => setVideo(!video)} className="btn">
            Lectures
          </button>
          <button onClick={() => setMaterial(!material)} className="btn">
            Study Material
          </button>
          <button onClick={() => setcourse(!course)} className="btn">
            Course
          </button>
        </div>
        {course && (
          <div className="mt-10">
            <Course />
          </div>
        )}
        {material && (
          <div className="mt-10">
            <Material />
          </div>
        )}
        {video && (
          <div className="mt-10">
            <Video videoId={video1} title="Learn react js" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
