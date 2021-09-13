import React from "react";
import { Room, DisplayGameBeta } from "./../../components";
import "./DashBoardBeta.css";
import { useSelector } from "react-redux";

const DashBoardBeta = () => {
  const { status } = useSelector((state) => state.henropolyGame);
  if (status === "inGame") {
    return (
      <div className="beta-space-game color-blanco">
        <div className="beta-box-game">
        <div className="asd"> </div>
        <div className="asd"> </div>
          <DisplayGameBeta />
        </div>
      </div>
    );
  } else {
    return (
      <div className="color-blanco">
        <div className="asd"> </div>
        <div className="asd"> </div>
        <Room />
      </div>
    );
  }
};
export default DashBoardBeta;
