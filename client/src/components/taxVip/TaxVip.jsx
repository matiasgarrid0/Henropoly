import React from 'react';
import './TaxVip.css';


const TaxVip = ({data}) => {
    return (
        <div className='railway-background-initial'>
            <div className ="RailwayCard-background-no-repeat">
                <h3 className = "RailwayCard-h3">Tax</h3>
                <span className = "card-span-bold">Se te cobrará $400</span>
            </div>
        </div>
    )
}
export default TaxVip;