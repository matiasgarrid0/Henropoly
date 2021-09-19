import React from "react";
import Tutorial from "../Tutorial";
import { Room, DisplayGameBeta, Chat } from "./../../components";
import "./DashBoardBeta.css";
import { useSelector } from "react-redux";


const DashBoardBeta = () => {

  const { status } = useSelector((state) => state.henropolyGame);
  if (status === "inGame") {
    return (

      <div className="beta-space-game color-blanco">
        <div className="beta-box-game">
          <DisplayGameBeta />
        </div>
      </div>
    );
  }
  return (
    <div className="dashBoard-beta-alpha">
      <div className="asd"></div>
      <div className="dashBoard-beta-margin">
        <div className="repeat-total">
          <div><Tutorial /></div>
          <div><Room /></div>
          <div><Chat /></div>
        </div>
      </div>
    </div>
  );

};
export default DashBoardBeta;
