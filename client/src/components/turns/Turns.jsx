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
/*
import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const myRef = useRef(null);

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
    if(myRef.current) {
      myRef.current.value = 0;
    }
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

function agregaSegundos() {
  let ref = myRef.current.value
  setSegundos(ref)
}

useEffect(() => {
  let intervalo = null;
  if (activo && tipo === 'Contador') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);
  }
  if (activo && tipo === 'Cuenta Regresiva') {
    intervalo = setInterval(() => {
      setSegundos(segundos => segundos - 1);
    }, 1000);
  }
  if (!activo && segundos !== 0 && tipo === 'Contador') {
    clearInterval(intervalo);
  }
  if (segundos === 0 && tipo === 'Cuenta Regresiva') {
    reset();
    clearInterval(intervalo);
  }

  return () => clearInterval(intervalo);
}, [activo, segundos, tipo]);

return (
  <div className="app">
    <div className="time">
      {segundos}s
    </div>
    <div className="row">
      <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} 
      onClick={toggle}>
        {activo ? 'Pausa' : 'Inicio'}
      </button>
      <button className={"button button-reset"} onClick={reset}>
        Reset
      </button>
    </div>
    <button className="button" onClick={cambioTipo}>
        {tipo}
    </button>
    {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef} onChange={agregaSegundos} 
    placeholder="Ingresa Segundos" autoComplete="off"/>}
  </div>
);
};

export default Timer;

*/