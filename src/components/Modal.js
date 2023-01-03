import React from "react";
import { Link } from "react-router-dom";
import Repeat from "../images/arrow-repeat.svg";
import House from "../images/house-fill.svg";
import "./Modal.css";

const Correct = (props) => {
  return (
    <div className="modal none">
      <h2 className="modal-correct none">CORRECTO</h2>
      <div className="modal-incorrect none">
        <h2>INCORRECTO</h2>
        <section className="flex-incorrect">
          <Link to="/">
            <div className="btn">
              <img src={House} className="logo" alt="house" />
            </div>
          </Link>
          <div className="btn" onClick={props.funct}>
            <img src={Repeat} className="logo" alt="repeat" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Correct;
