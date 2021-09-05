import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Chat } from './Chat';


export const Prueba = () => {
    const [nombre, setNombre] = useState("");
    const [registrado, setRegistrado] = useState(false);

    const registrar = (e) => {
        e.preventDefault();
        if (nombre !== "") {
            setRegistrado(true);
        }
    };

    console.log(nombre)
    return (
        <div className='box-column'>
            <div className='espacio-one'>
                <h1>asdasd</h1>
                {!registrado && (
                    <form onSubmit={registrar}>
                        <label htmlFor="">Introduzca su nombre</label>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <Link to="/chat">
                            <button>Ir al chat</button>
                        </Link>
                    </form>
                )}

                {registrado && <Chat nombre={nombre} />}
            </div>
        </div>
    );
}