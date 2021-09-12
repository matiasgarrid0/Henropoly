import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import io from "socket.io-client"
const socketURL = process.env.URL_SOCKET || "//localhost:3001";

const Chat = ({room}) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const socket = io(socketURL);

  socket.on(`chat${room}`, (msj) => {
    setMensajes([...mensajes, msj]);
  });
  const submit = (e) => {
    e.preventDefault();
    socket.emit(`send${room}`, { username: user.username, message: mensaje });
    setMensaje("");
  };

  return (
    <>
      {isAuth ? (
        <div>
          <h1>chat general:</h1>
          <div className="chat">
            {mensajes.map((e, i) => (
              <div key={i}>
                <div>{e.username}</div>
                <div>{e.message}</div>
              </div>
            ))}
          </div>
          <form onSubmit={submit}>
            <label htmlFor="">Escriba su mensaje</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Chat;
