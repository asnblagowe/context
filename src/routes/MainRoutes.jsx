import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import MainLayouts from "../layouts/MainLayouts";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
