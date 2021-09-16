import React, { useState } from "react";
import "./Ranking.css";
import { CreateGame } from "../../components/index";
import { Portal } from "../../components/index";

const Ranking = () => {

  return (
        <div className="position">
          <div className="ranking">
            <span className="game-win">Mas partidas ganadas</span>
            <div className="person">
              <img src="https://ca.slack-edge.com/TPRS7H4PN-U020K03EUHG-f49f0477ebe4-512" alt="img"/>
              <span className="dashboard-span">senjo903</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="ranking-number">10</span>
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
                <span className="ranking-number">7</span>
              </div>
            </div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U02046U590X-519f10bc999e-512"
                alt="img"
              />
              <span className="dashboard-span">AlanGiavino00</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="ranking-number">5</span>
              </div>
            </div>
           <div clasName='ranking-devide-line'></div>
            <div className="person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01UZGHU3J8-8209681533eb-512"
                alt="img"
              />
              <span className="dashboard-span">MatiGarrido</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="ranking-number">4</span>
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
                <span className="ranking-number">3</span>
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
                <span className="ranking-number">3</span>
              </div>
            </div>
            <div className="ranking-person">
              <img
                src="https://ca.slack-edge.com/TPRS7H4PN-U01RUQXGKD0-67b4aeef2acb-512"
                alt="img"
              />
              <span className="dashboard-span">FlorHQ_92</span>
              <div className="dashboard-pepito">
                {" "}
                <span className="ranking-number">1</span>
              </div>
            </div>
            </div>
            </div>
            
          
  );
};
export default Ranking;
