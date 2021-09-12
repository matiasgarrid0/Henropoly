import "./Game.css";
import React from "react";
import {useSelector} from 'react-redux'
import { DisplayGame, GameDashBoard } from "./../../components";

const Game = () => {
  
  const infoGame= useSelector((state)=> state.reducerInfo.infoGame)
 // console.log('aaaaaaaaaaaaaaaaaccccccccccccccccccc',infoGame[0])
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
