import React from 'react';
import './SelectToken.css'
import Antoni from './antoni.jpeg'
import Camilo from './camilo.jpeg'
import Diego from './diego.jpeg'
import Franco from './franco.jpeg'
import Martu from './martu.jpeg'
import Mati from './mati.jpeg'
import Sele from './sele.jpeg'
import Toni from './toni.jpeg'

const fotis = [Antoni, Camilo, Diego, Franco, Martu, Mati, Sele, Toni]
 const SelectToken = () => {
    return (
        <div className='selecttoken-first-div'>
            <label className='selecttoken-label'>Selecciona tu token</label>
            <div className='selecttoken-second-div'>
                <div><img className='selecttoken-img' src={fotis[0]} width='70' width='70'/></div>
                <div><img className='selecttoken-img' src={fotis[1]} width='70' width='70'/></div>
                <div><img className='selecttoken-img' src={fotis[2]} width='70' width='70'/></div>
                <div><img className='selecttoken-img' src={fotis[3]} width='70' width='70'/></div>
            </div>
            <div className='selecttoken-second-div'>
                <div><img className='selecttoken-img' src={fotis[4]} width='70' width='70'/></div>
                <div><img className='selecttoken-img' src={fotis[5]} width='70' width='70'/></div>
                <div><img className='selecttoken-img' src={fotis[6]} width='70' width='70'/></div>
                <div><img className='selecttoken-img' src={fotis[7]} width='70' width='70'/></div>
            </div>
        </div>
    )
}
export default SelectToken