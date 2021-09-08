
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPlayerDb, getInfoDb }  from '../../redux/actions'
import displayPlayer from  "./displayPlayer";
//import { Link, useHistory } from 'react-router-dom';
import { Loading } from './../'

function ActionGame() {
const dispatch = useDispatch();
/* const [input, setInput] = useState(''); */

useEffect(() => {   
  dispatch(getPlayerDb())
  },[dispatch]);
  
const players  = useSelector((state) => state.reducerInfo);  
  if(players){
    console.log('players en player.jsx',players.players)
  }else{
    console.log('no entra la data')
  }
 return (
   <div>
    <div>
    {players?.players?.map((users) =>{
      return <displayPlayer users={users}/>
         })}
   </div>
   </div>
  
 )
}

export default ActionGame;