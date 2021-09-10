import React from 'react';
import './LuckyCard.css';

const LuckyCard = (data) => {
    console.log(data)
    return (
        <div>
            <div className ="cnt">
                <h3 className = "h1">{data.name}</h3>
                <span></span>
            </div>
        </div>
    )
}
export default Card;