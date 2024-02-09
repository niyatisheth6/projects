import React from "react";
import DashBoard from "../component/(dashboard)/DashBoard";
import CreateAdmin from "../component/(listing)/CreateAdmin";
import TableData from "../component/(table-data)/AdminDetails";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/create-admin" element={<CreateAdmin />} />
      <Route path="/table-data" element={<TableData />} />
    </Routes>
  );
}

export default Home;
