import React from 'react';
import { useSelector } from "react-redux";
import './ServiceCard.css';
import { FcWiFiLogo,FcIdea } from "react-icons/fc";

const ServiceCard = ({data, username, buy}) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div>
            <div className ='serviceCard-background-no-repeat'>
                <h3 className="serviceCard-h3">{data.name}</h3>
                <span>Valor de la licencia:{data.licenseValue}$</span>
            </div>
            {username === user.username && <button onClick={buy}>comprar</button>}
        </div>
    )
}
export default ServiceCard;

