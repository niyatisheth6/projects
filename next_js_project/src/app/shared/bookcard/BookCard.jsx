import Image from "next/image";
import React from "react";

const BookCard = (props) => {
  return (
    <div className="book-card flex flex-col items-center p-4 w-[500px]">
      <Image src={props.image} alt={props.title} width={300} height={200} />
      <div className="book-card_data">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>Author: {props.author}</p>
        <p>Price: ${props.price}</p>
      </div>
    </div>
  );
};

export default BookCard;
