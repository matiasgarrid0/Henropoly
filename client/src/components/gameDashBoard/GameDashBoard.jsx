import React from "react";
import "./GameDashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValueTable } from "./../../redux/actions";

const GameDashBoard = () => {
  const dispatch = useDispatch();
  const { tableDefault, players } = useSelector((state) => state.game);
  const zoomTable = (type) => {
    return () => {
      if (type === "min" && tableDefault.scale > 0.4) {
        dispatch(changeValueTable("scale", tableDefault.scale - 0.02));
      } else if (type === "max" && tableDefault.scale < 0.82) {
        dispatch(changeValueTable("scale", tableDefault.scale + 0.02));
      }
    };
  };
  /*
  const xTable = (type) => {
    return () => {
      if (type === "min" && tableDefault.x > -160) {
        dispatch(changeValueTable("x", tableDefault.x - 40));
      } else if (type === "max" && tableDefault.x < 160) {
        dispatch(changeValueTable("x", tableDefault.x + 40));
      }
    };
  };*/
  const movePlayer = (number, roll) => {
    return () => {


    };
  };
  return (
    <div className='body-dashboard box-row no-select'>
      <div className="body-dashboard-table box-column">
        <div className="box-row">
          <label className="label-game">player1:</label>
          <button onClick={movePlayer(1,1)}>1</button>
          <button onClick={zoomTable(1,2)}>2</button>
          <button onClick={movePlayer(1,3)}>3</button>
          <button onClick={zoomTable(1,4)}>4</button>
          <button onClick={movePlayer(1,5)}>5</button>
          <button onClick={zoomTable(1,6)}>6</button>
          <button onClick={movePlayer(1,7)}>7</button>
          <button onClick={zoomTable(1,8)}>8</button>
          <button onClick={movePlayer(1,9)}>9</button>
          <button onClick={zoomTable(1,10)}>10</button>
          <button onClick={movePlayer(1,11)}>11</button>
          <button onClick={zoomTable(1,12)}>12</button>
          {players.target1.box}
        </div>
      </div>
    </div>
  );
};

export default GameDashBoard;
