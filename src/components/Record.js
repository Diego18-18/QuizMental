import React from "react";
import { useEffect } from "react";
import "./Record.css";

const Record = (props) => {
  useEffect(() => {
    if (props.score < props.puntuation) props.setScore(props.puntuation);

    localStorage.setItem("record", props.score);
  });

  return <p className="record">Record: {props.score}</p>;
};

export default Record;
