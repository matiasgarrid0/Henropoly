import React from 'react';
import { useSelector } from "react-redux";
import ToniJail from '../board/img/toniPreso.png'
import ToniPolice from '../board/img/Toni_police.png'
import ToniVacations from '../board/img/Toni_vacaciones.png'
import './Jail.css';
//
const Jail = ({ data, username, buy }) => {
    const { user } = useSelector((state) => state.auth);
    if (data.type === "jail") {
        return (
            <div className='card-jail-divtotal' >
                <div>
                    <h3 className="Jail-Title" >Migración</h3>
                    <img className='jail-portal-image' src={ToniJail} alt="Girl in a jacket" width="300" height="300" />
                    {/* <div className='jail-text-card'>
                        <div className='jail-spans-text'>
                            <span>Se te ofrece pagar una multa por ÚNICA vez en tu temporal estadía. </span>
                            <span>La multa vale: ${data.licenseValue} HenryCoins, ¿la pagas?</span>
                        </div>
                        {username === user.username && (
                            <button className="servicecard-button" onClick={buy}>
                                Pagar
                            </button>
                        )}
                    </div> */}
                    <span className='jailtext-span-one'>Se te ofrece pagar una multa por ÚNICA vez en tu temporal estadía.</span>
                    <span className='jailtext-span-two'>La multa vale: $500 HenryCoins, ¿la pagas?</span>
                    <div>
                    {username === user.username && (
                            <button className="servicecard-button-jail" onClick={buy}>
                                Pagar
                            </button>
                        )}
                        </div>
                </div>
            </div>
        )
    } else if (data.type === 'goJail') {
        return (
            <div className='card-jail-divtotal' >
                <div>
                    <h3 className="GoJail-Title" >Caiste en migración</h3>
                    <img src={ToniPolice} alt="Girl in a jacket" width="300" height="300" />
                </div>
            </div>
        )
    } else {
        return (
            <div className='card-jail-divtotal' >
                <div>
                    <h3 className="GoJail-Title" >Henry Feriado</h3>
                    <img src={ToniVacations} alt="Girl in a jacket" width="450" height="300" />
                    <span className='card-henryferiado-span'>Hora de descansar</span>
                </div>
            </div>
        )
    }
}
export default Jail;