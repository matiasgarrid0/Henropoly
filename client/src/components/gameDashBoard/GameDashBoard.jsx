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
  return (
    <div className="body-dashboard no-select">
      <label>
        Zoom:
        <button onClick={zoomTable("min")}>-</button>
        <button onClick={zoomTable("max")}>+</button>
        {tableDefault.scale}
      </label>
    </div>
  );
};

export default GameDashBoard;
