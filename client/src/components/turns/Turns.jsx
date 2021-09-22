import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import "./Turns.css";
import { playerGameisOver } from "../../redux/actions";


const Turns = ({ action }) => {

const dispatch = useDispatch();
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

  useEffect(() => {
    socket.on("setGame", (data) => {
     if(data.status === 'playerLost') {
       dispatch(playerGameisOver)
     }
    /*   else if (data.status === 'goToJail'){ 
        console.log('dataStatusJail', data)
       // dispatch(moveToJail(data))
        //dispatch(changeValueTarget(data.info.target,'box', 10));
      } */
    })
    return () => {
      socket.off("setGame");
    };
  }, []);

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
          </label>
          <label className="turns-title">HenryCoins:</label>
          <label className="turns-coin">{dataPlayers.target1.henryCoin > 400 ? dataPlayers.target1.henryCoin :socket.emit("TradeDashboard", { type: 'playerLost'})}</label>
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
          <label className="turns-coin">{dataPlayers.target2.henryCoin > 400 ? dataPlayers.target2.henryCoin : socket.emit("TradeDashboard", { type: 'playerLost'})}</label>
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
          </label>
          <label className="turns-title">HenryCoins:</label>                                              {/*   dispatch(playerGameIsOver) */}
          <label className="turns-coin">{dataPlayers.target3.henryCoin > 0 ? dataPlayers.target3.henryCoin : socket.emit("TradeDashboard", { type: 'playerLost'})}</label>
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
          <label className="turns-coin">{dataPlayers.target4.henryCoin > 0 ? dataPlayers.target4.henryCoin :socket.emit("TradeDashboard", { type: 'playerLost'})}</label>
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
