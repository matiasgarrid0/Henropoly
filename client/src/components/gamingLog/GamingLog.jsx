import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./GamingLog.css";

const GamingLog = () => {
    const { dataPlayers } = useSelector((state) => state.henropolyGame);
    const { socket } = useSelector((state) => state.auth);
    const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.on(`log`, (msj) => {
      if(mensajes.length >10){
        let newArray = mensajes;
        mensajes.shift()
        setMensajes(newArray)
      }
      setMensajes([...mensajes, msj]);
    });
    return () => {
      socket.off('log');
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  },[mensajes])
  
  return (<div className='gaminglog-table'>
      {mensajes.map((msj)=>{
          return(
          <div className='gaminglog-line'>
            <label className={`gaminglog-${msj.target}`}>{`${dataPlayers[msj.target].username}: `}</label><label className='gaminglog-text'>{` ${msj.text}`}</label><label></label>
          </div>)
      })}
  </div>)
          
};

export default GamingLog;