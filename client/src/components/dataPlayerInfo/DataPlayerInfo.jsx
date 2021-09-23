import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiSettings, FiMinimize2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import "./DataPlayerInfo.css";
const DataPlayerInfo = ({ action, status, target }) => {
  const { dataPlayers, table } = useSelector((state) => state.henropolyGame);
  const { info } = useSelector((state) => state.reducerInfo);
  // const [minimizar, setMinimizar] = useState(true);

  if (status) {
    return (<div className="dataplayerInfo-div-minor">
      <div className="dataplayerInfo-div-btn-icon">
        <div className="dataplayerInfo-iconthree"><AiOutlineClose
          className="dataplayerInfo-icontwo"
          onClick={action(false, null)}
        /></div>
      </div>
      <div>
        <div className="dataplayerindfo-div-properties dataplayerInfo-div-minor">
          <label className='dataplayerinfo-username'>{dataPlayers[target].username}</label>
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
        <div className="dataplayerindfo-div-properties dataplayerInfo-div-minor">
           <p className="dataplayerindfo-p-properties">Servicios: </p>
          {info.table.map((card) => {
            if (
              ( card.type === "service" ) &&
              table[card.id].owner === dataPlayers[target].username) {
              return (
                <div className="dataplayerinfo-div-name">
                  <p className='dataplayerinfo-p-cardname'>
                    {card.name}
                  </p>
                </div>
              );
            } else {
              <p>No posees servicios aún</p>
            }
          })}
        </div>
        <div className="dataplayerindfo-div-properties dataplayerInfo-div-minor">
          <p className="dataplayerindfo-p-properties">Módulos: </p>
          {info.table.map((card) => {
            if (
              ( card.type === "railway" ) &&
              table[card.id].owner === dataPlayers[target].username   
            ) {
              return (
                <div className="dataplayerinfo-div-name">
                  <p className='dataplayerinfo-p-cardname'>
                    {card.name}
                  </p>
                </div>
              );
            } else {
              <p>No posees módulos aún</p>;
            }
          })}
        </div>
      </div>
    </div>);
  } else {
    return <></>
  }
};

export default DataPlayerInfo;