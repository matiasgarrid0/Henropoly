import React, { useEffect, useState } from "react";
import "./DisplayGameBeta.css";
import { useDispatch, useSelector } from "react-redux";
import { setView, setTargetValue, setTurns, kickPlayer, setGameStatus, setGameRoll, filterComunalRandom, filterLuckyRandom } from "./../../redux/actions";
import {
  Board,
  Turns,
  Dices,
  Portal,
  LuckyCard,
  PropertyCard,
  RailwayCard,
  ServiceCard,
  TaxCard,
  Jail,
  PlayerProps,
  GameOptions,
  ChatGame,
  TurnsOptions
} from "./../";

import Imagen from "./table.jpg";
import { targetX, targetY } from "./calculatorTargetPosition";

const DisplayGameOmega = () => {
  const dispatch = useDispatch();
  const { status, dataPlayers, host, actualTurn } = useSelector((state) => state.henropolyGame);
  //random Lucky y comunal cards
  const { luckyCard, comunalCard } = useSelector((state) => state.reducerInfo);
  const { info } = useSelector((state) => state.reducerInfo);
  const { socket, user } = useSelector((state) => state.auth);
  const { view } = useSelector((state) => state.view);
  const [dataGame, setDataGame] = useState({
    mouseActive: false,
    clientX: null,
    clientY: null,
    targetMove: false,
    target1: {
      box: dataPlayers.target1.box,
    },
    target2: {
      box: dataPlayers.target2.box,
    },
    target3: {
      box: dataPlayers.target3.box,
    },
    target4: {
      box: dataPlayers.target4.box,
    },
  });
  //--Dados--
  const [roll, setRoll] = useState(false)
  const [rollDicesInGame, setRollDicesInGame] = useState({
    valorOne: null,
    valorTwo: null,
    username: null,
  })
  //----portales---
  const [portal, setPortal] = useState(null)
  const [property, setProperty] = useState(null)
  const [train, setTrain] = useState(null)
  const [service, setService] = useState(null)
  const [tax, setTax] = useState(null)
  const [jailData, setJailData] = useState(null)

  const moveTime = () => {
    return new Promise((resolve) => setTimeout(resolve, 80));
  };

  const alignTarget = async (player) => {
    setDataGame({ ...dataGame, targetMove: true });
    setRoll(true)
    await moveTime(88000);
    var actualBox = dataGame[player].box;
    var finalBox = dataPlayers[player].box;
    while (finalBox !== actualBox) {
      let initialX = targetX(player, actualBox);
      let initialY = targetY(player, actualBox);
      actualBox++; //2
      if (actualBox === 40) actualBox = 0;
      let valueX = targetX(player, actualBox) - initialX;
      let valueY = targetY(player, actualBox) - initialY;
      dispatch(setTargetValue(player, "x", initialX + Math.floor(valueX / 5)));
      dispatch(setTargetValue(player, "y", initialY + Math.floor(valueY / 5)));
      await moveTime();
      dispatch(
        setTargetValue(player, "x", initialX + Math.floor((valueX / 5) * 2))
      );
      dispatch(
        setTargetValue(player, "y", initialY + Math.floor((valueY / 5) * 2))
      );
      await moveTime();
      dispatch(
        setTargetValue(player, "x", initialX + Math.floor((valueX / 5) * 3))
      );
      dispatch(
        setTargetValue(player, "y", initialY + Math.floor((valueY / 5) * 3))
      );
      await moveTime();
      dispatch(
        setTargetValue(player, "x", initialX + Math.floor((valueX / 5) * 4))
      );
      dispatch(
        setTargetValue(player, "y", initialY + Math.floor((valueY / 5) * 4))
      );
      await moveTime();
      dispatch(setTargetValue(player, "x", initialX + valueX));
      dispatch(setTargetValue(player, "y", initialY + valueY));
      await moveTime();
      setDataGame({
        ...dataGame,
        [player]: {
          ...dataGame[player],
          box: actualBox,
        },
      });
    }
    setRoll(false)
    setDataGame({
      ...dataGame,
      [player]: {
        ...dataGame[player],
        box: finalBox,
      },
      targetMove: false,
    });

    //------IF PARA RENDERIZAR PORTALES------
    if (info.table[dataPlayers[player].box].type) {
      if (info.table[dataPlayers[player].box].type === "comunal") {
        dispatch(filterComunalRandom());
        setPortal("comunal");
      }
      if (info.table[dataPlayers[player].box].type === "lucky") {
        dispatch(filterLuckyRandom());
        setPortal("lucky");
      }
      if (info.table[dataPlayers[player].box].type === "property") {
        setProperty(info.table[dataPlayers[player].box])
        setPortal("property");
      }
      if (info.table[dataPlayers[player].box].type === "railway") {
        setTrain(info.table[dataPlayers[player].box])
        setPortal("railway");
      }
      if (info.table[dataPlayers[player].box].type === "service") {
        setService(info.table[dataPlayers[player].box])
        setPortal("service");
      }
      if (info.table[dataPlayers[player].box].type === "tax" || info.table[dataPlayers[player].box].type === "taxVip") {
        setTax(info.table[dataPlayers[player].box])
        setPortal("tax");
      }
      if (info.table[dataPlayers[player].box].type === "jail" || info.table[dataPlayers[player].box].type === "goJail") {
        setJailData(info.table[dataPlayers[player].box])
        setPortal("jail");
      }
    }
  };

  function closedPortal() {
    // luckyOrArc(luckyCard, players[0].resultNewGame.PlayerData.target1, info.table[dataPlayers.target1.box])
    setPortal(null)
  }

  function closedPortal1() {
    //comunal
    // luckyOrArc(comunalCard, players[0].resultNewGame.PlayerData.target1, players);
    setPortal(null);
  }

  function closedPortal2() {
    setPortal(null);
  }

  function closedPortal3() {
    // pagar()
    setPortal(null);
  }

  function closedPortal4() {
    // dispatch(changeValueTarget('target1', 'box', 10));
    setPortal(null);
  }

  useEffect(() => {
    if (
      dataGame.target1.box !== dataPlayers.target1.box &&
      dataGame.targetMove === false
    )
      alignTarget("target1");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target1.box]);
  useEffect(() => {
    if (
      dataGame.target2.box !== dataPlayers.target2.box &&
      dataGame.targetMove === false
    )
      alignTarget("target2");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target2.box]);

  useEffect(() => {
    if (
      dataGame.target3.box !== dataPlayers.target3.box &&
      dataGame.targetMove === false
    )
      alignTarget("target3");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target3.box]);

  useEffect(() => {
    if (
      dataGame.target4.box !== dataPlayers.target4.box &&
      dataGame.targetMove === false
    )
      alignTarget("target4");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target4.box]);

  const style = {
    backgroundSize: "2500px",
    backgroundImage: `url(${Imagen})`,
    boxShadow: "inset 0 0 0 20px #00000033",
    width: "1800px",
    height: "1800px",
    position: "absolute",
    transform: `scale(${view.scale}) rotateX(${view.high}deg) rotateZ(${view.angle}deg)`,
    marginLeft: `-250px`,
    marginTop: `-250px`,
  };
  const handleWheelEvent = (e) => {
    if (e.deltaY === 100 && view.scale > 0.55) {
      dispatch(setView("scale", view.scale - 0.03));
    } else if (e.deltaY === -100 && view.scale < 1.28) {
      dispatch(setView("scale", view.scale + 0.03));
    }
  };
  const handleMousedownEvent = (e) => {
    setDataGame({
      ...dataGame,
      clientX: e.clientX,
      clientY: e.clientY,
      mouseActive: true,
    });
  };
  const handleOnMouseMoveEvent = (e) => {
    if (dataGame.mouseActive) {
      if (e.clientX > dataGame.clientX + 5) {
        dispatch(setView("angle", view.angle - 1));
        setDataGame({
          ...dataGame,
          clientX: e.clientX,
        });
      } else if (e.clientX < dataGame.clientX - 5) {
        dispatch(setView("angle", view.angle + 1));
        setDataGame({
          ...dataGame,
          clientX: e.clientX,
        });
      }
      if (e.clientY > dataGame.clientY + 5 && view.high > 0) {
        dispatch(setView("high", view.high - 1));
        setDataGame({
          ...dataGame,
          clientY: e.clientY,
        });
      } else if (e.clientY < dataGame.clientY - 5 && view.high < 70) {
        dispatch(setView("high", view.high + 1));
        setDataGame({
          ...dataGame,
          clientY: e.clientY,
        });
      }
    }
  };
  const handleOnMouseUpEvent = (e) => {
    setDataGame({ ...dataGame, mouseActive: false });
  };
  useEffect(() => {
    socket.on("setGame", (data) => {
      if (data.status === "setTurns") {
        dispatch(setTurns({ actualTurn: data.actualTurn, order: data.order }));
      } else if (data.status === 'statusGame') {
        if (data.type === 'endGame') {
          dispatch(setGameStatus('free'))
        } else if (data.type === 'exitPlayer') {
          dispatch(kickPlayer(data.info))
        } else if (data.type === 'meEnd') {
          dispatch(setGameStatus('free'))
        }
      } else if (data.status === 'roll') {
        setRollDicesInGame({ ...rollDicesInGame, valorOne: data.one, valorTwo: data.two, username: data.usernameRoll })
        dispatch(setGameRoll(data.info))
      }
    });
    return () => {
      socket.off("setGame");
    };
  }, []);

  return (
    <div className="display-beta-border">
      {portal === "lucky" && (
        <Portal onClose={closedPortal}>
          <LuckyCard data={luckyCard} />
        </Portal>
      )}
      {portal === "comunal" && (
        <Portal onClose={closedPortal1}>
          <LuckyCard data={comunalCard} />
        </Portal>
      )}
      {portal === "property" && (
        <Portal onClose={closedPortal2}>
          <PropertyCard data={property} />
          {/* <button className='displayGame-btn' onClick={() => { socket.emit('gameDashboard', { type: 'gameActionsBoard' }) }}>Comprar</button> */}
        </Portal>
      )}
      {portal === "railway" && (
        <Portal onClose={closedPortal2}>
          <RailwayCard data={train} />
          {/* <button className='displayGame-btn' onClick={comprar}>Comprar</button> */}
        </Portal>
      )}
      {portal === "service" && (
        <Portal onClose={closedPortal2}>
          <ServiceCard data={service} />
          {/* <button className='displayGame-btn' onClick={comprar}>Comprar</button> */}
        </Portal>
      )}
      {portal === "tax" && (
        <Portal onClose={closedPortal3}>
          <TaxCard data={tax} />
        </Portal>
      )}
      {portal === "jail" && (
        <Portal onClose={closedPortal4}>
          <Jail data={jailData} />
        </Portal>
      )}
      <div>
      <PlayerProps
          target1={dataPlayers.target1.box}
          target2={dataPlayers.target2.box}
          target3={dataPlayers.target3.box}
          target4={dataPlayers.target4.box}
        />
      </div>
      <div className="display-beta-body-display no-select">
        {status === "inGame" ? (
          <div className="display-beta-container-gametable">
            <div className="display-beta-container-gametable-cube">
              <div style={style}>
                <div className="display-beta-align-game">
                  <Board className="display-beta-board-position" cards={info.table} />
                  <div className="display-beta-game-box">
                    {dataPlayers.target1.status && (
                      <div
                        style={{
                          backgroundColor: "rgb(255, 0, 0)",
                          marginLeft: `${1260 - dataPlayers.target1.x}px`,
                          marginTop: `${1260 - dataPlayers.target1.y}px`,
                        }}
                        className="display-beta-target"
                      ></div>
                    )}
                    {dataPlayers.target2.status && (
                      <div
                        style={{
                          backgroundColor: "rgb(9, 255, 0)",
                          marginLeft: `${1260 - dataPlayers.target2.x}px`,
                          marginTop: `${1260 - dataPlayers.target2.y}px`,
                        }}
                        className="display-beta-target"
                      ></div>
                    )}
                    {dataPlayers.target3.status && (
                      <div
                        style={{
                          backgroundColor: "rgb(0, 255, 234)",
                          marginLeft: `${1260 - dataPlayers.target3.x}px`,
                          marginTop: `${1260 - dataPlayers.target3.y}px`,
                        }}
                        className="display-beta-target"
                      ></div>
                    )}
                    {dataPlayers.target4.status && (
                      <div
                        style={{
                          backgroundColor: "rgb(255, 0, 255)",
                          marginLeft: `${1260 - dataPlayers.target4.x}px`,
                          marginTop: `${1260 - dataPlayers.target4.y}px`,
                        }}
                        className="display-beta-target"
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>error</div>
        )}
      </div>
      <div
        className="display-beta-touch"
        onWheel={handleWheelEvent}
        onMouseDown={handleMousedownEvent}
        onMouseMove={handleOnMouseMoveEvent}
        onMouseUp={handleOnMouseUpEvent}
        onMouseOut={handleOnMouseUpEvent}
      >
       <div className="display-beta-align-chatgame">
            <ChatGame />
          </div>
        <div className="display-beta-align-gameoptions">
      <GameOptions host={user.username === host} gameOver={() => {
        socket.emit("gameDashboard", { type: "gameOver" });
      }} meEnd={() => {
        socket.emit("gameDashboard", { type: "meEnd" });
      }}/>
    </div>  
    <div className="display-beta-align-gameturns">
            <Turns />
          </div>
          {roll && (<div className='display-beta-align-dices'>
          <Dices rollOne={rollDicesInGame.valorOne} rollTwo={rollDicesInGame.valorTwo} username={rollDicesInGame.username} /></div>
        )}
      </div>
      <div className="display-beta-components">
        {user.username === host ?
          <button onClick={() => { socket.emit('gameDashboard', { type: 'gameOver' }) }}>Terminar partida</button>
          : <button onClick={() => { socket.emit('gameDashboard', { type: 'meEnd' }) }}>Salir del juego </button>}
        {user.username === actualTurn &&
          <button onClick={() => { socket.emit('gameDashboard', { type: 'roll' }) }}>Tirar Dados</button>}
        {user.username === actualTurn &&
          <button onClick={() => { socket.emit('gameDashboard', { type: 'passTurn' }) }}>Pasar turno</button>
        }
      </div>
    </div>
  );
};

export default DisplayGameOmega;