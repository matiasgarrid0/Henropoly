import "./Game.css";
import React from "react";
import { Chat } from "./../../components";

const Game = () => {
  return (
    <div className="space-game box-column">
      <div className="box-game">
        <Chat room={'Global'}/>
      </div>
    </div>
  );
};
export default Game;
