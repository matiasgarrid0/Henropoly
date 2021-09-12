import React from 'react';
import './TaxCard.css';

const RailwayCard = ({data}) => {
    return (
        <div className='railway-background-initial'>
            <div className ="RailwayCard-background-no-repeat">
                <h3 className = "RailwayCard-h3">Tax</h3>
                <span className = "card-span-bold">Se te cobrará $20</span>
                <div>
                    <button>Comprar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
export default RailwayCard;