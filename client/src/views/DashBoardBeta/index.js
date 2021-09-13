import React from "react";
import { Room, DisplayGameBeta,Chat } from "./../../components";
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
      <div className="beta-space-game color-blanco">
        <div className="beta-box-game">
        <div className="asd"></div>
        <Room />
        <div className="asd"></div>
        <Chat/>
        </div>
      </div>
    );
  }
};
export default DashBoardBeta;
