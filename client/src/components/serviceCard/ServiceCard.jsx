import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({data}) => {
    return (
        <div>
            <div className ='serviceCard-background-no-repeat'>
                <h3 className="serviceCard-h3">{data.name}</h3>
                <span>Valor de la licencia:{data.licenseValue}$</span>
                <div>
                <button>Comprar</button>
                <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard;

