import React from "react";

function Card({ data }) {
  return (
    <div className="detailscard" key={data.id}>
      <h1 className="heading-md">Student {data.id}</h1>
      <h3 className="title">Name : {data.firstname}</h3>
      <h3 className="description">Email : {data.email}</h3>
      <h3 className="description">password : {data.password}</h3>
    </div>
  );
}

export default Card;
