import React from "react";
import "./GameDashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValueTable } from "./../../redux/actions";

const GameDashBoard = () => {
  const dispatch = useDispatch();
  const { tableDefault } = useSelector((state) => state.game);

  const zoomTable = (type) => {
    return () => {
      if (type === "min" && tableDefault.scale > 0.4) {
        dispatch(changeValueTable("scale", tableDefault.scale - 0.02));
      } else if (type === "max" && tableDefault.scale < 1.3) {
        dispatch(changeValueTable("scale", tableDefault.scale + 0.02));
      }
    };
  };
  const xTable = (type) => {
    return () => {
      if (type === "min" && tableDefault.x > -200) {
        dispatch(changeValueTable("x", tableDefault.x - 50));
      } else if (type === "max" && tableDefault.x < 200) {
        dispatch(changeValueTable("x", tableDefault.x + 50));
      }
    };
  };
  const highTable = (type) => {
    return () => {
      if (type === "min" && tableDefault.high > 0) {
        dispatch(changeValueTable("high", tableDefault.high - 5));
      } else if (type === "max" && tableDefault.high < 70) {
        dispatch(changeValueTable("high", tableDefault.high + 5));
      }
    };
  };
  const angleTable = (type) => {
    return () => {
      if (type === "min") {
        dispatch(changeValueTable("angle", tableDefault.angle - 5));
      } else {
        dispatch(changeValueTable("angle", tableDefault.angle + 5));
      }
    };
  };
  return (
    <div className="body-dashboard no-select box-column">
      <div className="box-row">
        <label className="label-game">Zoom:</label>
        <button onClick={zoomTable("min")}>-</button>
        <button onClick={zoomTable("max")}>+</button>
        {tableDefault.scale.toFixed(2)}
      </div>
      <div className="box-row">
        <label className="label-game">x:</label>
        <button onClick={xTable("min")}>-</button>
        <button onClick={xTable("max")}>+</button>
        {tableDefault.x}
      </div>
      <div className="box-row">
        <label className="label-game">High:</label>
        <button onClick={highTable("min")}>-</button>
        <button onClick={highTable("max")}>+</button>
        {tableDefault.high}
      </div>
      <div className="box-row">
        <label className="label-game">Angle:</label>
        <button onClick={angleTable("min")}>-</button>
        <button onClick={angleTable("max")}>+</button>
        {tableDefault.angle}
      </div>
    </div>
  );
};

export default GameDashBoard;
