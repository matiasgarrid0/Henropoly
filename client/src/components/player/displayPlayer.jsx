import React from 'react'
import '../../index.css'

export const Player = ({users}) => {
    const {henrycoin} = users;
   
    return (
            <div className="card"> 
               <div>
                    <h3>Brand: <span className='span'>{henrycoin}</span> </h3>
               </div>
            </div>
    )
}
 export default Player;