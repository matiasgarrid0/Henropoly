import React from "react";
import { useSelector } from "react-redux";
/* import { register } from "../../redux/actions"; */
import Action from "./switchBoxBoard";
import './playerProps.css'

// PlayerProps({idsala, target1, target2, target3, target4})
function PlayerProps({action}) {
  // const dispatch = useDispatch();
  const players = useSelector((state) => state.henropolyGame);
  const table = useSelector((state) => state.reducerInfo.info);
  // let playerRedux = useSelector((state) => state.game.playerPosition)

  return (
    <div>
      {/* {players[0] === undefined ? (
        <div>
          ......... LOADING
        </div>
      ) : ( */}
        <div className='playerProps-box-big'>
          <div className="playerProps-box" onClick={action(true, 'target1')}>
            <label className='playerProps-label-player'>Player 1: </label>
            <span>{players.dataPlayers.target1.username} </span>
            <label className='playerProps-label'>HenryCoins: </label>
            <span>{players.dataPlayers.target1.henryCoins} </span>
            {/* <label className='playerProps-label'> Tecnologías: </label>
            <span>{
              players.table.map((e) => {
                if (e.username === players.dataPlayers.target1.username && e.type === "property") {
                  return `${table[e.ID].name}`
                } else {
                  <div>Aún no tenés propiedades</div>
                }
              })}
            </span>
            <label className='playerProps-label'> Cartas: </label>
            <span>{players.dataPlayers.target1.cards.length > 0 ? players.dataPlayers.target1.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
            <label className='playerProps-label'> Posición: </label>
            <span>{target1}</span> */}
          </div>

          <div className="playerProps-box" onClick={action(true, 'target2')}>
            <label className='playerProps-label-player'>Player 2: </label>
            <span>{players.dataPlayers.target2.username} </span>
            <label className='playerProps-label'>HenryCoins: </label>
            <span>{players.dataPlayers.target2.henryCoins} </span>
            {/* <label className='playerProps-label'> Tecnologías: </label>
            <span>{
              players.table.map((e) => {
                if (e.username === players.dataPlayers.target2.username && e.type === "property") {
                  return `${table[e.ID].name}`
                } else {
                  <div>Aún no tenés propiedades</div>
                }
              })}
            </span>
            <label className='playerProps-label'> Cartas: </label>
            <span>{players.dataPlayers.target2.cards.length > 0 ? players.dataPlayers.target2.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
            <label className='playerProps-label'> Posición: </label>
            <span>{target2}</span> */}
          </div>

          <div className="playerProps-box" onClick={action(true, 'target3')}>
            <label className='playerProps-label-player'>Player 3: </label>
            <span>{players.dataPlayers.target3.username} </span>
            <label className='playerProps-label'>HenryCoins: </label>
            <span>{players.dataPlayers.target3.henryCoins} </span>
            {/* <label className='playerProps-label'> Tecnologías: </label>
            <span>{
              players.table.map((e) => {
                if (e.username === players.dataPlayers.target.username && e.type === "property") {
                  return `${table[e.ID].name}`
                } else {
                  <div>Aún no tenés propiedades</div>
                }
              })}
            </span>
            <label className='playerProps-label'> Cartas: </label>
            <span>{players.dataPlayers.target3.cards.length > 0 ? players.dataPlayers.target3.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
            <label className='playerProps-label'> Posición: </label>
            <span>{target3}</span> */}
          </div>

          <div className="playerProps-box" onClick={action(true, 'target4')}>
            <label className='playerProps-label-player'>Player 4: </label>
            <span>{players.dataPlayers.target4.username} </span>
            <label className='playerProps-label'>HenryCoins: </label>
            <span>{players.dataPlayers.target4.henryCoins} </span>
            {/* <label className='playerProps-label'> Tecnologías: </label>
            <span>{
              players.table.map((e) => {
                if (e.username === players.dataPlayers.target4.username && e.type === "property") {
                  return `${table[e.ID].name}`
                } else {
                  <div>Aún no tenés propiedades</div>
                }
              })}
            </span>
            <label className='playerProps-label'> Cartas: </label>
            <span>{players.dataPlayers.target4.cards.length > 0 ? players.dataPlayers.target4.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
            <label className='playerProps-label'> Posición: </label>
            <span>{target4}</span> */}
          </div>
        </div>
      {/* )} */}
      <Action players={players} />

    </div>
  );
}

export default PlayerProps;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
