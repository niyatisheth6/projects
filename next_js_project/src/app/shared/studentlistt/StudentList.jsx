import Link from "next/link";
import React from "react";

function StudentList({ name }) {
  return (
    <>
      <ul className="student-list">
        <li>
          <Link href={`/studentlist/${name}`}>{name}</Link>
        </li>
      </ul>
    </>
  );
}

export default StudentList;
