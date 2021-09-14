import { useSelector } from "react-redux";
import React from 'react';
import './Turns.css';

const Turns = () => {
    const {order, actualTurn } = useSelector(
        (state) => state.henropolyGame
      );

    return (<div className='turns-table'>
        Turno Actual:
        <label>{actualTurn}</label>
        Orden:
        {order.map((player) => {
          return <label>{player}</label>;
        })}
    </div>)
}
export default Turns;