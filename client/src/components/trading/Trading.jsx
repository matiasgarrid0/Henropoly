import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  statusTrading,
  setHostTrader,
  setTradingFull,
  setTradeOfertHost,
  setTradeOfertOponent,
  setTargetHenryCoin,
  setHostHenryCoin,
  setHostConfirmation,
  setTargetConfirmation,
} from "./../../redux/actions";
import { ImCross } from "react-icons/im";
import "./Trading.css";
import Card from "./Card";
import money from "./money.mp3";
import desactive from './setTargetSound.mp3';
const Trading = () => {
  var sonidos = {
    money: new Audio(money),
    desactive: new Audio(desactive),
  };
  sonidos.money.volume = 0.8;
  sonidos.money.loop = false;
  sonidos.desactive.volume = 0.9
  sonidos.desactive.loop = false
  const { dataPlayers, table, host } = useSelector(
    (state) => state.henropolyGame
  );
  const { socket, user } = useSelector((state) => state.auth);
  const {
    targetCard,
    tradeStatus,
    hostUsername,
    targetTradeCard,
    hostTradeCard,
    hostCard,
    targetUsername,
    targetHenryCoin,
    hostHenryCoin,
    targetTotalHenryCoin,
    hostStatus,
    targetStatus,
    hostTotalHenryCoin,
  } = useSelector((state) => state.henryTrading);
  const dispatch = useDispatch();
  const [infoTrade, setInfoTrade] = useState({
    target: null,
  });
  const [input, setInput] = useState({ henryCoin: 0 });
  const setGold = (e) => {
    if (e.target.value < targetTotalHenryCoin) {
      setInput({ ...input, [e.target.name]: e.target.value });
    } else {
      setInput({ ...input, [e.target.name]: targetTotalHenryCoin });
    }
  };
  const setGoldHost = (e) => {
    if (e.target.value < hostTotalHenryCoin) {
      setInput({ ...input, [e.target.name]: e.target.value });
    } else {
      setInput({ ...input, [e.target.name]: hostTotalHenryCoin });
    }
  };
  useEffect(() => {
    socket.on(`Trading`, (data) => {
      if (data.status === "initialTrade") {
        dispatch(setHostTrader(data.info));
        dispatch(statusTrading("petition"));
      } else if (data.status === "acceptTrade") {
        dispatch(setTradingFull(data.data));
        setInput({ ...input, henryCoin: 0 });
      } else if (data.status === "setTradeOfertHost") {
        sonidos.desactive.play()
        dispatch(setTargetConfirmation(false));
        dispatch(setHostConfirmation(false));
        dispatch(setTradeOfertHost(data));
      } else if (data.status === "setTradeOfertOponent") {
        sonidos.desactive.play();
        dispatch(setTargetConfirmation(false));
        dispatch(setHostConfirmation(false));
        dispatch(setTradeOfertOponent(data));
      } else if (data.status === "setTargetHenryCoin") {
        sonidos.money.play();
        dispatch(setTargetConfirmation(false));
        dispatch(setHostConfirmation(false));
        dispatch(setTargetHenryCoin(data));
      } else if (data.status === "setHostHenryCoin") {
        sonidos.money.play();
        dispatch(setTargetConfirmation(false));
        dispatch(setHostConfirmation(false));
        dispatch(setHostHenryCoin(data));
      } else if (data.status === "setHostConfirmation") {
        dispatch(setHostConfirmation(data.hostStatus));
      } else if (data.status === "setTargetConfirmation") {
        dispatch(setTargetConfirmation(data.targetStatus));
      } else if (data.status === "closeTrade") {
        dispatch(setTargetConfirmation(false));
        dispatch(setHostConfirmation(false));
        dispatch(statusTrading(null));
      }
    });
    return () => {
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
  const rechazar = () => {
    return () => {
      socket.emit("sendTrade", {
        type: "cancelTrade",
        host: host,
      });
    };
  };
  if (tradeStatus === "selector") {
    return (
      <div className="trading-conteiner">
        <div className="trading-box-selector box-column">
          <div className="trading-table-select box-row">
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
          <button
            className="trading-btn-selector"
            onClick={() => {
              dispatch(statusTrading(null));
            }}
          >
            cancelar
          </button>
        </div>
      </div>
    );
  } else if (tradeStatus === "loading") {
    return (
      <div className="trading-conteiner">
        <div className="trading-box-selector box-column">
          <div className="trading-table-await">
            <label className="trading-table-await-label">
              esperando que {dataPlayers[infoTrade.target].username} responda
            </label>
          </div>
          <button className="trading-btn-selector" onClick={rechazar()}>
            cancelar
          </button>
        </div>
      </div>
    );
  } else if (tradeStatus === "petition") {
    return (
      <div className="trading-conteiner">
        <div className="trading-table-await box-column">
          <label>el jugador {hostUsername} desea comerciar</label>
          <div className="trading-table-await-label box-row">
            <button className="trading-btn-selector" onClick={rechazar()}>
              rechazar
            </button>
            <div className="trading-space-box"></div>
            <button className="trading-btn-selector" onClick={aceptar()}>
              aceptar
            </button>
          </div>
        </div>
      </div>
    );
  } else if (tradeStatus === "inTrading" && user.username === hostUsername) {
    return (
      <div className="trading-fullscreem">
        <div className="trading-conteiner-trade box-column">
          <div className="box-row">
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
              {targetStatus && (
                <label className="trading-oponente-text">Aceptado</label>
              )}
            </div>
            <div className="trading-yo">
              <div className="trading-label-box">
                <label className="trading-label">Mi Oferta</label>
              </div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={hostTradeCard[0]}
                  target="host"
                  type="trade"
                  box={0}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={hostTradeCard[1]}
                  target="host"
                  type="trade"
                  box={1}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={hostTradeCard[2]}
                  target="host"
                  type="trade"
                  box={2}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={hostTradeCard[3]}
                  target="host"
                  type="trade"
                  box={3}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={hostTradeCard[4]}
                  target="host"
                  type="trade"
                  box={4}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={hostTradeCard[5]}
                  target="host"
                  type="trade"
                  box={5}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={hostTradeCard[6]}
                  target="host"
                  type="trade"
                  box={6}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={hostTradeCard[7]}
                  target="host"
                  type="trade"
                  box={7}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={hostTradeCard[8]}
                  target="host"
                  type="trade"
                  box={8}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-henrycoins">
                <label className="trading-henrycoins-label">{`HenryCoins: ${hostHenryCoin}`}</label>
              </div>
              {hostStatus && (
                <label className="trading-oponente-text">Aceptado</label>
              )}
            </div>
            <div className="trading-mepanel">
              <div className="trading-mepanel-marco-cruz">
                <div onClick={rechazar()} className="trading-mepanel-cruz">
                  <ImCross />
                </div>
              </div>
              <div className="trading-label-box">
                <label className="trading-label">{hostUsername}</label>
              </div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card data={hostCard[0]} target="host" type="panel" box={0} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[1]} target="host" type="panel" box={1} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[2]} target="host" type="panel" box={2} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[3]} target="host" type="panel" box={3} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[4]} target="host" type="panel" box={4} />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card data={hostCard[5]} target="host" type="panel" box={5} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[6]} target="host" type="panel" box={6} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[7]} target="host" type="panel" box={7} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[8]} target="host" type="panel" box={8} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[9]} target="host" type="panel" box={9} />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card data={hostCard[10]} target="host" type="panel" box={10} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[11]} target="host" type="panel" box={11} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[12]} target="host" type="panel" box={12} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[13]} target="host" type="panel" box={0} />
                <div className="trading-space-three"></div>
                <Card data={hostCard[14]} target="host" type="panel" box={12} />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-henrycoins">
                <div className="trading-henrycoins-trade">
                  <label>HenryCoins: </label>
                  <input
                    className="trading-number"
                    type="number"
                    min="0"
                    max={hostTotalHenryCoin}
                    name="henryCoin"
                    value={input.henryCoin}
                    onChange={(e) => {
                      setGoldHost(e);
                    }}
                  />
                  <button
                    onClick={() => {
                      socket.emit("sendTrade", {
                        type: "setHenryCoin",
                        target: "oponent",
                        host: host,
                        henryCoin: input.henryCoin,
                      });
                    }}
                    className="trading-henrycoins-trade-btn"
                  >
                    Ofertar
                  </button>
                  <button
                    onClick={() => {
                      socket.emit("sendTrade", {
                        type: "setHenryCoin",
                        target: "oponent",
                        host: host,
                        henryCoin: 0,
                      });
                      setInput({ ...input, henryCoin: 0 });
                    }}
                    className="trading-henrycoins-trade-btn"
                  >
                    0 HenryCoins
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="trading-botonera">
            <button
              className="trading-btn-no-aceptado"
              onClick={() => {
                socket.emit("sendTrade", {
                  type: "setConfirmation",
                  target: "oponent",
                  status: false,
                  host: host,
                });
              }}
            >
              no Aceptar
            </button>
            <button
              className="trading-btn-aceptado"
              onClick={() => {
                socket.emit("sendTrade", {
                  type: "setConfirmation",
                  target: "oponent",
                  status: true,
                  host: host,
                });
              }}
            >
              aceptar
            </button>
          </div>
        </div>
      </div>
    );
  } else if (tradeStatus === "inTrading" && user.username === targetUsername) {
    return (
      <div className="trading-fullscreem">
        <div className="trading-conteiner-trade box-column">
          <div className="box-row">
            <div className="trading-oponente box-column">
              <div className="trading-label-box">
                <label className="trading-label">{hostUsername}</label>
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
                <label className="trading-henrycoins-label">
                  {`HenryCoins: ${hostHenryCoin}`}
                </label>
              </div>
              {hostStatus && (
                <label className="trading-oponente-text">Aceptado</label>
              )}
            </div>
            <div className="trading-yo">
              <div className="trading-label-box">
                <label className="trading-label">Mi Oferta</label>
              </div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={targetTradeCard[0]}
                  target="oponent"
                  type="trade"
                  box={0}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetTradeCard[1]}
                  target="oponent"
                  type="trade"
                  box={1}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetTradeCard[2]}
                  target="oponent"
                  type="trade"
                  box={2}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={targetTradeCard[3]}
                  target="oponent"
                  type="trade"
                  box={3}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetTradeCard[4]}
                  target="oponent"
                  type="trade"
                  box={4}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetTradeCard[5]}
                  target="oponent"
                  type="trade"
                  box={5}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={targetTradeCard[6]}
                  target="oponent"
                  type="trade"
                  box={6}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetTradeCard[7]}
                  target="oponent"
                  type="trade"
                  box={7}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetTradeCard[8]}
                  target="oponent"
                  type="trade"
                  box={8}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-henrycoins">
                <label className="trading-henrycoins-label">{`HenryCoins: ${targetHenryCoin}`}</label>
              </div>
              {targetStatus && (
                <label className="trading-oponente-text">Aceptado</label>
              )}
            </div>
            <div className="trading-mepanel">
              <div className="trading-mepanel-marco-cruz">
                <div onClick={rechazar()} className="trading-mepanel-cruz">
                  <ImCross />
                </div>
              </div>
              <div className="trading-label-box">
                <label className="trading-label">{targetUsername}</label>
              </div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={targetCard[0]}
                  target="oponent"
                  type="panel"
                  box={0}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[1]}
                  target="oponent"
                  type="panel"
                  box={1}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[2]}
                  target="oponent"
                  type="panel"
                  box={2}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[3]}
                  target="oponent"
                  type="panel"
                  box={3}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[4]}
                  target="oponent"
                  type="panel"
                  box={4}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={targetCard[5]}
                  target="oponent"
                  type="panel"
                  box={5}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[6]}
                  target="oponent"
                  type="panel"
                  box={6}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[7]}
                  target="oponent"
                  type="panel"
                  box={7}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[8]}
                  target="oponent"
                  type="panel"
                  box={8}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[9]}
                  target="oponent"
                  type="panel"
                  box={9}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-space-one"></div>
              <div className="box-row">
                <div className="trading-space-two"></div>
                <Card
                  data={targetCard[10]}
                  target="oponent"
                  type="panel"
                  box={10}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[11]}
                  target="oponent"
                  type="panel"
                  box={11}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[12]}
                  target="oponent"
                  type="panel"
                  box={12}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[13]}
                  target="oponent"
                  type="panel"
                  box={0}
                />
                <div className="trading-space-three"></div>
                <Card
                  data={targetCard[14]}
                  target="oponent"
                  type="panel"
                  box={12}
                />
                <div className="trading-space-two"></div>
              </div>
              <div className="trading-henrycoins">
                <div className="trading-henrycoins-trade">
                  <label>HenryCoins: </label>
                  <input
                    className="trading-number"
                    type="number"
                    min="0"
                    max={targetTotalHenryCoin}
                    name="henryCoin"
                    value={input.henryCoin}
                    onChange={(e) => {
                      setGold(e);
                    }}
                  />
                  <button
                    onClick={() => {
                      socket.emit("sendTrade", {
                        type: "setHenryCoin",
                        target: "target",
                        host: host,
                        henryCoin: input.henryCoin,
                      });
                    }}
                    className="trading-henrycoins-trade-btn"
                  >
                    Ofertar
                  </button>
                  <button
                    onClick={() => {
                      socket.emit("sendTrade", {
                        type: "setHenryCoin",
                        target: "target",
                        host: host,
                        henryCoin: 0,
                      });
                      setInput({ ...input, henryCoin: 0 });
                    }}
                    className="trading-henrycoins-trade-btn"
                  >
                    0 HenryCoins
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="trading-botonera">
            <button
              className="trading-btn-no-aceptado"
              onClick={() => {
                socket.emit("sendTrade", {
                  type: "setConfirmation",
                  target: "target",
                  status: false,
                  host: host,
                });
              }}
            >
              no Aceptar
            </button>
            <button
              className="trading-btn-aceptado"
              onClick={() => {
                socket.emit("sendTrade", {
                  type: "setConfirmation",
                  target: "target",
                  status: true,
                  host: host,
                });
              }}
            >
              aceptar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};
export default Trading;
