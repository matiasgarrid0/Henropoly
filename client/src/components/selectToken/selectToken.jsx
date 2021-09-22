import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getToken} from '../../redux/actions'
import './SelectToken.css'
import Antoni from './antoni.jpeg'
import Camilo from './camilo.jpeg'
import Diego from './diego.jpeg'
import Franco from './franco.jpeg'
import Martu from './martu.jpeg'
import Mati from './mati.jpeg'
import Sele from './sele.jpeg'
import Toni from './toni.jpeg'
//import { useState } from 'react';

const fotis = [Antoni, Camilo, Diego, Franco, Martu, Mati, Sele, Toni]

const SelectToken = () => {
    
const dispatch = useDispatch();    
const { socket } = useSelector((state) => state.auth);
const [tokensToPlayer, setTokensToplayers] = useState(null)


useEffect(() => {
    socket.on("roomStatus", (data) => {
      if (data.status === "savedToken") {
         // console.log(data)
         setTokensToplayers({...tokensToPlayer, data})
         // dispatch(getToken(data))
      }
    });
    return () => {
      socket.off('roomStatus');
    };
  }, []);

  const sendToken = (data) => {
      console.log(data)
      socket.emit("setRoom", data);
  };
    return (
        <div className='selecttoken-first-div'>
            <label className='selecttoken-label'>Selecciona tu token</label>
            <div className='selecttoken-second-div'>
                <div onClick={()=>{sendToken({ type: "sendToken", img:fotis[0]})}}><img className='selecttoken-img' src={fotis[0]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[1]})}}><img className='selecttoken-img' src={fotis[1]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[2]})}}><img className='selecttoken-img' src={fotis[2]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[3]})}}><img className='selecttoken-img' src={fotis[3]} width='70' width='70'/></div>
            </div>
            <div className='selecttoken-second-div'>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[4]})}}><img className='selecttoken-img' src={fotis[4]} width='70' width='70'/></div>
                <div onClick={()=>{sendToken({ type: "sendToken", img:fotis[5]})}}><img className='selecttoken-img' src={fotis[5]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[6]})}}><img className='selecttoken-img' src={fotis[6]} width='70' width='70'/></div>
                <div  onClick={()=>{sendToken({ type: "sendToken", img:fotis[7]})}}><img className='selecttoken-img' src={fotis[7]} width='70' width='70'/></div>
            </div>

          
        </div>
    )
}
export default SelectToken