import React,{useState} from "react";
import {  useSelector } from "react-redux";
/* import { register } from "../../redux/actions"; */
import Action from "./switchBoxBoard";
import './playerProps.css'




// PlayerProps({idsala, target1, target2, target3, target4})
function PlayerProps({target1, target2, target3, target4}) {
  // const dispatch = useDispatch();
  const players = useSelector((state) => state.henropolyGame);
  const [data , setData] = useState(null)
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
          <label className='playerProps-label-player'>Player 1: </label>
          <span>{ players.dataPlayers.target1.username} </span> 
          <label className='playerProps-label'>HenryCoins: </label>
          <span>{ players.dataPlayers.target1.henryCoins} </span>
          <label className='playerProps-label'> Tecnologías: </label>
          <span>{ players.table.filter((e)=> e.username === players.dataPlayers.target1.username) :<div>Aún no tenés propiedades</div> } </span> 
          <label className='playerProps-label'> Cartas: </label>
          <span>{ players[0].resultNewGame.PlayerData.target1.cards.length > 0 ?  players[0].resultNewGame.PlayerData.target1.cards.map((e)=> e[0].name): <div>Aún no tenés cartas </div>} </span>
          <label className='playerProps-label'> Posición: </label>
         <span>{target1}</span>
       </div>

        <div className="playerProps-box"> 
          <label className='playerProps-label-player'>Player 2: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.username} </span>
          <label className='playerProps-label'>HenryCoins: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.henryCoins} </span>
          <label className='playerProps-label'> Tecnologías: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.properties.length > 0 ? players[0].resultNewGame.PlayerData.target2.properties.map((e)=> e) : <div>Aún no tenés propiedades</div>} </span>
          <label className='playerProps-label'> Cartas: </label>
          <span>{players[0].resultNewGame.PlayerData.target2.cards.length > 0 ? players[0].resultNewGame.PlayerData.target2.cards.map((e)=> e): <div>Aún no tenés cartas</div>} </span>
          <label className='playerProps-label'> Posición: </label>
          <span>{target2}</span> 
        </div>  

         <div className="playerProps-box"> 
          <label className='playerProps-label-player'>Player 3: </label>        
          <span>{ players[0].resultNewGame.PlayerData.target3.username} </span>
          <label className='playerProps-label'>HenryCoins: </label>       
          <span>{ players[0].resultNewGame.PlayerData.target3.henryCoins} </span> 
          <label className='playerProps-label'> Tecnologías: </label>
          <span>{ players[0].resultNewGame.PlayerData.target3.properties.length > 0 ? players[0].resultNewGame.PlayerData.target3.properties.map((e)=> <div>e</div>) : <div>Aún no tenés propiedades</div>} </span>
          <label className='playerProps-label'> Cartas: </label>
          <span>{ players[0].resultNewGame.PlayerData.target3.cards.length > 0 ?  players[0].resultNewGame.PlayerData.target3.cards.map((e)=> e): <div>Aún no tenés cartas</div>} </span>
          <label className='playerProps-label'> Posición: </label>
          <span>{target3}</span> 
       </div>

        <div className="playerProps-box">
          <label className='playerProps-label-player'>Player 4: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.username} </span>
          <label className='playerProps-label'>HenryCoins: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.henryCoins} </span>
          <label className='playerProps-label'> Tecnologías: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.properties.length >0? players[0].resultNewGame.PlayerData.target4.properties.map((e)=> e) :<div>Aún no tenés propiedades</div> } </span> 
          <label className='playerProps-label'> Cartas: </label>
          <span>{players[0].resultNewGame.PlayerData.target4.length > 0 ? players[0].resultNewGame.PlayerData.target4.cards.map((e)=> e): <div>Aún no tenés cartas </div>} </span>
          <label className='playerProps-label'> Posición: </label>
          <span>{target4}</span> 
        </div>
        </div>
      )}
      <Action players = {players}/>
     
    </div>
  );
}

export default PlayerProps;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
