"use client";
import Card from "../card/Card";
import getLoginStudentData from "../hooks/getLoginStudentData";
import { useQuery } from "@tanstack/react-query";

function StudentDetails() {
  const { data: getStudentData } = useQuery(
    ["getStudentData"],
    getLoginStudentData
  );

  return (
    <div className="container my-10 flex flex-wrap gap-10 justify-center">
      {getStudentData &&
        getStudentData.map((details) => {
          return <Card key={details.id} data={details} />;
        })}
    </div>
  );
}

export default StudentDetails;
