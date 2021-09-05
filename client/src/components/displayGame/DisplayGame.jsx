import React, { useEffect } from "react";
import "./DisplayGame.css";
import { useDispatch, useSelector } from "react-redux";
import { setDefault, resetTable } from "./../../redux/actions";
import { Board } from "./../";

const DisplayGame = () => {
  const dispatch = useDispatch();
  const { statusTable, tableGame, tableDefault } = useSelector(
    (state) => state.game
  ); //, tableGame
  useEffect(() => {
    if (statusTable === "loading") {
      dispatch(setDefault());
    }
    return () => dispatch(resetTable());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const style = {
    width: '1300px',
    height: '1300px',
    position: "absolute",
    transform: `scale(${tableDefault.scale}) rotateX(${tableDefault.high}deg) rotateZ(${tableDefault.angle}deg)`,
    marginLeft: `${tableDefault.x-50}px`
  };
  return (
    <div className="body-display no-select">
      {statusTable === "complete" ? (
        <div className="container-gametable">
          <div className="container-gametable-cube">
            <div id="game-table" style={style} className="display-table">
              <Board cards={tableGame.table} />
              <div></div>
            </div>
          </div>
        </div>
      ) : statusTable === "loading" ? (
        <div>loading</div>
      ) : (
        <div>error</div>
      )}
    </div>
  );
};

export default DisplayGame;
