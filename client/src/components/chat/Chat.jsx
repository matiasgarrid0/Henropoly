import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BiSend } from "react-icons/bi";
import "./Chat.css";

const Chat = ({ room }) => {
  const { isAuth, socket } = useSelector((state) => state.auth);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.on(`chatGlobal`, (msj) => {
      setMensajes([...mensajes, msj]);
    });
    return () => {
      socket.off('chatGlobal');
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  },[mensajes])
  const submit = (e) => {
    e.preventDefault();
    socket.emit(`sendGlobal`, { message: mensaje });
    setMensaje("");
  };

  return (
    <div className="chat-padre">
      {isAuth ? (
        <div className="chat-cuadro-general">
          <h1 className="chat-h1">chat general</h1>
          <div className="chat-container">
            {mensajes.map((e, i) => (
              <div key={i}>
                <div className="chat-username">{e.username}</div>
                <div className="chat-message">{e.message}</div>
              </div>
            ))}
          </div>
          <form className="chat-center" onSubmit={submit}>
            <label className="chat-flex" htmlFor=""></label>
            <input
              className="chat-textarea"
              placeholder="Escriba su mensaje"
              name=""
              id=""
              cols="30"
              rows="10"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></input>
            <button className="chat-btn-enviar chat-btn-verde" type="submit">
              <BiSend />
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Chat;
