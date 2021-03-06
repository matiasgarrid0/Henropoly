import "./Home.css";
import LogoHome from '../../image/Henropoly-blanco.png'
import React from "react";

const Home = () => {
  return (
    <div className='body-home-align'>
      <div className='index-space'></div>
      <div className="principal">
        <div className="container-home">
          <h2 classname="title-home">Bienvenido a</h2>
          <img className="logo" src={LogoHome} alt="logo" />
          <h4 className="h2-home">¿Qué es HENROPOLY?</h4>
          <div className="div-home">
            Henropoly es un juego de mesa fácil de jugar creado por alumnos de
            Henry y pensado para su comunidad. Puede ser disfrutado por 2 a 4
            jugadores a través de un sistema multijugador donde cada uno compite
            por no quedar en bancarrota y llegar hasta el final de la partida.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
