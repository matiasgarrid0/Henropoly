import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getToken, setGame, setGameStatus } from "./../../redux/actions";
import "./Room.css";
import '../selectToken/SelectToken.css'
import Antoni from '../selectToken/antoni.jpeg'
import Camilo from '../selectToken/camilo.jpeg'
import Diego from '../selectToken/diego.jpeg'
import Franco from '../selectToken/franco.jpeg'
import Martu from '../selectToken/martu.jpeg'
import Mati from '../selectToken/mati.jpeg'
import Sele from '../selectToken/sele.jpeg'
import Toni from '../selectToken/toni.jpeg'


const fotis = [Antoni, Camilo, Diego, Franco, Martu, Mati, Sele, Toni]


const Room = () => {
  const dispatch = useDispatch();
  const { socket, user } = useSelector((state) => state.auth);
  const { status, tokensDataPlayers} = useSelector((state) => state.henropolyGame);
  
    

  const [statusRoom, setStatusRoom] = useState({
    room: { host: user.username, players: []},
  });
  const [input, setInput] = useState({
    unirse: "",
  });
  useEffect(() => {
    socket.on("roomStatus", (data) => {
      if (data.status === "inHold") {
        setStatusRoom({ ...statusRoom, room: data.room });
        dispatch(getToken(data.room))
        dispatch(setGameStatus("inHold"))
      }
      if (data.status === "free") {
        setStatusRoom({
          ...statusRoom,
          room: { host: user.username, players: [] }
        });
        dispatch(setGameStatus("free"))
      }
      if (data.status === "inGame") {
        console.log(data.data)
        dispatch(setGame(data.data));
       }
      if (data.status === "savedToken") {
        console.log(data)
       // setStatusRoom({...statusRoom, room:data.room})
        // dispatch(getToken(data))
     }
    });
    return () => {
      socket.off('roomStatus');
    };
  });

  const setRoom = (data) => {
    return () => {
      socket.emit("setRoom", data);
    };
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("setRoom", { type: "join", host: input.unirse });
  };
  const sendToken = (data) => {
    console.log(data)
    socket.emit("setRoom", data);
};
  return (
    <div>
      {status === "free" && (
        <div className="room-dashboard-box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="room-dashboard-form"
              name="unirse"
              value={input.unirse}
              onChange={(e) => handleChange(e)}
            />
            <button className="button-two">Unirse a sala</button>
          </form>
          <button className="button-two" onClick={setRoom({ type: "create" })}>Crear sala</button>
          <button className="button-two">Jugar</button>
        </div>
      )}
      {status === "inHold" && (
        <div className='room-total'>
          Anfitrion de sala: {statusRoom.room.host}
          <div></div>
          Miembros: {statusRoom.room.players.map((player) => {
            return (
            
              <label>
                {player}
                {statusRoom.room.host === user.username && (
                  <button
                  className="button-expulsar" onClick={setRoom({ type: "kickPlayer", player: player })}
                  >
                    expulsar jugador
                  </button>

                )}                 
                
              </label>
          
              
            );
          })}
          {statusRoom.room.host === user.username ? (
            <div className="room-buttoner">
              <button className="button-three" onClick={setRoom({ type: "delete" })}>borrar sala</button>
              {statusRoom.room.players.length !== 0 && (
                <button className="button-three" onClick={setRoom({ type: "goGame" })}>
                  Iniciar Juego
                </button>
              )}
           {/*   { tokensDataPlayers === [] ? 
                 <span>porfis elegi un toquens</span> : <span>{tokensDataPlayers.tokens1.owner}</span>}   */}
            </div>//Chauchis
          ) : (
            <button className="button-leave" onClick={setRoom({ type: "leaveRoom" })}>
              Abandonar sala
            </button>
          )}
          
       <div> 
       <div className='selecttoken-first-div colorsitos'>
            <label className='selecttoken-label'>Selecciona tu token</label>
            <div className='selecttoken-second-div'>
                <div onClick={()=>{sendToken({ type: "sendToken", img:fotis[0]})}}><img className='selecttoken-img' src={fotis[0]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[1]})}}><img className='selecttoken-img' src={fotis[1]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[2]})}}><img className='selecttoken-img' src={fotis[2]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[3]})}}><img className='selecttoken-img' src={fotis[3]} width='70' width='70'/></div>
            </div>
            <div className='selecttoken-second-div'>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[4]})}}><img className='selecttoken-img' src={fotis[4]} width='70' width='70'/></div>
                <div onClick={()=>{sendToken({ type: "sendToken", img:fotis[5]})}}><img className='selecttoken-img' src={fotis[5]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[6]})}}><img className='selecttoken-img' src={fotis[6]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[7]})}}><img className='selecttoken-img' src={fotis[7]} width='70' width='70'/></div>
            </div>

          
        </div>
          </div>  
             <span>PLAYER UNO: 
                 { statusRoom.room.tokens1? 
                <img src ={statusRoom.room.tokens1.token} width='70'/> : <p>porfis elegi un tokensito</p>}
               </span>
            {statusRoom.room.players[0] ?
             <span>PLAYER DOS:
           { statusRoom.room.tokens2.token === '' ? 
                <p>porfis elegi un tokensito</p> : <img src ={statusRoom.room.tokens2.token} width='70'/>}
            </span> 
           : <> </> }
           {statusRoom.room.players[1]?
             <span>PLAYER  TRES:   
           { statusRoom.room.tokens3.token === '' ?
               <p>porfis elegi un tokensito</p> : <img src ={statusRoom.room.tokens3.token} width='70'/>}
            </span> 
           : <></> }
           {statusRoom.room.players[2]?
             <span>PLAYER CUATROCHI:   
           { statusRoom.room.tokens4.token === ''? 
               <p>porfis elegi un tokensito</p> : <img src ={statusRoom.room.tokens4.token} width='70'/>}
            </span> 
           : <> </> }
        </div>
      )}
     
    </div>
  );
};

export default Room;
