import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ChatGame.css";
import { GrSend } from "react-icons/gr";
import { HiChatAlt, HiOutlineMinusSm } from "react-icons/hi";

const ChatGame = () => {
    const { socket } = useSelector((state) => state.auth);
    const [minimizar, setMinimizar] = useState(true);
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);
    const submit = (e) => {
        e.preventDefault();
        socket.emit(`sendGlobal`, { message: mensaje });
        setMensaje("");
    };
    useEffect(() => {
        socket.on(`chatGlobal`, (msj) => {
            setMensajes([...mensajes, msj]);
        });
        return () => {
            socket.off("chatGlobal");
        };
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [mensajes]);
    if (minimizar) {
        return (
            <button
                className="chatgame-btn"
                onClick={() => {
                    setMinimizar(false);
                }}
            >
                <HiChatAlt className="chatgame-icon" />
            </button>
        );
    }
    return (
        <div className="chatgame-div-minor">
            <div className="chatgame-div-btn-icon">
                <div className="chatgame-iconthree">
                    <HiOutlineMinusSm
                        className="chatgame-icontwo"
                        onClick={() => {
                            setMinimizar(true);
                        }}
                    />
                </div>
            </div>
            <div className='chatgame-div-box'>
                <div className="chatgame-title">chat general</div>
                <div className="chatgame-chat-container">
                    {mensajes.map((e, i) => (
                        <div key={i}>
                            <div className="chatgame-chat-username">{e.username}</div>
                            <div className="chatgame-chat-message">{e.message}</div>
                        </div>
                    ))}
                </div>
                <form className="chatgame-chat-center" onSubmit={submit}>
                    <label className="chatgame-chat-flex" htmlFor=""></label>
                    <input
                        className="chatgame-chat-textarea"
                        placeholder="Escriba su mensaje"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    ></input>
                    <button className="chatgame-chat-btn-enviar" type="submit">
                        <GrSend className="chatgame-icon-chat" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatGame;