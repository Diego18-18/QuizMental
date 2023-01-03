import React from "react";
import { Link } from "react-router-dom";
import "./BtnPlay.css";

const BtnPlay = () => {
  return (
    <Link to="/game">
      <button className="btnPlay">JUGAR</button>
    </Link>
  );
};

export default BtnPlay;
