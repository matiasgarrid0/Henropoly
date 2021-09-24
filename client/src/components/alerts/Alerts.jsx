import React from 'react';
import './Alerts.css';
import Coin from './Henrycoin-player.png'
const Alerts = ({data}) => {
    console.log("infoooooooooooooooooooooooooooooooooooo",data)
    return (
        <div className='luckyCard-background-initial-no-repeat'>
            <div className ="luckyCard-background-no-repeat">
                <span className="luckycard-card-span-bold">{data}</span>
                <img src={Coin}/>
            </div>
        </div>
    )
}
export default Alerts;