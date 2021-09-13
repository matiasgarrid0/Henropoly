import React from 'react';
import ToniPolice from './img/Toni_police.png';
import ToniJail from './img/toniPreso.png';
import './Jail.css';


const Jail = () => {
    return (
        <div className='railway-background-initial'>
            <div className ="RailwayCard-background-no-repeat">
                <h3 className = "RailwayCard-h3">Migracion</h3>
                <img src={ToniJail} alt="Girl in a jacket" width="500" height="600"/>
            </div>
        </div>
    )
}
export default Jail;