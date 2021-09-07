
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
  
const infoPlayer = useSelector((state) => state.players);  
console.log('ssddfsffddffgfgfgfgfgf',infoPlayer)

 return (
   <div>
    <div>
    {/* {infoPlayer.map((user) =>{
      return <displayPlayer user={user}/>
         })} */}
   </div>
   </div>
  
 )
}

export default ActionGame;