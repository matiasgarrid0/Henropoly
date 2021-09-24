import React  from "react";
import "./Winner.css";
import Toni from './toniImpuestos.png'
import final from "./final.mp4";

const Winner = () => {
  // var sonidos = {
  //   final: new Audio(final),
  // };

  // useEffect(() => {    
  //   sonidos.final.play();
  // }, []);

  return (
    <div >
      <div>GANASTE HENROPOLY!!!</div>
      <img src={Toni} width='100'/>
      <div>Ahora sos Full-Stack web developer!!!</div>
    </div>
  );
};

export default Winner;