import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client"


let socket = io("//localhost:3001");

//reducer auth traer token y enviarlo y reemplazr nombre
export const Chat = ({nombre}) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");
  };

  return (
    <div>
        <h1>SEASDSA</h1>
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div>{e.nombre}</div>
            <div>{e.mensaje}</div>
          </div>
        ))}
        <div ref={divRef}></div>
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
        <button>Enviar</button>
      </form>
    </div>
  );
};

    ///////////CARLITO Bjose
    // let [message, setMessage] = useState("");
    // let [socket, setSocket] = useState(null);
    // let [data, setData] = useState([]);
    
    // const onChangeMessage = (e) => {
    //     setMessage(e.target.value);
    // }
    
    // const ConectarAlChat = () => {
    //     try {
    //         if (!socket) {
    //             let token = localStorage.getItem('access_token');
    //             socket = ClientSocketIO('http://localhost:3001', {
    //                 query: { token },
    //                 secure: true,
    //                 reconnection: true,
    //                 rejectUnauthorized: false,
    //                 reconnectionAttempts: 10,
    //             });
    
    //             socket.on('connect', async () => {
    //                 console.log("te as conectado");
    //             });
    //             socket.on("CHAT", (newdata) => {
    //                 setear(newdata);
    //             });
    //             socket.on('disconnect', async () => {
    //                 console.log("te as desconectado");
    //             });
    //             setSocket(socket);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    
    // const setear = (newdata) => {
    //     setData([...data, newdata]);
    //     console.log(data);
    // }
    
    // const EnviarMensajeChat = async (message) => {
    //     try {
    //         const params = {
    //             UserID: 1,
    //             message: message
    //         }
    //         const response = await axios.post(`http://localhost:3001/test`, params);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    
    // return (
    //     <div >
    //         <div className='espacio-one'></div>
    //         {!socket ? <button onClick={ConectarAlChat}>conectar al chat</button> :
    //             <div>{data?.map((message, i) => {
    //                 return (<><span >{message}</span><br/></>)
    //             })}
    //                 <div><input type="text" onChange={onChangeMessage} value={message} /><button onClick={() => { EnviarMensajeChat(message); }}>enviar mensaje</button></div>
    //             </div>}
    //     </div>
    // );