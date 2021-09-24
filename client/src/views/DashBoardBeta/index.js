import React from "react";
import Tutorial from "../Tutorial";
import { useSelector, useDispatch} from "react-redux";
import { Room, DisplayGameBeta, Chat } from "./../../components";
import {setGameStatus} from '../../redux/actions'
import "./DashBoardBeta.css";

const DashBoardBeta = () => {
  const dispatch = useDispatch()
 
const changeStatusWinyLos = (data) => {
 dispatch(setGameStatus(data))
}
  const { status } = useSelector((state) => state.henropolyGame);
  if (status === "perdedor") {
    return (
     
      <div className="beta-space-game color-blanco">
        <div className="asd"></div>
        <div className="asd"></div>
        <div className="beta-box-game psico-killer-wave centrar-winner">
          <span className='winner-display-title'>PERDISTE</span>
          <span className='winner-display-span'>Más suerte la próxima, volvé a intentarlo</span>
          <button className='propertycard-button' onClick= {() =>changeStatusWinyLos('free')}>volver a inicio</button>
        </div>
      </div>
    );
  }
  if (status === "ganador") {
    return (
     
      <div className="beta-space-game color-blanco">
        <div className="asd"></div>
        <div className="asd"></div>
        <div className="beta-box-game psico-killer-wave centrar-winner">
          <span className='winner-display-title'>GANASTE!!!</span>
          <span className='winner-display-span'>Ahora sos Full-Stack web developer</span>
          <button className='propertycard-button' onClick={ () => changeStatusWinyLos('free')} >volver a inicio</button>
        </div>
      </div>
    );
  }
  if (status === "inGame") {
    return (
     
      <div className="beta-space-game color-blanco">
        <div className="beta-box-game">
          <DisplayGameBeta />
        </div>
      </div>
    );
  }
    return (
      <div className="dashBoard-beta-margin">
        <div className="asd"></div>
        <div className="asd"></div>
        <div className="asd"></div>
        <div className="repeat-total">
          <div className='dashboardbeta-toturial'> 
            <Tutorial />
          </div>
          <div className='dashboard-room'>
            <Room />
          </div>
          <div className='dashboardbeta-chat'>
            <Chat />
          </div>
        </div>
      </div>
    );
  
};
export default DashBoardBeta;