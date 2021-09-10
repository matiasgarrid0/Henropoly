import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions";
import './playerProps.css'

function PlayerProps(idsala) {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.reducerInfo.infoGame);
  const base1 = players[0].resultNewGame.PlayerData.target1;
  const base2 = players[0].resultNewGame.PlayerData.target2;
  const base3 = players[0].resultNewGame.PlayerData.target3;
  const base4 = players[0].resultNewGame.PlayerData.target4;
  console.log(players);

  return (
    <div>
      {players[0] === undefined ? (
        <div>
          {/* { <span>{players.userNewGame}  </span>*/}
          ......... LOADING
        </div>
      ) : (
        <div>
          {" "}
          <div className="playerProps-box">
          <label>Players 1: </label>
          <span>{base1.username} </span> 
          <span>{base1.henryCoins} </span>
          <span>{base1.properties.length >0? base1.properties.map((e)=> e) :<div>no tenes propis</div> } </span> 
          <span>{base1.cards.length > 0 ? base1.cards.map((e)=> e): <div>Aún no tenés cartas </div>} </span>
          </div>
          <div className="playerProps-box"> 
          <label>Players 2: </label>
          <span>{base2.username} </span>
          <span>{base2.henryCoins} </span>
          <span>{base2.properties.length > 0 ? base2.properties.map((e)=> e) : <div>Aún no tenés propiedades</div>} </span>
          <span>{base2.cards.length > 0 ? base2.cards.map((e)=> e): <div>Aún no tenés cartas</div>} </span>
          </div>               
          <div className="playerProps-box"> 
          <label>Players 3: </label>        
          <span>{base3.username} </span>       
          <span>{base3.henryCoins} </span>
          <span>{base3.properties.length > 0 ? base3.properties.map((e)=> <div>e</div>) : <div>Aún no tenés propiedades</div>} </span>
          <span>{base3.cards.length > 0 ? base3.cards.map((e)=> e): <div>Aún no tenés cartas</div>} </span>
          </div>
          <div className="playerProps-box">
          <label>Player 4: </label>
          <span>{base4.username} </span>
          <span>{base4.henryCoins} </span>
          <span>{base4.properties.length >0? base4.properties.map((e)=> e) :<div>Aún no tenés propiedades</div> } </span> 
          <span>{base4.cards.length > 0 ? base4.cards.map((e)=> e): <div>Aún no tenés cartas </div>} </span>
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
