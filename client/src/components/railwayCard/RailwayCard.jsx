import React from 'react';

const LuckyCard = ({data}) => {
    console.log("DATA",data[0].name)
    return (
        <div className='railway-background-initial'>
            <div className ="railway-background">
                <h3 className = "railway-h3">{data[0].name}</h3>
                <span>{data[0].description}</span>
            </div>
        </div>
    )
}
export default LuckyCard;