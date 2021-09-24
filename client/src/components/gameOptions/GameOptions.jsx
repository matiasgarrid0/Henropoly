import React, { useState } from "react";
import "./GameOptions.css";
import { FiSettings, FiMinimize2 } from "react-icons/fi";

const GameOptions = ({ host, gameOver, meEnd }) => {
  const [minimizar, setMinimizar] = useState(true);
  const [preguntar, setPreguntar] = useState(false);

  if (minimizar) {
    return (
      <button
        className="gameoptions-btn"
        onClick={() => {
          setPreguntar(false);
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
      {preguntar ? <div className="gameoptions-div-preguntar box-column">
        Seguro que quieres salir de la partida?
        <div className='gameoptions-box-box box-row'>
          <button className='gameoptions-btn-two' onClick={()=>{setPreguntar(false);}}>Cancelar</button>
          <div className='gameoptions-align-box'></div>
          <button className='gameoptions-btn-two' onClick={host ? gameOver : meEnd} >Aceptar</button>
          </div>
      </div>:<div>
        <button className='gameoptions-btn' onClick={()=>{setPreguntar(true)}}>
          {host ? "Terminar Partida" : "Salir Del Juego"}
        </button>
      </div>}
      
      
    </div>
  );
};

export default GameOptions;