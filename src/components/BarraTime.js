import React, { useEffect } from "react";
import "./barraTime.css";

const BarraTime = (props) => {
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (props.time > 0) {
        props.setTime(props.time - 1);
      }
      if (props.time === 0) props.setSinTime(true);
    }, 1000);

    return () => clearInterval(intervalo);
  });

  return (
    <div className="barraTime">
      <p>{props.time}"</p>
    </div>
  );
};

export default BarraTime;
