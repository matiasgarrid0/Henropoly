import React from "react";
import "./GameDashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValueTarget } from "./../../redux/actions";

const GameDashBoard = () => {
  const dispatch = useDispatch();
  const { playerPosition } = useSelector((state) => state.game);
  const movePlayer = (player) => {
    return () => {
      let num = Math.floor((Math.random() * 11) + 2);
      switch (player) {
        case "target1":
          if (playerPosition.target1.box + num < 40) {
            dispatch(
              changeValueTarget(player, "box", playerPosition.target1.box + num)
            );
          } else {
            dispatch(
              changeValueTarget(
                player,
                "box",
                playerPosition.target1.box + num - 40
              )
            );
          }
          break;
        case "target2":
          if (playerPosition.target2.box + num < 40) {
            dispatch(
              changeValueTarget(player, "box", playerPosition.target2.box + num)
            );
          } else {
            dispatch(
              changeValueTarget(
                player,
                "box",
                playerPosition.target2.box + num - 40
              )
            );
          }
          break;
        case "target3":
          if (playerPosition.target3.box + num < 40) {
            dispatch(
              changeValueTarget(player, "box", playerPosition.target3.box + num)
            );
          } else {
            dispatch(
              changeValueTarget(
                player,
                "box",
                playerPosition.target3.box + num - 40
              )
            );
          }
          break;
        default:
          if (playerPosition.target4.box + num < 40) {
            dispatch(
              changeValueTarget(player, "box", playerPosition.target4.box + num)
            );
          } else {
            dispatch(
              changeValueTarget(
                player,
                "box",
                playerPosition.target4.box + num - 40
              )
            );
          }
      }
    };
  };

  return (
    <div className="body-dashboard box-row no-select">
      <div className="body-dashboard-table box-column">
        <div className="box-row">
          <label className="label-game">player1:</label>
          <button onClick={movePlayer("target1")}>Roll</button>
          {playerPosition.target1.box}
        </div>
        <div className="box-row">
          <label className="label-game">player2:</label>
          <button onClick={movePlayer("target2")}>Roll</button>
          {playerPosition.target2.box}
        </div>
        <div className="box-row">
          <label className="label-game">player3:</label>
          <button onClick={movePlayer("target3")}>Roll</button>
          {playerPosition.target3.box}
        </div>
        <div className="box-row">
          <label className="label-game">player4:</label>
          <button onClick={movePlayer("target4")}>Roll</button>
          {playerPosition.target4.box}
        </div>
      </div>
    </div>
  );
};

export default GameDashBoard;
