import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";
import Verify from "../pages/verify";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
};

export default AllRoutes;
