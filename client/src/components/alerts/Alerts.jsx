import React from 'react';
import './Alerts.css';
const Alerts = ({data}) => {
    return (
        <div className='luckyCard-background-initial-no-repeat centrar-alert-div'>
            <div className ="luckyCard-background-no-repeat">
                <span className="luckycard-card-span-bold">{data}</span>
            </div>
        </div>
    )
}
export default Alerts;