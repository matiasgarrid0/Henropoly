import React from 'react';
import './LuckyCard.css';

const LuckyCard = ({data}) => {
    return (
        <div className='luckyCard-background-initial-no-repeat'>
            <div className ="luckyCard-background-no-repeat">
                <h3 className = "luckyCard-h3">{data[0].name ? data[0].name : 'Tu carta'}</h3>
                <span className = "luckycard-card-span-bold">{data[0].description}</span>
            </div>
        </div>
    )
}
export default LuckyCard;