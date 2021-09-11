import React from "react";
import { Chat } from "../../components";
import "./dashboard.css";

const DashBoard = () => {

  return (
    <div className="dashboard-todo">
      {/* <div className="dashboard-hijo">
        <div className="asd"> </div>

        <div className="position">
          <div className="total">
            <h3 className="h3-total"> ¡JUEGA!</h3>
            <h4>CÓMO JUGAR A HENROPOLY</h4>
            Muévete alrededor del tablero comprando tantas tecnologías como
            puedas. Cuantas más poseas, más dinero podrás recibir del resto de
            jugadores. Si eres el último jugador que queda cuando el resto de
            jugadores están en bancarrota, ¡ganas el juego!
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
              <h3 className="text-hov">crear sala</h3>
              <h3 className="text-hov">unirse a sala</h3>
            </div>
            <div className="conimg">
              <img
                className="imgn"
                src="https://cdn-pro.elsalvador.com/wp-content/uploads/2020/07/Ramon-Valdes.jpg"
                alt="donramon"
              />
            </div>
          </div>
          <div className="ranking">
            <h3>Mas partidas ganadas</h3>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U020K03EUHG-f49f0477ebe4-512"
                alt="img"
              />
              <h4 className="dashboard-h4">senjo903</h4>
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
              <h4 className="dashboard-h4">FacuRearte</h4>
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
              <h4 className="dashboard-h4">AlanGiavino</h4>
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
              <h4 className="dashboard-h4">MatiGarrido</h4>
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
              <h4 className="dashboard-h4">Sebi_elmejor</h4>
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
              <h4 className="dashboard-h4">Moniss_94</h4>
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
              <h4 className="dashboard-h4">FlorHQ_92</h4>
              <div className="dashboard-pepito">
                {" "}
                <span className="number">1</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <Chat/>
      </div>
    </div>
  );
};
export default DashBoard;
