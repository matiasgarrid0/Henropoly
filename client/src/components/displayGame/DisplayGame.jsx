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

const DisplayGame = () => {
  const [status, setStatus] = useState({
    mouseActive: false,
    clientX: null,
    clientY: null,
  });
  const dispatch = useDispatch();
  const { statusTable, tableGame, tableDefault, players } = useSelector(
    (state) => state.game
  );
  useEffect(() => {
    if (statusTable === "loading") {
      dispatch(setDefault());
    }
    return () => dispatch(resetTable());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const style = {
    backgroundSize: "700px",
    backgroundImage: `url(${Imagen})`,
    boxShadow: "inset 0 0 0 20px #00000033",
    width: "1800px",
    height: "1800px",
    position: "absolute",
    transform: `scale(${tableDefault.scale}) rotateX(${tableDefault.high}deg) rotateZ(${tableDefault.angle}deg)`,
    marginLeft: `-300px`,
    marginTop: `-250px`,
  };
  const handleWheelEvent = (e) => {
    if (e.deltaY === -100 && tableDefault.scale > 0.4) {
      dispatch(changeValueTable("scale", tableDefault.scale - 0.02));
    } else if (e.deltaY === 100 && tableDefault.scale < 0.85) {
      dispatch(changeValueTable("scale", tableDefault.scale + 0.02));
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
        dispatch(changeValueTable("angle", tableDefault.angle - 1));
        setStatus({
          ...status,
          clientX: e.clientX,
        });
      } else if (e.clientX < status.clientX - 5) {
        dispatch(changeValueTable("angle", tableDefault.angle + 1));
        setStatus({
          ...status,
          clientX: e.clientX,
        });
      }
      if (e.clientY > status.clientY + 5 && tableDefault.high > 0) {
        dispatch(changeValueTable("high", tableDefault.high - 1));
        setStatus({
          ...status,
          clientY: e.clientY,
        });
      } else if (e.clientY < status.clientY - 5 && tableDefault.high < 70) {
        dispatch(changeValueTable("high", tableDefault.high + 1));
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
                  <Board className='board-position' cards={tableGame.table} />
                  <div className="game-box">
                    {players.target1 !== null && (
                      <div className="target-one"></div>
                    )}
                    {players.target2 !== null && (
                      <div className="target-two"></div>
                    )}
                    {players.target3 !== null && (
                      <div className="target-three"></div>
                    )}
                    {players.target4 !== null && (
                      <div className="target-four"></div>
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
