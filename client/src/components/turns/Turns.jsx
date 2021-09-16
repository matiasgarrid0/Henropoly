import { useSelector } from "react-redux";
import React, {useEffect, useState } from 'react';
import './Turns.css';

const Turns = ({timeOn}) => {
  const { socket } = useSelector((state) => state.auth);
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    socket.on("timer", (data) => {
      setSegundos(data)
    });
    return () => {
      socket.off("timer");
    };
  }, []);
    const {order } = useSelector(
        (state) => state.henropolyGame
      );
    return (<div className='turns-table'>
      timer:{timeOn}
        Turno Actual:
        <label>{segundos}</label>
        Orden:
        {order.map((player) => {
          return <label>{player}</label>;
        })}
    </div>)
}
export default Turns;