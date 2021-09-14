import React, { useEffect, useState } from "react";
import "./DisplayGameBeta.css";
import { useDispatch, useSelector } from "react-redux";
import { setView, setTargetValue, setTurns } from "./../../redux/actions";
import { Board, Turns } from "./../";
import Imagen from "./table.jpg";
import { targetX, targetY } from "./calculatorTargetPosition";

const DisplayGameBeta = () => {
  const dispatch = useDispatch();
  const { status, dataPlayers } = useSelector((state) => state.henropolyGame);
  const { info } = useSelector((state) => state.reducerInfo);
  const { socket } = useSelector((state) => state.auth);
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
  const moveTime = () => {
    return new Promise((resolve) => setTimeout(resolve, 80));
  };
  const alignTarget = async (player) => {
    setDataGame({ ...dataGame, targetMove: true });
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
    setDataGame({
      ...dataGame,
      [player]: {
        ...dataGame[player],
        box: finalBox,
      },
      targetMove: false,
    });
  };
  useEffect(() => {
    if (
      dataGame.target1.box !== dataPlayers.target1.box &&
      dataGame.targetMove === false
    )
      alignTarget("target1");
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [dataPlayers.target1.box]);
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
      }
    });
    return () => {
      socket.off("setGame");
    };
  }, []);
  return (
    <div className="display-beta-border">
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
      <div className="display-beta-components">
        <Turns />
      </div>
      <div
        className="display-beta-touch"
        onWheel={handleWheelEvent}
        onMouseDown={handleMousedownEvent}
        onMouseMove={handleOnMouseMoveEvent}
        onMouseUp={handleOnMouseUpEvent}
        onMouseOut={handleOnMouseUpEvent}
      ></div>
    </div>
  );
};

export default DisplayGameBeta;