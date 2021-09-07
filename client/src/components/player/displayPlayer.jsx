import React from 'react'
import '../../index.css'

export const Player = ({user}) => {
    const {henrycoin} = user;
    return (
            <div className="card"> 
               <div>
                    <h3>Brand: <span className='span'>{henrycoin}</span> </h3>
               </div>
            </div>
    )
}
 export default Player;