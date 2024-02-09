"use client";

import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="login">
        <button
          onClick={() => router.push("/about/aboutcollage")}
          className="btn"
        >
          About Collage
        </button>
        <button
          onClick={() => router.push("/about/aboutadmission")}
          className="btn"
        >
          About Admission
        </button>
      </div>
    </div>
  );
}

export default page;
