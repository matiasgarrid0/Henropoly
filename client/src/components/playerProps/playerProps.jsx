import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { register } from "../../redux/actions"; */
import './playerProps.css'

function PlayerProps(idsala) {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.reducerInfo.infoGame);
 /* let a;
  if(!players[0] === undefined) {
    return a = {
  base1 : players[0].resultNewGame.PlayerData.target1,
  base2 :players[0].resultNewGame.PlayerData.target2,
  base3 : players[0].resultNewGame.PlayerData.target3,
  base4 : players[0].resultNewGame.PlayerData.target4 
}
} */
  return (
    <div>
      {players[0] === undefined ? (
        <div>

          ......... LOADING
        </div>
      ) : (
        <div className= 'playerProps-box-big'>
       <div className="playerProps-box">
          <label>Players 1: </label>
          <span>{ players[0].resultNewGame.PlayerData.target1.username} </span> 
          <label>HenryCoins: </label>
          <span>{ players[0].resultNewGame.PlayerData.target1.henryCoins} </span>
          <label> Tecnologias: </label>
          <span>{ players[0].resultNewGame.PlayerData.target1.properties.length >0?  players[0].resultNewGame.PlayerData.target1.properties.map((e)=> e) :<div>no tenes propis</div> } </span> 
          <label> Cartas: </label>
          <span>{ players[0].resultNewGame.PlayerData.target1.cards.length > 0 ?  players[0].resultNewGame.PlayerData.target1.cards.map((e)=> e): <div>Aún no tenés cartas </div>} </span>
       </div>

        <div className="playerProps-box"> 
          <label>Players 2: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.username} </span>
          <label>HenryCoins: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.henryCoins} </span>
          <label> Tecnologias: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.properties.length > 0 ? players[0].resultNewGame.PlayerData.target2.properties.map((e)=> e) : <div>Aún no tenés propiedades</div>} </span>
          <label> Cartas: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.cards.length > 0 ? players[0].resultNewGame.PlayerData.target2.cards.map((e)=> e): <div>Aún no tenés cartas</div>} </span>
        </div>  

         <div className="playerProps-box"> 
          <label>Players 3: </label>        
          <span>{ players[0].resultNewGame.PlayerData.target3.username} </span>
          <label>HenryCoins: </label>       
          <span>{ players[0].resultNewGame.PlayerData.target3.henryCoins} </span>
          <label> Tecnologias: </label>
          <span>{ players[0].resultNewGame.PlayerData.target3.properties.length > 0 ? players[0].resultNewGame.PlayerData.target3.properties.map((e)=> <div>e</div>) : <div>Aún no tenés propiedades</div>} </span>
          <label> Cartas: </label>
          <span>{ players[0].resultNewGame.PlayerData.target3.cards.length > 0 ?  players[0].resultNewGame.PlayerData.target3.cards.map((e)=> e): <div>Aún no tenés cartas</div>} </span>
          <label> Color: (por ahoritas) </label>
       </div>

        <div className="playerProps-box">
          <label>Player 4: </label>
          <span>{players[0].resultNewGame.PlayerData.target4 .username} </span>
          <label>HenryCoins: </label>
          <span>{players[0].resultNewGame.PlayerData.target4 .henryCoins} </span>
          <label> Tecnologias: </label>
          <span>{players[0].resultNewGame.PlayerData.target4 .properties.length >0? players[0].resultNewGame.PlayerData.target4 .properties.map((e)=> e) :<div>Aún no tenés propiedades</div> } </span> 
          <label> Cartas: </label>
          <span>{players[0].resultNewGame.PlayerData.target4 .length > 0 ? players[0].resultNewGame.PlayerData.target4 .cards.map((e)=> e): <div>Aún no tenés cartas </div>} </span>
        </div>
        </div>
      )}
    </div>
  );
}

/* resultNewGame:
Bank:
BankHenryCoins: 200000
properties: []
[[Prototype]]: Object
PlayerData:
target1: {ID: "1", username: "JHHHJ", henryCoins: 1500, properties: Array(0), cards: Array(0)}
target2: {ID: "2", username: "HGHH", henryCoins: 1500, properties: Array(0), cards: Array(0)}
target3: {ID: "3", username: "JHJHJJ", henryCoins: 1500, properties: Array(0), cards: Array(0)}
target4: {ID: "4", username: "JHJHJH", henryCoins: 1500, properties: Array(0), cards: Array(0)}
[[Prototype]]: Object
actualTurn: "target1"
order: (4) ["target1", "target3", "target4", "target2"] */

export default PlayerProps;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
