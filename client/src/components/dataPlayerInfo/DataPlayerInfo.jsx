import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiSettings, FiMinimize2 } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import "./DataPlayerInfo.css";
const DataPlayerInfo = ({ action, status, target }) => {
  const { dataPlayers, table } = useSelector((state) => state.henropolyGame);
  const { info } = useSelector((state) => state.reducerInfo);
  const [minimizar, setMinimizar] = useState(true);

  if (status && minimizar) {
    return (
      <div className="dataplayerInfo-div-btn-icon">
        <button className="dataplayerInfo-iconthree">
          <AiOutlineInfoCircle
            className="dataplayerInfo-icontwo"
            onClick={() => {
              action(false, null);
              setMinimizar(false);
            }}
          />
        </button>
      </div>
    );
  } else {
    return (
      <>
      
        <div className="dataplayerindfo-div-properties dataplayerInfo-div-minor">
          <label>{dataPlayers[target].username}</label>
          <p className="dataplayerindfo-p-properties">Tecnologías: </p>
          {info.table.map((card) => {
            if (
              card.type === "property" &&
              table[card.id].owner === dataPlayers[target].username
            ) {
              return (
                <div className="dataplayerinfo-div-name">
                  <p className={`dataplayerinfo-color-${table[card.id].color}`}>
                    {card.name}
                  </p>
                </div>
              );
            } else {
              <p>No posees tecnologías aún</p>;
            }
          })}
        </div>
      </>
    );
  }
};

export default DataPlayerInfo;
