import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import './dashboard.css'
import { postPlayer } from '../../redux/actions';
import { IoIosArrowForward } from "react-icons/io";

const DashBoard = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    let [input, setInput] = useState({
        playerOne: '',
        playerTwo: '',
        playerThree: '',
        playerFour: ''
    })
    const { user } = useSelector((state) => state.auth);

    
   

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    
        
    function handleSubmit(e) { 
        e.preventDefault();
        const send = {
            ID: '1',
            players: [
                { ID: "1", username: input.playerOne },
                { ID: "2", username: input.playerTwo },
                { ID: "3", username: input.playerThree },
                { ID: "4", username: input.playerFour }
            ]
        }
        console.log(send)
        dispatch(postPlayer(send))        
        history.push('/game')
    }

    /**
     * {
    "ID": "1",
    "players": [
        {"ID": "1", "username":"flor"}, 
        {"ID": "2", "username":"3"}, 
        {"ID": null, "username":"3"}, 
        {"ID": null, "username":"3"}
        ]
}
     */

    return (
        <div className='dashboard-todo'>
            <div className='dashboard-hijo'>
                <div className='asd'> </div>
                <div className='position'>
                    <div className='total'>
                        <h3 className='h3-total'> ¡JUEGA!</h3>
                        <h4>CÓMO JUGAR A HENROPOLY</h4>
                        Muévete entre casillas comprando las tecnologías. Cuantas más poseas, más dinero podrás recibir del resto de jugadores. Si el resto de jugadores caen en bancarota, ¡ganas!.
                        <h4>¿QUIÉN EMPIEZA A JUGAR EN EL HENROPOLY?</h4>
                        El primer jugador en mover su pieza será seleccionado al azar al comiendo de cada partida
                        <h4>QUÉ HACER EN TU TURNO</h4>
                        Tirar los dados te hará avanzar en el tablero.
                        ¿Dónde has caído? Cómprala o paga impuestos al propietario.
                        ¿Has sacado dobles? Tienes otra tirada.
                        ¡OJO! Si sacas 3 veces seguidas, ¡debes ir a la cárcel! No completes tu tercer turno.
                        Finalizar tu turno hará que no puedas hacer cambios, PIENSALO BIEN.
                    </div>
                    <div className='contSalyImg'>
                        <div className='crearSala'>
                            <h3 className='text-hov'>crear sala</h3>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <label>Player 1</label>
                                <input
                                    type='text'
                                    name='playerOne'
                                    value={input.playerOne}
                                    onChange={e => handleChange(e)}
                                    placeholder='name player'
                                />
                                <label>Player 2</label>
                                <input
                                    type='text'
                                    name='playerTwo'
                                    value={input.playerTwo}
                                    onChange={e => handleChange(e)}
                                    placeholder='name player'
                                />
                                <label>Player 3</label>
                                <input
                                    type='text'
                                    name='playerThree'
                                    value={input.playerThree}
                                    onChange={e => handleChange(e)}
                                    placeholder='name player'
                                />
                                <label>Player 4</label>
                                <input
                                    type='text'
                                    name='playerFour'
                                    value={input.playerFour}
                                    onChange={e => handleChange(e)}
                                    placeholder='name player'
                                />
                                <button type="submit" >Enviar </button>
                            </form>
                            <h3 className='text-hov'>Unirse a sala</h3>
                        </div>
                        <div className='conimg'>
                            <img className='imgn' src='https://cdn-pro.elsalvador.com/wp-content/uploads/2020/07/Ramon-Valdes.jpg' alt="Don Ramón"/>
                        </div>
                    </div>
                    <div className='ranking'>
                        <h3>Mas partidas ganadas</h3>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U020K03EUHG-f49f0477ebe4-512' alt='img' />
                            <h4 className='dashboard-h4'>senjo903</h4>
                            <div className='dashboard-pepito'> <span className='number'>10</span></div>
                        </div>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U01RENRHB6K-19d480373bd1-512' alt='img' />
                            <h4 className='dashboard-h4'>FacuRearte</h4>
                            <div className='dashboard-pepito'> <span className='number'>7</span></div>
                        </div>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U02046U590X-519f10bc999e-512' alt='img' />
                            <h4 className='dashboard-h4'>AlanGiavino</h4>
                            <div className='dashboard-pepito'> <span className='number'>5</span></div>
                        </div>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U01UZGHU3J8-8209681533eb-512' alt='img' />
                            <h4 className='dashboard-h4'>MatiGarrido</h4>
                            <div className='dashboard-pepito'> <span className='number'>4</span></div>
                        </div>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U01T4MPG0BF-eadd1fea01c5-512' alt='img' />
                            <h4 className='dashboard-h4'>Sebi_elmejor</h4>
                            <div className='dashboard-pepito'> <span className='number'>3</span></div>
                        </div>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U01V60B1T9P-0f495ba2e434-512' alt='img' />
                            <h4 className='dashboard-h4'>Moniss_94</h4>
                            <div className='dashboard-pepito'> <span className='number'>2</span></div>
                        </div>
                        <div className='person'>
                            <img src='https://ca.slack-edge.com/TPRS7H4PN-U01RUQXGKD0-67b4aeef2acb-512' alt='img' />
                            <h4 className='dashboard-h4'>FlorHQ_92</h4>
                            <div className='dashboard-pepito'> <span className='number'>1</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default DashBoard;