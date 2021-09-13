import React from 'react';
import ToniJail from '../board/img/toniPreso.png'
import ToniPolice from '../board/img/Toni_police.png'
import './Jail.css';

const Jail = ({data}) => {
    if(data.type === "jail"){
        return (
            <div >
                <div>
                    <h3 className="Jail-Title" >Migracion</h3>
                    <img src={ToniJail} alt="Girl in a jacket" width="400" height="350"/>
                </div>
            </div>
        )
    }else{
        return (
            <div >
                <div>
                    <h3 className="GoJail-Title" >Caiste en migración</h3>
                    <img src={ToniPolice} alt="Girl in a jacket" width="400" height="350"/>
                </div>
            </div>
        )
    }
}
export default Jail;