import React, { useEffect, useState } from "react";
import "./DisplayGame.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefault,
  resetTable,
  changeValueTable,
} from "./../../redux/actions";
import { Board } from "./../";
import Imagen from "./table.jpg";
import { targetX, targetY } from "./calculatorTargetPosition";

const DisplayGame = () => {
  useEffect(() => {
    if (statusTable === "loading") {
      dispatch(setDefault());
    }
    return () => dispatch(resetTable());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const dispatch = useDispatch();
  const { statusTable, tableGame, view, playerPosition } = useSelector(
    (state) => state.game
  );
  const [status, setStatus] = useState({
    mouseActive: false,
    clientX: null,
    clientY: null,
    target1: {
      box: playerPosition.target1,
      x: targetX("target1", playerPosition.target1),
      y: targetY("target1", playerPosition.target1),
    },
    target2: {
      box: playerPosition.target2,
      x: targetX("target2", playerPosition.target2),
      y: targetY("target2", playerPosition.target2),
    },
    target3: {
      box: playerPosition.target3,
      x: targetX("target3", playerPosition.target3),
      y: targetY("target3", playerPosition.target3),
    },
    target4: {
      box: playerPosition.target4,
      x: targetX("target4", playerPosition.target4),
      y: targetY("target4", playerPosition.target4),
    },
  });
  const style = {
    backgroundSize: "700px",
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
                          marginLeft: `${1260 - status.target1.x}px`,
                          marginTop: `${1260 - status.target1.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                    {playerPosition.target2 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(9, 255, 0)",
                          marginLeft: `${1260 - status.target2.x}px`,
                          marginTop: `${1260 - status.target2.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                    {playerPosition.target3 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(0, 255, 234)",
                          marginLeft: `${1260 - status.target3.x}px`,
                          marginTop: `${1260 - status.target3.y}px`,
                        }}
                        className="target"
                      ></div>
                    )}
                    {playerPosition.target4 !== null && (
                      <div
                        style={{
                          backgroundColor: "rgb(255, 0, 255)",
                          marginLeft: `${1260 - status.target4.x}px`,
                          marginTop: `${1260 - status.target4.y}px`,
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
    </div>
  );
};

export default DisplayGame;
