import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setGame } from "./../../redux/actions";
import "./Room.css";

const Room = () => {
  const dispatch = useDispatch();
  const { socket, user } = useSelector((state) => state.auth);
  const [statusRoom, setStatusRoom] = useState({
    status: null,
    room: { host: user.username, players: [] },
  });
  const [input, setInput] = useState({
    unirse: "",
  });
  
  useEffect(() => {
    socket.on("roomStatus", (data) => {
      if (data.status === "inHold") {
        setStatusRoom({ ...statusRoom, room: data.room, status: "inHold" });
      }
      if (data.status === "free") {
        setStatusRoom({
          ...statusRoom,
          room: { host: user.username, players: [] },
          status: "free",
        });
      }
      if (data.status === "inGame") {
        dispatch(setGame(data.data));
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
  return (
    <div className='room-background'>
      {statusRoom.status === "free" && (
        <>
          <button className='room-btn' onClick={setRoom({ type: "create" })}>Crear sala</button>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className='room-searchBar'
              name="unirse"
              value={input.unirse}
              onChange={(e) => handleChange(e)}
            />
            <button className='room-btn'>Unirse a sala</button>
          </form>

          <button className='room-btn'>Jugar</button>
        </>
      )}
      {statusRoom.status === "inHold" && (
        <div>
          anfitrion de sala: {statusRoom.room.host}
          mienbros:
          {statusRoom.room.players.map((player) => {
            return (
              <label>
                {player}
                {statusRoom.room.host === user.username && (
                  <button
                    className='room-btn'
                    onClick={setRoom({ type: "kickPlayer", player: player })}
                  >
                    expulsar jugador
                  </button>
                )}
              </label>
            );
          })}
          {statusRoom.room.host === user.username ? (
            <>
              <button className='room-btn' onClick={setRoom({ type: "delete" })}>borrar sala</button>
              {statusRoom.room.players.length !== 0 && (
                <button onClick={setRoom({ type: "goGame" })}>
                  Iniciar Juego
                </button>
              )}
            </>
          ) : (
            <button onClick={setRoom({ type: "leaveRoom" })}>
              abandonar sala
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Room;
