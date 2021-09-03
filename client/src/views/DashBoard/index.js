import React from 'react';
import { useSelector } from "react-redux";
import './dashboard.css'
import { IoIosArrowForward } from "react-icons/io";

const DashBoard = () => {
    const { user } = useSelector((state) => state.auth);

    return(
    <div >
        <div className='asd'> </div>
      
        <div className='position'>
        <div className='total'>
           <h3> ¡JUEGA!</h3>
<h4>CÓMO JUGAR A HENROPOLY</h4>
Muévete alrededor del tablero comprando tantas tecnologías como puedas. Cuantas más poseas, más dinero podrás recibir del resto de jugadores. Si eres el último jugador que queda cuando el resto de jugadores están en bancarrota, ¡ganas el juego!
<h4>¿QUIÉN EMPIEZA A JUGAR EN EL HENROPOLY?</h4>
El primer jugador en mover su pieza será seleccionado al azar al comiendo de cada partida 
<h4>QUÉ HACER EN TU TURNO</h4>
Tirar los dados hará avanzará tu pieza por el tablero
¿Dónde has caído? Haz lo que indique la casilla depende de ello para saber cómo continuar
¿Has sacado dobles? Vuelve a tirar los dados y juega de nuevo.
¡OJO! Si sacas 3 veces seguidas, ¡debes ir a la cárcel! No completes tu tercer turno.
Finalizar tu turno hará que no puedas hacer cambios PIENSALO BIEN
	</div>
<div className='contSalyImg'>
<div className='crearSala'> 
    <h3 className='text-hov'>crear sala</h3>
    <h3 className='text-hov'>unirse a sala</h3>    
</div>
  <div className='conimg'>
    <img className='imgn' src='https://cdn-pro.elsalvador.com/wp-content/uploads/2020/07/Ramon-Valdes.jpg'/>
 </div>
 </div>
</div>
    </div>)
}
export default DashBoard;