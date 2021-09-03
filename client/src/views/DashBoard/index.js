import React from 'react';
import { useSelector } from "react-redux";
import './dashboard.css'


const DashBoard = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div >
            <div className='asd'> </div>

            <div className='position'>
                <div className='total'>
                    <h3> ¡JUEGA!</h3>
                    <h4>CÓMO JUGAR A HENROPOLY</h4>
                    Muévete alrededor del tablero comprando tantas tecnologías como puedas. Cuantas más poseas, más dinero podrás recibir del resto de jugadores. Si eres el último jugador que queda cuando el resto de jugadores están en bancarrota, ¡ganas el juego!
                    <h4>¿QUIÉN EMPIEZA A JUGAR EN EL HENROPOLY?</h4>
                    El primer jugador en mover su pieza será seleccionado al azar al comienzo de cada partida
                    <h4>QUÉ HACER EN TU TURNO</h4>
                    Tirar los dados hará avanzar tu pieza por el tablero.
                    ¿Dónde has caído? Haz lo que indique la casilla, dependes de ello para saber cómo continuar
                    ¿Has sacado dobles? Vuelve a tirar los dados y juega de nuevo.
                    ¡OJO! Si sacas 3 veces seguidas, ¡debes ir a la cárcel! No completes tu tercer turno.
                    Finalizar tu turno hará que no puedas hacer cambios PIENSALO BIEN
                </div>

                <div className='crearSala'>
                    <h3>crear sala</h3>
                    <h3>unirse a sala</h3>
                </div>

                <div className='ranking'>
                    <h3>Mejores jugadores</h3>
                    <h1>senjo903</h1>
                    <img src='https://ca.slack-edge.com/TPRS7H4PN-U020K03EUHG-f49f0477ebe4-512' alt='img'/>
                    <h1>FacuRearte</h1>
                    <img src='https://ca.slack-edge.com/TPRS7H4PN-U01RENRHB6K-19d480373bd1-512' alt='img'/>
                    <h1>AlanGiavino</h1>
                    <img src='https://ca.slack-edge.com/TPRS7H4PN-U02046U590X-519f10bc999e-512' alt='img'/>
                </div>
            </div>
        </div>)
}
export default DashBoard;