import React from "react";
import BtnPlay from "../components/BtnPlay";
import logo from "../images/Logo.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <img src={logo} className="logo-home" alt="logo" />
      <p className="description">
        Diviertete en familia y con amigos jugando y respondiendo preguntas
        sobre cultura general y temas variados
      </p>
      <BtnPlay />
      <footer>
        <span>Sitio Desarrollado por @DiegoEscalona</span>
      </footer>
    </>
  );
};

export default Home;
