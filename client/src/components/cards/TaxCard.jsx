import React from 'react';
import './TaxCard.css';

const TaxCard = ({data}) => {
    if(data.type === "tax"){
        return (
            <div className='railway-background-initial'>
                <div className ="RailwayCard-background-no-repeat">
                    <h3 className = "taxCard-h3">Impuesto</h3>
                    <span className = "card-span-bold">Se te cobrará $200</span>
                </div>
            </div>
        )
    }else{
        return (
            <div className='railway-background-initial'>
                <div className ="RailwayCard-background-no-repeat">
                    <h3 className = "taxCard-h3">Impuesto-Vip</h3>
                    <span className = "card-span-bold">Se te cobrará $400</span>
                </div>
            </div>
        )
    }
}
export default TaxCard;