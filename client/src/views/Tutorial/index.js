import React from "react";
import "./Tutorial.css";

const Tutorial = () => {
  
  return (
    <div className="tutorial-todo">
      <div className="tutorial-hijo">
        <div className="tutorial-position">
          <div className="tutorial-total">
            <h3 className="tutorial-texto"> ¡JUEGA!</h3>
                <h4>¿CÓMO JUGAR A HENROPOLY?</h4>
                Muévete entre casillas comprando las tecnologías. Cuantas más
                poseas, más dinero podrás recibir del resto de jugadores. Si el
                resto de jugadores caen en bancarota, ¡ganas!.
                <h4>¿QUIÉN EMPIEZA A JUGAR EN EL HENROPOLY?</h4>
                El primer jugador en mover su pieza será seleccionado al azar al
                comiendo de cada partida
                <h4>¿QUÉ HACER EN TU TURNO?</h4>
                Tirar los dados hará avanzará tu pieza por el tablero ¿Dónde has
                caído? Haz lo que indique la casilla depende de ello para saber cómo
                continuar ¿Has sacado dobles? Vuelve a tirar los dados y juega de
                nuevo. ¡OJO! Si sacas 3 veces seguidas, ¡debes ir a la cárcel! No
                completes tu tercer turno. Finalizar tu turno hará que no puedas
                hacer cambios PIENSALO BIEN
                </div>
            </div>
        </div>
    </div>
  );
};

export default Tutorial;