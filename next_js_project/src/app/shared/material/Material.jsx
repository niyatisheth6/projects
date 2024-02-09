import Image from "next/image";
import React from "react";
import BookCard from "../bookcard/BookCard";
import boook1 from "../../../../assets/img/1.jpeg";
import boook2 from "../../../../assets/img/2.jpeg";
import boook3 from "../../../../assets/img/3.jpeg";

function Material() {
  return (
    <div>
      <h1 className="title my-5">Engineering Books</h1>
      <div className="flex">
        <BookCard
          image={boook1}
          title="The Engineering Book"
          author="Marshall"
          price="19.99"
        />
        <BookCard
          image={boook2}
          title="Mechanical Engineering"
          author="Lemper"
          price="24.99"
        />
        <BookCard
          image={boook3}
          title="Security Engineering"
          author="Ross"
          price="29.99"
        />
        {/* Add more BookCard components for other books as needed */}
      </div>
    </div>
  );
}

export default Material;
