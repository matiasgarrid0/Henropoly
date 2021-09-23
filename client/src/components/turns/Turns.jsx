import { useSelector, useDispatch} from "react-redux";
import React, { useEffect, useState } from "react";
import "./Turns.css";
import {gameAdios} from "./../../redux/actions"

import Img from '../room/img/05.gif'
const Turns = ({ action }) => {

const dispatch= useDispatch()
const reloj = (sec) => {
    let minutos = `0${Math.floor(sec / 60)}`;
    let segundos = sec % 60;
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    return minutos + ":" + segundos;
  };
  const { socket } = useSelector((state) => state.auth);
  const { actualTurn, dataPlayers } = useSelector(
    (state) => state.henropolyGame
  );
  const [segundos, setSegundos] = useState(0);
  
  useEffect(() => {
    socket.on("timer", (data) => {
      setSegundos(data);
    });
    return () => {
      socket.off("timer");
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

 /*  useEffect(() => {
    socket.on("gameDashboard", (data) => {
      if (data.status === "playerOff") {
        console.log(data)
       dispatch(gameAdios(data))
      }
    })

    return () => {
      socket.off("gameDashboard");
    };
  }, []); */


/* const playerChau = () => {
  console.log('pasoooooooooooooooooooooooooooooooooooo') //lo consologeo 50 vece
  socket.emit("gameDashboard", { type: "playerIsLoser" })
  return (
    <span> PERDISTE :( </span>
  )
} */

  return (
    <div className="turns-table box-row">
      {dataPlayers.target1.status && (
        <div
          className="turns-btn-disabled box-column"
          onClick={action(true, "target1")}
        >
          <label className="turns-title">Player1:</label>
          <label className="turns-target1">
            {dataPlayers.target1.username}
            {/* <img src={require(`../room/img/${dataPlayers.target1.img}`).default} width='20'/> */}
          </label>
          <label className="turns-title">HenryCoins:</label>
          <label className="turns-coin">{dataPlayers.target1.henryCoin }</label>
          {dataPlayers.target1.username === actualTurn && (
            <div className="turns-btn-disabled-two">
              <label>{reloj(segundos)}</label>
            </div>
          )}
        </div>
      )}
      {dataPlayers.target2.status && (
        <div
          className="turns-btn-disabled box-column"
          onClick={action(true, "target2")}
        >
          <label className="turns-title">Player2:</label>
          <label className="turns-target2">
            {dataPlayers.target2.username}
          </label>
          <label className="turns-title">HenryCoins:</label>
          <label className="turns-coin">{dataPlayers.target2.henryCoin}</label>
          {dataPlayers.target2.username === actualTurn && (
            <div className="turns-btn-disabled-two">
              <label>{reloj(segundos)}</label>
            </div>
          )}
        </div>
      )}
      {dataPlayers.target3.status && (
        <div
          className="turns-btn-disabled box-column"
          onClick={action(true, "target3")}
        >
          <label className="turns-title">Player3:</label>
          <label className="turns-target3">
            {dataPlayers.target3.username}
            <img/>
          </label>
          <label className="turns-title">HenryCoins:</label>
          <label className="turns-coin">{dataPlayers.target3.henryCoin  }</label>
          {dataPlayers.target3.username === actualTurn && (
            <div className="turns-btn-disabled-two">
              <label>{reloj(segundos)}</label>
            </div>
          )}
        </div>
      )}
      {dataPlayers.target4.status && (
        <div
          className="turns-btn-disabled box-column"
          onClick={action(true, "target4")}
        >
          <label className="turns-title">Player4:</label>
          <label className="turns-target4">
            {dataPlayers.target4.username}
          </label>
          <label className="turns-title">HenryCoins:</label>
          <label className="turns-coin">{dataPlayers.target4.henryCoin }</label>
          {dataPlayers.target4.username === actualTurn && (
            <div className="turns-btn-disabled-two">
              <label>{reloj(segundos)}</label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Turns;
