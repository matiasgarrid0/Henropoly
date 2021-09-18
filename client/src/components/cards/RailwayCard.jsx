import React from 'react';
import { useSelector } from "react-redux";
import './RailwayCard.css';

const RailwayCard = ({ data, username, buy }) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <div className='railway-background-initial'>
            <div className="RailwayCard-background-no-repeat">
                <h3 className="RailwayCard-h3">{data.name}</h3>
                <div className="RailwayCard-div">
                    <span className="card-span-bold"> Checkpoint:{data.takeCheckpoint}$</span>
                    <span className="card-span-bold">Dos checkpoint:{data.twoCheckpoint}$</span>
                    <span className="card-span-bold" >Tres checkpoint:{data.threeCheckpoint}$</span>
                    <span className="card-span-bold">Cuatro checkpoint:{data.fourCheckpoint}$</span>
                </div>
                {username === user.username && <button onClick={buy}>comprar</button>}
            </div>
        </div>
    )
}
export default RailwayCard;