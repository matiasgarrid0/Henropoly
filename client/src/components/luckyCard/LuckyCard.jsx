import React from 'react';
import './LuckyCard.css';

const LuckyCard = ({data}) => {
    console.log("DATA",data[0].name)
    return (
        <div>
            <div className ="cnt">
                <h3 className = "h1">{data[0].name}</h3>
                <span>{data[0].description}</span>
            </div>
        </div>
    )
}
export default LuckyCard;