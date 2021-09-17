import React from "react";
import { useSelector } from "react-redux";
/* import { register } from "../../redux/actions"; */
import Action from "./switchBoxBoard";
import './playerProps.css'

// PlayerProps({idsala, target1, target2, target3, target4})
function PlayerProps({ target1, target2, target3, target4 }) {
  // const dispatch = useDispatch();
  const players = useSelector((state) => state.henropolyGame);
  // let playerRedux = useSelector((state) => state.game.playerPosition)
  // console.log(players.table[31])
  // console.log(table)

  return (
    <div>
      <div className='playerProps-box-big'>
        <div className="playerProps-box">
          <label className='playerProps-label-player'>Player 1: </label>
          <span>{players.dataPlayers.target1.username} </span>
          <label className='playerProps-label'>HenryCoins: </label>
          <span>{players.dataPlayers.target1.henryCoin} </span>
          <label className='playerProps-label'> Tecnologías: </label>
          <span>{
            players.table.map((e) =>  {
              if (e.owner === players.dataPlayers.target1.username && (e.type === "property" || e.type === "service" || e.type === "railway")) {
                return `${players.table[e.id].name}` +  " "
              } else {
              <div>Aún no tenés propiedades</div>
              }
            })}
          </span>
          <label className='playerProps-label'> Cartas: </label>
          <span>{players.dataPlayers.target1.cards.length > 0 ? players.dataPlayers.target1.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
          <label className='playerProps-label'> Posición: </label>
          <span>{target1}</span>
        </div>
        {/*|||||||||||||||||||||||||||||||||||||||||||||| PLAYER 2 |||||||||||||||||||||||||||||||||||||||||||||||| */}
        <div className="playerProps-box">
          <label className='playerProps-label-player'>Player 2: </label>
          <span>{players.dataPlayers.target2.username} </span>
          <label className='playerProps-label'>HenryCoins: </label>
          <span>{players.dataPlayers.target2.henryCoin} </span>
          <label className='playerProps-label'> Tecnologías: </label>
          <span>{
            players.table.map((e) => {
              if (e.owner === players.dataPlayers.target2.username && e.type === "property") {
                return `${players.table[e.id].name}` + " "
              } else {
                <div>Aún no tenés propiedades</div>
              }
            })}
          </span>
          <label className='playerProps-label'> Cartas: </label>
          <span>{players.dataPlayers.target2.cards.length > 0 ? players.dataPlayers.target2.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
          <label className='playerProps-label'> Posición: </label>
          <span>{target2}</span>
        </div>
{/*|||||||||||||||||||||||||||||||||||||||||||||| PLAYER 3 |||||||||||||||||||||||||||||||||||||||||||||||| */}
        {players.order.length > 2 &&
          <div className="playerProps-box">
            <label className='playerProps-label-player'>Player 3: </label>
            <span>{players.dataPlayers.target3.username} </span>
            <label className='playerProps-label'>HenryCoins: </label>
            <span>{players.dataPlayers.target3.henryCoin} </span>
            <label className='playerProps-label'> Tecnologías: </label>
            <span>{
              players.table.map((e) => {
                if (e.owner === players.dataPlayers.target3.username && e.type === "property") {
                  return `${players.table[e.id].name}` + " "
                } else {
                  <div>Aún no tenés propiedades</div>
                }
              })}
            </span>
            <label className='playerProps-label'> Cartas: </label>
            <span>{players.dataPlayers.target3.cards.length > 0 ? players.dataPlayers.target3.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
            <label className='playerProps-label'> Posición: </label>
            <span>{target3}</span>
          </div>
        }
{/*|||||||||||||||||||||||||||||||||||||||||||||| PLAYER 4 |||||||||||||||||||||||||||||||||||||||||||||||| */}
        {players.order.length > 3 &&
          <div className="playerProps-box">
            <label className='playerProps-label-player'>Player 4: </label>
            <span>{players.dataPlayers.target4.username} </span>
            <label className='playerProps-label'>HenryCoins: </label>
            <span>{players.dataPlayers.target4.henryCoin} </span>
            <label className='playerProps-label'> Tecnologías: </label>
            <span>{
              players.table.map((e) => {
                if (e.owner === players.dataPlayers.target4.username && e.type === "property") {
                  return `${players.table[e.id].name}` + " "
                } else {
                  <div>Aún no tenés propiedades</div>
                }
              })}
            </span>
            <label className='playerProps-label'> Cartas: </label>
            <span>{players.dataPlayers.target4.cards.length > 0 ? players.dataPlayers.target4.cards.map((e) => e.description) : <div>Aún no tenés cartas</div>}</span>
            <label className='playerProps-label'> Posición: </label>
            <span>{target4}</span>
          </div>
        }
      </div>
      {/* )} */}
      <Action players={players} />

    </div>
  );
}

export default PlayerProps;

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
