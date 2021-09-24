import React from 'react';
import './Alerts.css';
// import coinss from './coinss.png'
const Alerts = ({data}) => {
   // console.log("infoooooooooooooooooooooooooooooooooooo",data)
    return (
        <div className='luckyCard-background-initial-no-repeat centrar-alert-div'>
            <div className ="luckyCard-background-no-repeat">
                <span className="luckycard-card-span-bold">{data}</span>
                <div>
               
                {/* <img src={require(`./coinss.png`)} width='50'/> </div> */}
                {/* <img src={require(`./coinss.png`)} width='50'/>  */}
                </div>
            </div>
        </div>
    )
}
export default Alerts;