import React from "react";
import { Portal } from '..';
import { useDispatch, useSelector } from "react-redux";
import LuckyCard from '../luckyCard/LuckyCard'

const portalCard = () =>{
    const dispatch = useDispatch();
    const random = useSelector((state) => state.reducerInfo.cardFilter);    
    console.log(random)

    const setPortal = (popUp) => {
        return () => {
            setValues((values) => ({ ...values, portal: popUp }));
        };
    };
    return(
        <div>
            {values.portal === "fortune" && (
                <Portal onClose={setPortal(null)}>
                    <LuckyCard register={setPortal("fortune")} data={random} />
                </Portal>
            )} 
            <button onClick={setPortal("fortune")}>FortuneCard</button>

        </div>
    )
}

export default portalCard;


