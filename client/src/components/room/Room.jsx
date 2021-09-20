import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setGame, setGameStatus } from "./../../redux/actions";
import "./Room.css";

const Room = () => {
  const dispatch = useDispatch();
  const { socket, user } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.henropolyGame);
  const [statusRoom, setStatusRoom] = useState({
    room: { host: user.username, players: [] },
  });
  const [input, setInput] = useState({
    unirse: "",
  });

  useEffect(() => {
    socket.on("roomStatus", (data) => {
      if (data.status === "inHold") {
        setStatusRoom({ ...statusRoom, room: data.room });
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
    <div className="room-dashboard-total">
      {status === "free" && (
        <div className="room-dashboard-box">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="room-dashboard-form"
              name="unirse"
              value={input.unirse}
              onChange={(e) => handleChange(e)}
            />
            <button className="button-unirse">Unirse</button>
          </form>
          <div>
            <button className="button-two" onClick={setRoom({ type: "create" })}>Crear sala</button>
            <button className="button-jugar">Jugar</button>
          </div>
        </div>
      )}
      {status === "inHold" && (
        <div className='room-total'>
          <div className='room-sala'>
          Anfitrion de sala: {statusRoom.room.host}
          </div>
          <div className='room-miembro'></div>
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
              <button className="button-three" onClick={setRoom({ type: "delete" })}>Borrar Sala</button>
              {statusRoom.room.players.length !== 0 && (
                <button className="button-four" onClick={setRoom({ type: "goGame" })}>
                  Iniciar Juego
                </button>
              )}
            </div>
          ) : (
            <div>
              <button className="button-leave" onClick={setRoom({ type: "leaveRoom" })}>
                Abandonar sala
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Room;
