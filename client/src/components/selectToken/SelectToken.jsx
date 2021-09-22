import React from 'react';
import './SelecToken.css'
import Antoni from './antoni.jpg'
import Camilo from './camilo.jpg'
import Diego from './diego.jpg'
import Franco from './franco.jpg'
import Martu from './martu.jpg'
import Mati from './mati.jpg'
import Sele from './sele.jpg'
import Toni from './toni.jpg'
const fotis = [Antoni, Camilo, Diego, Franco, Martu, Mati, Sele, Toni]
 const CreateToken = () => {
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
export default CreateToken