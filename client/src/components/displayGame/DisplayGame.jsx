import React, { useState, useEffect } from "react";
import "./DisplayGame.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefault,
  resetTable,
  changeValueTable,
  changeValueTarget,
  filterLuckyRandom,
  filterComunalRandom,
} from "./../../redux/actions";

import {
  Board,
  Dices,
  PlayerProps,
  Portal,
  LuckyCard,
  PropertyCard,
  RailwayCard,
  ServiceCard,
  TaxCard,
  Jail,
} from "./../";
import Imagen from "./textura-madera.jpg";
import { targetX, targetY } from "./calculatorTargetPosition";
//positionToBug
import { luckyOrArc, gameActionsBoard } from '../playerProps/switchBoxBoard'

const DisplayGame = () => {
  useEffect(() => {
    if (statusTable === "loading") {
      dispatch(setDefault());
    }
    return () => dispatch(resetTable());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const dispatch = useDispatch();
  const { statusTable, tableGame, view, playerPosition } = useSelector((state) => state.game);
  //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  const players = useSelector((state) => state.reducerInfo.infoGame);
  const cardReducer = useSelector((state) => state.reducerInfo.info);
  const { luckyCard, comunalCard } = useSelector((state) => state.reducerInfo);
  const [portal, setPortal] = useState(null)
  const [property, setProperty] = useState(null)
  const [train, setTrain] = useState(null)
  const [service, setService] = useState(null)
  const [tax, setTax] = useState(null)
  const [jailData, setJailData] = useState(null)
  /*  const cardCarcerLuky = [{ID:11,
     name:"Suerte",S
     description:"Te copiaste en los checkpoints | Te vas directo a la migración",
     type:"migras",
     value:null,
     owner:null,
     tableMasterID:null}]; */

  const [status, setStatus] = useState({
    mouseActive: false,
    clientX: null,
    clientY: null,
    targetMove: false,
    target1: {
      box: playerPosition.target1.box,
    },
    target2: {
      box: playerPosition.target2.box,
    },
    target3: {
      box: playerPosition.target3.box,
    },
    target4: {
      box: playerPosition.target4.box,
    },
    roll: false,
    rollOne: null,
    rollTwo: null,
  });

  const moveTime = (value) => {
    return new Promise((resolve) => setTimeout(resolve, value));
  };
  const alignTarget = async (player) => {
    //target1 0 5
    setStatus({ ...status, targetMove: true });

    let num = Math.floor(Math.random() * 6 + 2);

    var actualBox = status[player].box; //0
    var finalBox = playerPosition[player].box; //5

    var roll = finalBox - actualBox;
    if (roll < 0) {
      roll = roll + 39
    }
    var rollOne;
    var rollTwo;
    if (roll === 2) {
      rollOne = 1;
      rollTwo = 1;
    } else if (roll > num) {
      rollOne = num;
      rollTwo = roll - num;
    } else {
      rollOne = roll - 1;
      rollTwo = 1;
    }
    setStatus({ ...status, rollOne: rollOne, rollTwo: rollTwo, roll: true });
    await moveTime(1000);

    while (finalBox !== actualBox) {
      //1 5
      let initialX = targetX(player, actualBox); //target1 1 dfdffd
      let initialY = targetY(player, actualBox); //target1 1 dffdfdfd
      actualBox++; //2
      if (actualBox === 40) actualBox = 0;
      let valueX = targetX(player, actualBox) - initialX; // 2 - 1 200px
      let valueY = targetY(player, actualBox) - initialY; // 2 - 1 150px
      dispatch(
        changeValueTarget(player, "x", initialX + Math.floor(valueX / 5))
      );
      dispatch(
        changeValueTarget(player, "y", initialY + Math.floor(valueY / 5))
      );
      await moveTime(20);
      dispatch(
        changeValueTarget(player, "x", initialX + Math.floor((valueX / 5) * 2))
      );
      dispatch(
        changeValueTarget(player, "y", initialY + Math.floor((valueY / 5) * 2))
      );
      await moveTime(20);
      dispatch(
        changeValueTarget(player, "x", initialX + Math.floor((valueX / 5) * 3))
      );
      dispatch(
        changeValueTarget(player, "y", initialY + Math.floor((valueY / 5) * 3))
      );
      await moveTime(20);
      dispatch(
        changeValueTarget(player, "x", initialX + Math.floor((valueX / 5) * 4))
      );
      dispatch(
        changeValueTarget(player, "y", initialY + Math.floor((valueY / 5) * 4))
      );
      await moveTime(20);
      dispatch(changeValueTarget(player, "x", initialX + valueX)); //2
      dispatch(changeValueTarget(player, "y", initialY + valueY)); //2
      await moveTime(20);
      setStatus({
        ...status,
        [player]: {
          ...status[player],
          box: actualBox, //5
        },
      });
    }
    setStatus({ ...status, roll: false });
    setStatus({
      ...status,
      [player]: {
        ...status[player], //
        box: finalBox,
      },
      targetMove: false,
    }); 
    //------IF PARA RENDERIZAR PORTALES------
    if (tableGame.table[playerPosition[player].box].type) {
      if (tableGame.table[playerPosition[player].box].type === "comunal" || tableGame.table[playerPosition[player].box].type === "lucky") {
        dispatch(filterComunalRandom());
        setPortal("comunal");
      }
      if (tableGame.table[playerPosition[player].box].type === "lucky") {
        dispatch(filterLuckyRandom());
        setPortal("lucky");
      }
      if (tableGame.table[playerPosition[player].box].type === "property") {
        setProperty(tableGame.table[playerPosition[player].box])
        setPortal("property");
      }
      if (tableGame.table[playerPosition[player].box].type === "railway") {
        setTrain(tableGame.table[playerPosition[player].box])
        setPortal("railway");
      }
      if (tableGame.table[playerPosition[player].box].type === "service") {
        setService(tableGame.table[playerPosition[player].box])
        setPortal("service");
      }
      if (tableGame.table[playerPosition[player].box].type === "tax" || tableGame.table[playerPosition[player].box].type === "taxVip") {
        setTax(tableGame.table[playerPosition[player].box])
        setPortal("tax");
      }
      if (tableGame.table[playerPosition[player].box].type === "jail" || tableGame.table[playerPosition[player].box].type === "goJail" ) {
        setJailData(tableGame.table[playerPosition[player].box])
        setPortal("jail");
      }
    }
  };
  function closedPortal() {
    luckyOrArc(luckyCard, players[0].resultNewGame.PlayerData.target1, tableGame.table[playerPosition.target1.box])
    setPortal(null)
  }

  function closedPortal1() {
    //comunal
    luckyOrArc(comunalCard, players[0].resultNewGame.PlayerData.target1, players);
    setPortal(null);
  }

  function closedPortal2() {
    setPortal(null);
  }

  function closedPortal3() {
    pagar()
    setPortal(null);
  }

  function closedPortal4() {
    dispatch(changeValueTarget('target1','box', 10));
    setPortal(null);
  }

  let myArr;
  const findIdCard = (positionDices1, arr) => {
    let aux = arr.table.filter(e => e.id === positionDices1)
    return aux;
  }
  function comprar() {
    myArr = findIdCard(playerPosition.target1.box, cardReducer)
    gameActionsBoard(players[0].resultNewGame.PlayerData.target1, 'comprar', myArr[0].type, myArr)
    setPortal(null);
  }
  function pagar(){
    myArr = findIdCard(playerPosition.target1.box, cardReducer)
    gameActionsBoard(players[0].resultNewGame.PlayerData.target1, 'pagar', myArr[0].type, myArr)
    setPortal(null);
  }


  useEffect(() => {
    if (
      status.target1.box !== playerPosition.target1.box &&
      status.targetMove === false
    )
      alignTarget("target1");
  }, [playerPosition.target1.box]);
  useEffect(() => {
    if (
      status.target2.box !== playerPosition.target2.box &&
      status.targetMove === false
    )
      alignTarget("target2");
  }, [playerPosition.target2.box]);
  useEffect(() => {
    if (
      status.target3.box !== playerPosition.target3.box &&
      status.targetMove === false
    )
      alignTarget("target3");
  }, [playerPosition.target3.box]);
  useEffect(() => {
    if (
      status.target4.box !== playerPosition.target4.box &&
      status.targetMove === false
    )
      alignTarget("target4");
  }, [playerPosition.target4.box]);
  const style = {
    backgroundSize: "2500px",
    backgroundImage: `url(${Imagen})`,
    boxShadow: "inset 0 0 0 20px #00000033",
    width: "1800px",
    height: "1800px",
    position: "absolute",
    transform: `scale(${view.scale}) rotateX(${view.high}deg) rotateZ(${view.angle}deg)`,
    marginLeft: `-300px`,
    marginTop: `-250px`,
  };
  const handleWheelEvent = (e) => {
    if (e.deltaY === -100 && view.scale > 0.4) {
      dispatch(changeValueTable("scale", view.scale - 0.02));
    } else if (e.deltaY === 100 && view.scale < 0.85) {
      dispatch(changeValueTable("scale", view.scale + 0.02));
    }
  };
  const handleMousedownEvent = (e) => {
    setStatus({
      ...status,
      clientX: e.clientX,
      clientY: e.clientY,
      mouseActive: true,
    });
  };
  const handleOnMouseMoveEvent = (e) => {
    if (status.mouseActive) {
      if (e.clientX > status.clientX + 5) {
        dispatch(changeValueTable("angle", view.angle - 1));
        setStatus({
          ...status,
          clientX: e.clientX,
        });
      } else if (e.clientX < status.clientX - 5) {
        dispatch(changeValueTable("angle", view.angle + 1));
        setStatus({
          ...status,
          clientX: e.clientX,
        });
      }
      if (e.clientY > status.clientY + 5 && view.high > 0) {
        dispatch(changeValueTable("high", view.high - 1));
        setStatus({
          ...status,
          clientY: e.clientY,
        });
      } else if (e.clientY < status.clientY - 5 && view.high < 70) {
        dispatch(changeValueTable("high", view.high + 1));
        setStatus({
          ...status,
          clientY: e.clientY,
        });
      }
    }
  };
  const handleOnMouseUpEvent = (e) => {
    setStatus({ ...status, mouseActive: false });
  };

  return (
    <div className="border">
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
          <button className='displayGame-btn' onClick={comprar}>Comprar</button>
        </Portal>
      )}
      {portal === "railway" && (
        <Portal onClose={closedPortal2}>
          <RailwayCard data={train} />
          <button className='displayGame-btn' onClick={comprar}>Comprar</button>
        </Portal>
      )}
      {portal === "service" && (
        <Portal onClose={closedPortal2}>
          <ServiceCard data={service} />
          <button className='displayGame-btn' onClick={comprar}>Comprar</button>
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
          target1={playerPosition.target1.box}
          target2={playerPosition.target2.box}
          target3={playerPosition.target3.box}
          target4={playerPosition.target4.box}
        />
      </div>
      <div className="body-display no-select">
        {statusTable === "complete" ? (
          <div className="container-gametable">
            <div className="container-gametable-cube">
              <div style={style}>
                <div className="align-game">
                  <Board className="board-position" cards={tableGame.table} />
                  <div className="game-box">
                    {playerPosition.target1 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(255, 0, 0)",
                          marginLeft: `${1260 - playerPosition.target1.x}px`,
                          marginTop: `${1260 - playerPosition.target1.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                    {playerPosition.target2 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(9, 255, 0)",
                          marginLeft: `${1260 - playerPosition.target2.x}px`,
                          marginTop: `${1260 - playerPosition.target2.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                    {playerPosition.target3 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(0, 255, 234)",
                          marginLeft: `${1260 - playerPosition.target3.x}px`,
                          marginTop: `${1260 - playerPosition.target3.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                    {playerPosition.target4 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(255, 0, 255)",
                          marginLeft: `${1260 - playerPosition.target4.x}px`,
                          marginTop: `${1260 - playerPosition.target4.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : statusTable === "loading" ? (
          <div>loading</div>
        ) : (
          <div>error</div>
        )}
      </div>
      <div
        className="touch"
        onWheel={handleWheelEvent}
        onMouseDown={handleMousedownEvent}
        onMouseMove={handleOnMouseMoveEvent}
        onMouseUp={handleOnMouseUpEvent}
        onMouseOut={handleOnMouseUpEvent}
      ></div>
      {status.roll && (
        <Dices rollOne={status.rollOne} rollTwo={status.rollTwo} />
      )}
    </div>
  );
};

export default DisplayGame;
