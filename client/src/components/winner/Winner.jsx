import React from "react";
import "./Winner.css";
import Toni from './toniImpuestos.png'

const Winner = () => {

  return (
    <div >
      <div>¡GANASTE HENROPOLY!</div>
      <img src={Toni} width='100' alt='img HenryCoins' />
      <div>¡Felicidades, ahora sos Full-Stack web developer!</div>
    </div>
  );
};

export default Winner;