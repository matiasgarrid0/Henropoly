import React, { useState } from 'react';
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
const [tokensToPlayer, setTokensToplayers] = useState([])

  const pushToken = (token)=> {
    setTokensToplayers([ ...tokensToPlayer,token])
  }


    return (
        <div className='selecttoken-first-div'>
            <label className='selecttoken-label'>Selecciona tu token</label>
            <div className='selecttoken-second-div'>
                <div onClick={() =>{socket.emit("TradeDashboard", { type: "buyService", box: dataPlayers[player].box })}}><img className='selecttoken-img' src={fotis[0]} width='70' width='70'/></div>
                <div  onClick={() => pushToken(fotis[1])}><img className='selecttoken-img' src={fotis[1]} width='70' width='70'/></div>
                <div  onClick={() => pushToken(fotis[2])}><img className='selecttoken-img' src={fotis[2]} width='70' width='70'/></div>
                <div  onClick={() => pushToken(fotis[3])}><img className='selecttoken-img' src={fotis[3]} width='70' width='70'/></div>
            </div>
            <div className='selecttoken-second-div'>
                <div  onClick={() => pushToken(fotis[4])}><img className='selecttoken-img' src={fotis[4]} width='70' width='70'/></div>
                <div onClick={() => pushToken(fotis[5])}><img className='selecttoken-img' src={fotis[5]} width='70' width='70'/></div>
                <div  onClick={() => pushToken(fotis[6])}><img className='selecttoken-img' src={fotis[6]} width='70' width='70'/></div>
                <div  onClick={() => pushToken(fotis[7])}><img className='selecttoken-img' src={fotis[7]} width='70' width='70'/></div>
            </div>
        </div>
    )
}
export default SelectToken