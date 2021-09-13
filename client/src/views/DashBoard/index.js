import React, { useState } from "react";
import "./dashboard.css";
import { CreateGame } from "../../components/index";
import { Portal } from "../../components/index";
import Shop from "../../image/SHOP.png"


const DashBoard = () => {
  const [portal, setPortal] = useState(null);
  function openPortal() {
    setPortal("createGame");
  }

  function closedPortal() {
    setPortal(null);
  } 

  return (
    <div className="dashboard-todo">
      <div className="dashboard-hijo">
        <div className="asd"> </div>

        <div className="position">
          <div className="total">
            <h3 className="h3-total"> ¡JUEGA!</h3>
            <h4>CÓMO JUGAR A HENROPOLY</h4>
            Muévete entre casillas comprando las tecnologías. Cuantas más
            poseas, más dinero podrás recibir del resto de jugadores. Si el
            resto de jugadores caen en bancarota, ¡ganas!.
            <h4>¿QUIÉN EMPIEZA A JUGAR EN EL HENROPOLY?</h4>
            El primer jugador en mover su pieza será seleccionado al azar al
            comiendo de cada partida
            <h4>QUÉ HACER EN TU TURNO</h4>
            Tirar los dados hará avanzará tu pieza por el tablero ¿Dónde has
            caído? Haz lo que indique la casilla depende de ello para saber cómo
            continuar ¿Has sacado dobles? Vuelve a tirar los dados y juega de
            nuevo. ¡OJO! Si sacas 3 veces seguidas, ¡debes ir a la cárcel! No
            completes tu tercer turno. Finalizar tu turno hará que no puedas
            hacer cambios PIENSALO BIEN
          </div>
          <div className="contSalyImg">
            <div className="crearSala">
              <button className="text-hov" onClick={openPortal}>
              Crear sala</button>
              {portal === "createGame" && (
                <Portal onClose={closedPortal}>
                  <CreateGame />
                </Portal>
              )}            
              <button className="text-hov">Unirse a Sala</button>
              <img className="imgn" src={Shop} alt="shop"/>
            </div>
          </div>
          <div className="ranking">
            <span className="game-win">Mas partidas ganadas</span>
            <div className="person">
              <img src="https://ca.slack-edge.com/TPRS7H4PN-U020K03EUHG-f49f0477ebe4-512" alt="img"/>
              <span className="dashboard-span">senjo903</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">10</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01RENRHB6K-19d480373bd1-512"
                alt="img"
              />
              <span className="dashboard-h4">FacuRearte</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">7</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U02046U590X-519f10bc999e-512"
                alt="img"
              />
              <span className="dashboard-span">AlanGiavino</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">5</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01UZGHU3J8-8209681533eb-512"
                alt="img"
              />
              <span className="dashboard-span">MatiGarrido</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">4</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01T4MPG0BF-eadd1fea01c5-512"
                alt="img"
              />
              <span className="dashboard-span">Sebi_elmejor</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">3</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01V60B1T9P-0f495ba2e434-512"
                alt="img"
              />
              <span className="dashboard-span">Moniss_94</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">2</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01RUQXGKD0-67b4aeef2acb-512"
                alt="img"
              />
              <span className="dashboard-span">FlorHQ_92</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
