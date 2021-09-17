import React from "react";
import { GiRollingDices } from "react-icons/gi";

import "./MenuTurnos.css";

const MenuTurnos = ({ roll, passTurn, actualTurn }) => {
  return (
    <div>
      {actualTurn ? (
        <div className="menuTurnos-div-general">
          <div className="menuTurnos-div">
            <button className="manuTurnos-btn-dados" onClick={roll}>
              <GiRollingDices className="menuTuros-icon-dice" />
            </button>
            <button className="manuTurnos-btn-turno" onClick={passTurn}>
              Pasar Turno
            </button>
          </div>
        </div>
      ) : (
        <div className="menuTurnos-div-esperar">
          <p className="menuTurnos-esperar">Espera tu turno...</p>
        </div>
      )}
    </div>
  );
};

export default MenuTurnos;
