import React,{useState} from 'react';
import Card from '../card/Card';
import './Trade.css';

const Trade = (player) => {

    const [state,setState] = useState("")

    function handleOnChange(e){
        setState({ value: e.target.value })
    }

    return (
        <div>
            <div className="pading">
                <div>Elegir jugador y ver sus cartas (Proximo DLC )</div>
                <input type="range" min={0} max={player.trade.henrycoin} value={state.value} className="slider" onChange={(e) => handleOnChange(e)} />
                <div className="value">{state.value}</div>
                <button>Enviar dinero</button>
            </div>
        </div>
    )
}
export default Trade;