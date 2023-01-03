import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

const Rutas = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Rutas;
