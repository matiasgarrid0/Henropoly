import React from 'react';
import './LuckyCard.css';

const LuckyCard = ({data}) => {
    console.log("DATA",data[0].name)
    return (
        <div className='luckyCard-background-initial-no-repeat'>
            <div className ="luckyCard-background-no-repeat">
                <h3 className = "luckyCard-h3">{data[0].name}</h3>
                <span>{data[0].description}</span>
            </div>
        </div>
    )
}
export default LuckyCard;