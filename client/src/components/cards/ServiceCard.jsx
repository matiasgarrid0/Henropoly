import React from 'react';
import './ServiceCard.css';
import { FcWiFiLogo,FcIdea } from "react-icons/fc";

const ServiceCard = ({data}) => {
    return (
        <div>
            <div className ='serviceCard-background-no-repeat'>
                <h3 className="serviceCard-h3">{data.name}</h3>
                <span>Valor de la licencia:{data.licenseValue}$</span>
            </div>
        </div>
    )
}
export default ServiceCard;

