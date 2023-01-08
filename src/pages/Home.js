import React from "react";
import BtnPlay from "../components/BtnPlay";
import logo from "../images/Logo.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <img src={logo} className="logo-home" alt="logo" />
      <p className="description">
        Diviertete respondiendo preguntas en menos de 10 segundos, demuestra tu
        inteligencia y velocidad en este juego.
      </p>
      <BtnPlay />
      <footer>
        <span>Sitio Desarrollado por @DiegoEscalona</span>
      </footer>
    </>
  );
};

export default Home;
