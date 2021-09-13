import React from 'react';
import './RailwayCard.css';

const RailwayCard = ({data}) => {
    return (
        <div className='railway-background-initial'>
            <div className ="RailwayCard-background-no-repeat">
                <h3 className = "RailwayCard-h3">{data.name}</h3>
                <div className= "RailwayCard-div">
                <span className = "card-span-bold"> Checkpoint: {data.takeCheckpoint}$</span>
                <span className = "card-span-bold">Dos checkpoint: {data.twoCheckpoint}$</span>
                <span className = "card-span-bold" >Tres checkpoint: {data.threeCheckpoint}$</span>
                <span className = "card-span-bold">Cuatro checkpoint: {data.fourCheckpoint}$</span>
                <span className = "card-span-bold"> Valor de compra: {data.takeCheckpoint}$</span>
            
                </div>
            </div>
        </div>
    )
}
export default RailwayCard;