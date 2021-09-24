import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGame, setGameStatus } from "./../../redux/actions";
import { FaArrowAltCircleDown } from "react-icons/fa";

import "./Room.css";

const Room = () => {
  const dispatch = useDispatch();
  const { socket, user } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.henropolyGame);
  const [statusRoom, setStatusRoom] = useState({
    room: {
      host: user.username,
      players: [],
      tokens: [],
    },
  });
  const [input, setInput] = useState({
    unirse: "",
  });

  useEffect(() => {
    socket.on("roomStatus", (data) => {
      if (data.status === "inHold") {
        setStatusRoom({ ...statusRoom, room: data.room });
        dispatch(setGameStatus("inHold"));
      }
      if (data.status === "free") {
        setStatusRoom({
          ...statusRoom,
          room: {
            host: user.username,
            players: [],
            tokens: [],
          },
        });
        dispatch(setGameStatus("free"));
      }
      if (data.status === "inGame") {
        dispatch(setGame(data.data));
      }
    });
    return () => {
      socket.off("roomStatus");
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
    <div>
      {status === "free" && (
        <div className="room-dashboard-box">
           <button className="button-two" onClick={setRoom({ type: "create" })}>
              Crear sala
            </button>
          <div>
            <p className='room-p-description'>Si creas una sala, la misma llevara tu nombre de usuario</p>
            <p className='room-p-description'>Para ingresar a una sala coloca el nombre del host de la sala aquí:</p>
            <FaArrowAltCircleDown className='room-card-icon' />
          </div>
          <div className='room-div-input'>
            <form onSubmit={(e) => handleSubmit(e)}>  
              <input
                className="room-dashboard-form"
                name="unirse"
                value={input.unirse}
                onChange={(e) => handleChange(e)}
              />
              <button className="button-two">Unirse a sala</button>
            </form>
           
          </div>
        </div>
      )}
      {status === "inHold" && (
        <div className="room-total box-column">
          <div className='room-anfitrion-div'>Anfitrion de sala: <span className='room-host-span'>{statusRoom.room.host}</span></div>
          <div className='room-miembros-div-sala'>
            <div>
              <span className='room-miembros-span-sala'>Miembros:{" "}</span>
            </div>
            <div >
              {statusRoom.room.players.map((player) => {
                return (
                  <div className='room-miembros-div'>
                    <span className='room-player-span'>{player}</span>
                    {statusRoom.room.host === user.username && (
                      <button
                        className="button-expulsar"
                        onClick={setRoom({ type: "kickPlayer", player: player })}
                      >
                        expulsar
                      </button>
                    )}
                  </div>
                );
              })}
              </div>
          </div>
          <div className="room-table-tokens">
            {statusRoom.room.tokens === undefined ? <> </>:statusRoom.room.tokens.map((avatar) => {
              return (
                <div key={avatar.id} className="room-relative">
                  <div>
                    <img
                      onClick={setRoom({
                        type: "selectAvatar",
                        host: statusRoom.room.host,
                        user: user.username,
                        id: avatar.id,
                      })}
                      className={
                        avatar.owner === null
                          ? "room-token"
                          : "room-token-ocupado"
                      }
                      src={require(`./img/${avatar.img}`).default}
                      alt={`${avatar.name}`}
                    />
                    {avatar.owner !== null && (
                      <label className="room-ocupado">ocupado</label>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {statusRoom.room.host === user.username ? (
            <div className="room-buttoner">
              <button
                className="button-three"
                onClick={setRoom({ type: "delete" })}
              >
                borrar sala
              </button>
              <div className="room-space"></div>
              {statusRoom.room.players.length !== 0 &&
              statusRoom.room.tokens.filter((avatar) => avatar.owner !== null)
                .length +
                1 !==
                statusRoom.room.players.length + 1 ? (
                <div>
                  <button
                    className="button-three"
                    onClick={setRoom({ type: "goGame" })}
                  >
                    Iniciar Juego
                  </button>
                </div>
              ) : (
                <button className="button-four">Iniciar Juego</button>
              )}
            </div>
          ) : (
            <button
              className="button-leave"
              onClick={setRoom({ type: "leaveRoom" })}
            >
              Abandonar sala
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Room;
