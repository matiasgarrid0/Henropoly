import React from "react";
import "./GameDashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValueTarget } from "./../../redux/actions";

const GameDashBoard = () => {
  const dispatch = useDispatch();
  const { playerPosition } = useSelector((state) => state.game);
  const movePlayer = (player, num) => {
    return () => {
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
          <button onClick={movePlayer("target1", 1)}>1</button>
          <button onClick={movePlayer("target1", 2)}>2</button>
          <button onClick={movePlayer("target1", 3)}>3</button>
          <button onClick={movePlayer("target1", 4)}>4</button>
          <button onClick={movePlayer("target1", 5)}>5</button>
          <button onClick={movePlayer("target1", 6)}>6</button>
          <button onClick={movePlayer("target1", 7)}>7</button>
          <button onClick={movePlayer("target1", 8)}>8</button>
          <button onClick={movePlayer("target1", 9)}>9</button>
          <button onClick={movePlayer("target1", 10)}>10</button>
          <button onClick={movePlayer("target1", 11)}>11</button>
          <button onClick={movePlayer("target1", 12)}>12</button>
          {playerPosition.target1.box}
        </div>
        <div className="box-row">
          <label className="label-game">player2:</label>
          <button onClick={movePlayer("target2", 1)}>1</button>
          <button onClick={movePlayer("target2", 2)}>2</button>
          <button onClick={movePlayer("target2", 3)}>3</button>
          <button onClick={movePlayer("target2", 4)}>4</button>
          <button onClick={movePlayer("target2", 5)}>5</button>
          <button onClick={movePlayer("target2", 6)}>6</button>
          <button onClick={movePlayer("target2", 7)}>7</button>
          <button onClick={movePlayer("target2", 8)}>8</button>
          <button onClick={movePlayer("target2", 9)}>9</button>
          <button onClick={movePlayer("target2", 10)}>10</button>
          <button onClick={movePlayer("target2", 11)}>11</button>
          <button onClick={movePlayer("target2", 12)}>12</button>
          {playerPosition.target2.box}
        </div>
        <div className="box-row">
          <label className="label-game">player3:</label>
          <button onClick={movePlayer("target3", 1)}>1</button>
          <button onClick={movePlayer("target3", 2)}>2</button>
          <button onClick={movePlayer("target3", 3)}>3</button>
          <button onClick={movePlayer("target3", 4)}>4</button>
          <button onClick={movePlayer("target3", 5)}>5</button>
          <button onClick={movePlayer("target3", 6)}>6</button>
          <button onClick={movePlayer("target3", 7)}>7</button>
          <button onClick={movePlayer("target3", 8)}>8</button>
          <button onClick={movePlayer("target3", 9)}>9</button>
          <button onClick={movePlayer("target3", 10)}>10</button>
          <button onClick={movePlayer("target3", 11)}>11</button>
          <button onClick={movePlayer("target3", 12)}>12</button>
          {playerPosition.target3.box}
        </div>
        <div className="box-row">
          <label className="label-game">player4:</label>
          <button onClick={movePlayer("target4", 1)}>1</button>
          <button onClick={movePlayer("target4", 2)}>2</button>
          <button onClick={movePlayer("target4", 3)}>3</button>
          <button onClick={movePlayer("target4", 4)}>4</button>
          <button onClick={movePlayer("target4", 5)}>5</button>
          <button onClick={movePlayer("target4", 6)}>6</button>
          <button onClick={movePlayer("target4", 7)}>7</button>
          <button onClick={movePlayer("target4", 8)}>8</button>
          <button onClick={movePlayer("target4", 9)}>9</button>
          <button onClick={movePlayer("target4", 10)}>10</button>
          <button onClick={movePlayer("target4", 11)}>11</button>
          <button onClick={movePlayer("target4", 12)}>12</button>
          {playerPosition.target4.box}
        </div>
      </div>
    </div>
  );
};

export default GameDashBoard;
