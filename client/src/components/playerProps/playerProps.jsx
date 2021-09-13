import React from "react";
import {  useSelector } from "react-redux";
/* import { register } from "../../redux/actions"; */
import Action from "./switchBoxBoard";
import './playerProps.css'




// PlayerProps({idsala, target1, target2, target3, target4})
function PlayerProps({target1, target2, target3, target4}) {
  // const dispatch = useDispatch();
  const players = useSelector((state) => state.reducerInfo.infoGame);
  // let playerRedux = useSelector((state) => state.game.playerPosition)




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
          <span>{ players[0].resultNewGame.PlayerData.target1.properties.length >0?  players[0].resultNewGame.PlayerData.target1.properties.map((e)=> e[0].name) :<div>Aún no tenés propiedades</div> } </span> 
          <label> Cartas: </label>
          <span>{ players[0].resultNewGame.PlayerData.target1.cards.length > 0 ?  players[0].resultNewGame.PlayerData.target1.cards.map((e)=> e[0].name): <div>Aún no tenés cartas </div>} </span>
          <label> Posicion: </label>
         <span>{target1 } </span> 
          
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
          <label> Posicion: </label>
          <span>{target2 } </span> 
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
          <label> Posicion: </label>
          <span>{target3 } </span> 
       </div>

        <div className="playerProps-box">
          <label>Player 4: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.username} </span>
          <label>HenryCoins: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.henryCoins} </span>
          <label> Tecnologias: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.properties.length >0? players[0].resultNewGame.PlayerData.target4.properties.map((e)=> e) :<div>Aún no tenés propiedades</div> } </span> 
          <label> Cartas: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.length > 0 ? players[0].resultNewGame.PlayerData.target4.cards.map((e)=> e): <div>Aún no tenés cartas </div>} </span>
          <label> Posicion: </label>
          <span>{target4 } </span> 
        </div>
        </div>
      )}
      <Action players = {players}/>
     
    </div>
  );
}

export default PlayerProps;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
