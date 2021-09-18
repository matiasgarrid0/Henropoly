import React from "react";
import "./TurnsOptions.css";
import { FaDice } from "react-icons/fa";
import {GiPlayerNext} from 'react-icons/gi'
import { useSelector } from "react-redux";

const TurnsOptions = ({ turn, roll, pass }) => {
  const { move } = useSelector((state) => state.henropolyGame);
  return (
    <div className="turnsoptions-div-minor box-row">
      <button className={turn && move ?"turnsoptions-btn" : 'turnsoptions-btn-disabled'} onClick={turn && move && roll}>
        <FaDice className="turnsoptions-icon" />
      </button>
      <button className={turn ?"turnsoptions-btn" : 'turnsoptions-btn-disabled'} onClick={turn && pass}>
        <GiPlayerNext className="turnsoptions-icon" />
      </button>
    </div>
  );
};

export default TurnsOptions;