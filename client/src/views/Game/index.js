import "./Game.css";
import React from "react";
import { DisplayGame, GameDashBoard } from "./../../components";

const Game = () => {
  
  return (
    <div className="space-game box-column">
      <div className="game-dashboard">
        <GameDashBoard />
      </div>
      <div className="box-game">
        <DisplayGame />
      </div>
    </div>
  );
};

export default Game;