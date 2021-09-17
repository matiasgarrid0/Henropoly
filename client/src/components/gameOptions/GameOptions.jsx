import React, { useState } from "react";
import "./GameOptions.css";
import { FiSettings, FiMinimize2 } from "react-icons/fi";
const GameOptions = ({ host, gameOver, meEnd }) => {
  const [minimizar, setMinimizar] = useState(true);

  if (minimizar) {
    return (
      <button
        className="gameoptions-btn"
        onClick={() => {
          setMinimizar(false);
        }}
      >
        <FiSettings className="gameoptions-icon" />
      </button>
    );
  }

  return (
    <div className="gameoptions-div-minor">
      <div className="gameoptions-div-btn-icon">
        <div className="gameoptions-iconthree"><FiMinimize2
          className="gameoptions-icontwo"
          onClick={() => {
            setMinimizar(true);
          }}
        /></div>
      </div>
      <div>
        <button className='gameoptions-btn' onClick={host ? gameOver : meEnd}>
          {host ? "Terminar Partida" : "Salir Del Juego"}
        </button>
      </div>
    </div>
  );
};

export default GameOptions;