import React from 'react';
import './TaxCard.css';
import ToniTax from './img/toniImpuestos.png'

const TaxCard = ({data}) => {
    if(data.type === "tax"){
        return (
            <div className='railway-background-initial'>
                <div className ="RailwayCard-background-no-repeat">
                    <h3 className = "taxCard-h3">Impuesto</h3>
                    <span className = "card-span-bold">Se te cobrará $200</span>
                    <img className='card-tax-img' src={ToniTax} width='150' alt='img'/>
                </div>
            </div>
        )
    }else{
        return (
            <div className='railway-background-initial'>
                <div className ="RailwayCard-background-no-repeat">
                    <h3 className = "taxCard-h3">Impuesto-Vip</h3>
                    <span className = "card-span-bold">Se te cobrará $400</span>
                    <img className='card-tax-img' src={ToniTax} width='150' alt='img'/>
                </div>
            </div>
        )
    }
}

export default TaxCard;