
import React from "react";
import "./GameDashBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { changeValueTarget } from "./../../redux/actions";
import { gameActionsBoard } from "../playerProps/switchBoxBoard";//

const GameDashBoard = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.reducerInfo.infoGame);
  const cardReducer = useSelector((state) => state.reducerInfo.info);
  let myArr;
  /**
   *
   * @param {number} positionDices1 numero de la posición segun dados
   * @param {array} arr son las cartas del tablero que estan en info
   * @returns
   */
  const findIdCard = (positionDices1, arr) => {
    let aux = arr.table.filter(e => e.id === positionDices1)
    //console.log('AUXXXXXXXX', arr)
    return aux;
  }
  const { playerPosition } = useSelector((state) => state.game);
  const movePlayer = (player) => {
    return () => {
      let num = Math.floor(Math.random() * 6 + 2);
      //console.log("log del random GameDashBoard   " + num);
      switch (player) {
        case "target1":
          if (playerPosition.target1.box + num < 40) {
            dispatch(
              changeValueTarget(player, "box", playerPosition.target1.box + num)
            )
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
  // const compra = (player) => {
  //   myArr = findIdCard(playerPosition.target1.box, cardReducer)
  //   console.log('findthe card with position', myArr[0].type, myArr[0].licenseValue)
  //   console.log('tipo de propiedaddddddddddddd', myArr[0].type, "aca es comprar")
  //   gameActionsBoard(players[0].resultNewGame.PlayerData.target1, 'comprar', myArr[0].type, myArr)
  //   console.log('playerrrr',players[0].resultNewGame.PlayerData.target1)
  // }

  const vender = (player) => {
    myArr = findIdCard(playerPosition.target1.box, cardReducer)
    // console.log('findthe card with position', myArr[0].type, myArr[0].licenseValue)
    // console.log('tipo de propiedaddddddddddddd', myArr[0].type, "aca es vernder")
    // console.log('playerrrr',players[0].resultNewGame.PlayerData.target1)
     gameActionsBoard(players[0].resultNewGame.PlayerData.target1, 'vender', myArr[0].type, myArr)
  }
/*   const vender1 = () => {
    dispatch(
      changeValueTarget(players[0].resultNewGame.PlayerData.target1,"box", playerPosition.target2.box + 10)
    );
  } */
  // const hardcodeo = (player) => {
  //   myArr = findIdCard(playerPosition.target1.box, cardReducer);
  //   console.log("findthe card with position",myArr[0].type,myArr[0].licenseValue);
  //   gameActionsBoard(players[0].resultNewGame.PlayerData.target1,"comprar", myArr[0].type,myArr);
  //   console.log("111111111kjsnjsdajnsadjnsdjkjsdjakds", gameActionsBoard(players[0].resultNewGame.PlayerData.target1,"comprar",myArr.type,myArr));
  // };

  return (
    <div className="body-dashboard box-row no-select">
      <div className="body-dashboard-table box-column">
        <div className="box-row">
          <label className="label-game">player1:</label>
          <button className='roll-button' onClick={movePlayer("target1")}>Roll</button>
           {/* <button onClick={compra}> comprar</button> */}
          <button className='roll-button' onClick={vender}> vender</button>
         {/*   <button onClick={vender1}> AAAAAAAAAAAAAAAAAAAAAAAA</button> */}
         {playerPosition.target1.box}

        </div>
        <div className="box-row">
          <label className="label-game">player2:</label>
          <button className='roll-button' onClick={movePlayer("target2")}>Roll</button>
          {playerPosition.target2.box}
        </div>
        <div className="box-row">
          <label className="label-game">player3:</label>
          <button className='roll-button' onClick={movePlayer("target3")}>Roll</button>
          {playerPosition.target3.box}
        </div>
        <div className="box-row">
          <label className="label-game">player4:</label>
          <button className='roll-button' onClick={movePlayer("target4")}>Roll</button>
          {playerPosition.target4.box}
        </div>
      </div>
    </div>
  );
};

export default GameDashBoard;
