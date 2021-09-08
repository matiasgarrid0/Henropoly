import React from 'react';
import { Portal } from '..';
import Trade from '../trade/Trade'
import Card from '../card/Card'
import Dados from '../dados/Dados'

const GameNav = () => {
    const [values, setValues] = React.useState({
        portal: null,
    });
    const setPortal = (popUp) => {
        return () => {
            setValues((values) => ({ ...values, portal: popUp }));
        };
    };

    return (
        <div>
            {values.portal === "trade" && (
                <Portal onClose={setPortal(null)}>
                    <Trade register={setPortal("trade")} />
                </Portal>
            )}            
            <button onClick={setPortal("trade")}>Negociar</button>
            {values.portal === "card" && (
                <Portal onClose={setPortal(null)}>
                    <Card register={setPortal("card")} />
                </Portal>
            )}
            <button onClick={setPortal("card")}>Cartas</button>
            <Dados/>
        </div>
    )
}
export default GameNav;