import React from 'react';
import { useSelector } from "react-redux";
import './RailwayCard.css';
import Modulo from './img/modulo.png'

const RailwayCard = ({ data, username, buy, henryCoin }) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='railway-background-initial'>
            <div className="RailwayCard-background-no-repeat">
                <h3 className="RailwayCard-h3">{data.name}</h3>
                <div className="RailwayCard-div">
                    <span className="card-span-bold"> Checkpoint:{data.takeCheckpoint}$</span>
                    <img className='card-railway-img' src={Modulo} width='90'/>
                    {/* <span className="card-span-bold">Dos checkpoint:{data.twoCheckpoint}$</span>
                    <span className="card-span-bold" >Tres checkpoint:{data.threeCheckpoint}$</span>
                    <span className="card-span-bold">Cuatro checkpoint:{data.fourCheckpoint}$</span> */}
                </div>
                {username === user.username && henryCoin >= data.licenseValue ? <button className='railway-button' onClick={buy}>comprar</button> : <span>No posee fondos</span>}
            </div>
        </div>
    )
}
export default RailwayCard;