import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  statusTrading,
  setHostTrader,
  setTradingFull,
} from "./../../redux/actions";
import "./Trading.css";
import Card from "./Card";
//tradeStatus:
//null: invicible
//selector: elige con quien comerciar
//loading: esperando que acepten o rechacen la peticion
//preguntar si se acepta el comercio o se rechaza
const Trading = () => {
  const { dataPlayers, table, host } = useSelector(
    (state) => state.henropolyGame
  );
  const { socket, user } = useSelector((state) => state.auth);
  const {
    tradeStatus,
    hostUsername,
    targetTradeCard,
    hostTradeCard,
    hostCard,
    targetUsername,
    targetHenryCoin,
    hostHenryCoin
  } = useSelector((state) => state.henryTrading);
  const dispatch = useDispatch();
  const [infoTrade, setInfoTrade] = useState({
    target: null,
  });
  useEffect(() => {
    socket.on(`Trading`, (data) => {
      if (data.status === "initialTrade") {
        dispatch(setHostTrader(data.info));
        dispatch(statusTrading("petition"));
      } else if (data.status === "acceptTrade") {
        dispatch(setTradingFull(data.data));
      }
    });
    return () => {
      /*socket.emit("sendTrade", {
        type: "cancelTrade",
        target: infoTrade.target,
      });*/
      socket.off("Trading");
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const openTrade = (target) => {
    return () => {
      setInfoTrade({ ...infoTrade, target: target });
      socket.emit("sendTrade", {
        type: "initialTrade",
        target: target,
        host: host,
      });
      dispatch(statusTrading("loading"));
    };
  };
  const aceptar = () => {
    return () => {
      socket.emit("sendTrade", {
        type: "acceptTrade",
        host: hostUsername,
      });
    };
  };
  const rechazar = (target) => {
    return () => {
      /*setInfoTrade({ ...infoTrade, target: target });
      socket.emit("sendTrade", {
        type: "initialTrade",
        target: target,
        host: host,
      });
      dispatch(statusTrading("loading"));*/
    };
  };
  if (tradeStatus === "selector") {
    return (
      <div className="trading-conteiner">
        <div className="trading-table-select">
          {dataPlayers["target1"].status &&
            dataPlayers["target1"].username !== user.username && (
              <div
                className="trading-table-box box-column"
                onClick={openTrade("target1")}
              >
                <label className="trading-title">Player1:</label>
                <label className="trading-target1">
                  {dataPlayers.target1.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target1.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target1.username
                    ).length
                  }
                </label>
              </div>
            )}
          {dataPlayers["target2"].status &&
            dataPlayers["target2"].username !== user.username && (
              <div
                className="trading-table-box box-column"
                onClick={openTrade("target2")}
              >
                <label className="trading-title">Player2:</label>
                <label className="trading-target2">
                  {dataPlayers.target2.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target2.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target2.username
                    ).length
                  }
                </label>
              </div>
            )}
          {dataPlayers["target3"].status &&
            dataPlayers["target3"].username !== user.username && (
              <div
                className="trading-table-box box-column"
                onClick={openTrade("target3")}
              >
                <label className="trading-title">Player3:</label>
                <label className="trading-target3">
                  {dataPlayers.target3.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target3.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target3.username
                    ).length
                  }
                </label>
              </div>
            )}
          {dataPlayers["target4"].status &&
            dataPlayers["target4"].username !== user.username && (
              <div
                className="trading-table-box box-column"
                onClick={openTrade("target4")}
              >
                <label className="trading-title">Player4:</label>
                <label className="trading-target4">
                  {dataPlayers.target4.username}
                </label>
                <label className="trading-title">HenryCoins:</label>
                <label className="trading-coin">
                  {dataPlayers.target4.henryCoin}
                </label>
                <label className="trading-title">Propiedades:</label>
                <label className="trading-coin">
                  {
                    table.filter(
                      (card) => card.owner === dataPlayers.target4.username
                    ).length
                  }
                </label>
              </div>
            )}
        </div>
      </div>
    );
  } else if (tradeStatus === "loading") {
    return (
      <div className="trading-conteiner">
        <div className="trading-table-select">
          esperando que {dataPlayers[infoTrade.target].username} responda
        </div>
      </div>
    );
  } else if (tradeStatus === "petition") {
    return (
      <div className="trading-conteiner">
        <div className="trading-table-select">
          <label>el jugador {hostUsername} desea comerciar</label>
          <button onClick={rechazar()}>rechazar</button>
          <button onClick={aceptar()}>aceptar</button>
        </div>
      </div>
    );
  } else if (tradeStatus === "inTrading" && user.username === hostUsername) {
    return (
      <div className="trading-fullscreem">
        <div className="trading-conteiner-trade">
          <div className="trading-oponente box-column">
            <div className="trading-label-box">
              <label className="trading-label">{targetUsername}</label>
            </div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={targetTradeCard[0]} />
              <div className="trading-space-three"></div>
              <Card data={targetTradeCard[1]} />
              <div className="trading-space-three"></div>
              <Card data={targetTradeCard[2]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-space-one"></div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={targetTradeCard[3]} />
              <div className="trading-space-three"></div>
              <Card data={targetTradeCard[4]} />
              <div className="trading-space-three"></div>
              <Card data={targetTradeCard[5]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-space-one"></div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={targetTradeCard[6]} />
              <div className="trading-space-three"></div>
              <Card data={targetTradeCard[7]} />
              <div className="trading-space-three"></div>
              <Card data={targetTradeCard[8]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-henrycoins">
              <label className="trading-henrycoins-label">
                {`HenryCoins: ${targetHenryCoin}`}
              </label>
            </div>
          </div>
          <div className="trading-yo">
            <div className="trading-label-box">
              <label className="trading-label">Mi Oferta</label>
            </div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={hostTradeCard[0]} />
              <div className="trading-space-three"></div>
              <Card data={hostTradeCard[1]} />
              <div className="trading-space-three"></div>
              <Card data={hostTradeCard[2]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-space-one"></div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={hostTradeCard[3]} />
              <div className="trading-space-three"></div>
              <Card data={hostTradeCard[4]} />
              <div className="trading-space-three"></div>
              <Card data={hostTradeCard[5]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-space-one"></div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={hostTradeCard[6]} />
              <div className="trading-space-three"></div>
              <Card data={hostTradeCard[7]} />
              <div className="trading-space-three"></div>
              <Card data={hostTradeCard[8]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-henrycoins">
              <label className="trading-henrycoins-label">{`HenryCoins: ${hostHenryCoin}`}</label>
            </div>
          </div>
          <div className="trading-mepanel">
            <div className="trading-label-box">
              <label className="trading-label">{hostUsername}</label>
            </div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={hostCard[0]} className='tradeing-selector-trade'/>
              <div className="trading-space-three"></div>
              <Card data={hostCard[1]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[2]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[3]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[4]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-space-one"></div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={hostCard[5]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[6]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[7]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[8]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[9]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-space-one"></div>
            <div className="box-row">
              <div className="trading-space-two"></div>
              <Card data={hostCard[10]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[11]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[12]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[13]} />
              <div className="trading-space-three"></div>
              <Card data={hostCard[14]} />
              <div className="trading-space-two"></div>
            </div>
            <div className="trading-henrycoins">
              <label className="trading-henrycoins-label">HenryCoins: 0</label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};
export default Trading;
