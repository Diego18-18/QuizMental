import React, { useState } from "react";
import BarraTime from "../components/BarraTime";
import Correct from "../components/Modal";
import Record from "../components/Record";
import Data from "../helpers/base-questions";
import WinSound from "../sounds/winSound.mpeg";
// import LoseSound from "../sounds/loseSound.mpeg";
import "./Game.css";

const Game = () => {
  let randomN = Math.round(Math.random() * Data.length);
  let RecordInit = localStorage.getItem("record") || 0;
  let winSound = new Audio(WinSound);
  // let loseSound = new Audio(LoseSound);

  const [questionActual, setQuestionActual] = useState(randomN);
  const [puntuacion, setPuntuacion] = useState(0);
  const [record, setRecord] = useState(RecordInit);
  const [tiempo, setTiempo] = useState(10);
  const [sinTiempo, setSinTiempo] = useState(false);

  const $modal = document.querySelector(".modal"),
    $correct = document.querySelector(".modal-correct"),
    $incorrect = document.querySelector(".modal-incorrect");

  function recargar(e) {
    setTimeout(() => {
      setQuestionActual(randomN);
      setTiempo(10);
      $modal.classList.add("none");
      $correct.classList.add("none");
      $incorrect.classList.add("none");
      e.target.classList.remove("correct");
      e.target.classList.remove("incorrect");
    }, 500);
  }

  const lost = () => {
    // loseSound.play();
    setPuntuacion(0);
    setSinTiempo(false);
    setTiempo(0);
    $modal.classList.remove("none");
    $incorrect.classList.remove("none");
  };

  if (sinTiempo) {
    lost();
  }

  const cambiarQuestion = (isCorrect, e) => {
    if (!isCorrect) {
      lost();
    } else {
      winSound.play();
      setPuntuacion(puntuacion + 1);
      e.target.classList.add("correct");
      $correct.classList.remove("none");
      $modal.classList.remove("none");
      recargar(e);
    }
  };

  return (
    <div className="container-game">
      <BarraTime
        time={tiempo}
        setTime={setTiempo}
        sinTime={sinTiempo}
        setSinTime={setSinTiempo}
      />
      <img
        className="img-game"
        src={Data[questionActual].img}
        alt="img-referencia"
      />
      <h2 className="question">{Data[questionActual].pregunta}</h2>
      <article className="options-container">
        <div className="options">
          {Data[questionActual].opciones.map((res, index) => (
            <p
              className="bg-white"
              key={index}
              onClick={(e) => cambiarQuestion(res.isCorrect, e)}
            >
              {res.respuesta}
            </p>
          ))}
        </div>
      </article>
      <div className="flex">
        <Record score={record} setScore={setRecord} puntuation={puntuacion} />
        <p className="score">Score: {puntuacion}</p>
      </div>
      <Correct funct={recargar} />
    </div>
  );
};

export default Game;
