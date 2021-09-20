import React from 'react';
import ToniJail from '../board/img/toniPreso.png'
import ToniPolice from '../board/img/Toni_police.png'
import ToniVacations from '../board/img/Toni_vacaciones.png'
import './Jail.css';

const Jail = ({data}) => {
    console.log('jai',data)
    if(data.type === "jail"){
        return (
            <div className='card-jail-divtotal' >
                <div>
                    <h3 className="Jail-Title" >Migración</h3>
                    <img src={ToniJail} alt="Girl in a jacket" width="300" height="300"/>
                </div>
            </div>
        )
    }else if (data.type === 'goJail'){
        return (
            <div className='card-jail-divtotal' >
                <div>
                    <h3 className="GoJail-Title" >Caiste en migración</h3>
                    <img src={ToniPolice} alt="Girl in a jacket" width="300" height="300"/>
                </div>
            </div>
        )
    }else{
        return (
            <div className='card-jail-divtotal' >
                <div>
                    <h3 className="GoJail-Title" >Henry Feriado</h3>
                    <img src={ToniVacations} alt="Girl in a jacket" width="300" height="300"/>
                    <span className='card-henryferiado-span'>Hora de descansar</span>
                </div>
            </div>
        )
    }
}
export default Jail;