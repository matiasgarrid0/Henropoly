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
  return (
    <div className="body-display no-select">
      {statusTable === "complete" ? (
        <div
          id="game-table"
          style={{ transform: `scale(${tableDefault.scale})` }}
          className="display-table"
        >
          <div>
            <Board cards={tableGame.table} />
            <div></div>
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
