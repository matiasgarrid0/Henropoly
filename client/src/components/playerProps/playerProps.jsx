import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions';



function PlayerProps (idsala, ) {
const dispatch = useDispatch();
const palyers= useSelector((state)=> state.reducerInfo.infoGame[0].resultNewGame.playerData)
  
 return (
      <div>
          
     </div>
 )
}

export default PlayerProps