import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Portal } from '..';
import {filterCardsRandom} from '../../redux/actions'
import LuckyCard from '../luckyCard/LuckyCard'
// import './luckyCard.css'

const PortalCard = () => {
    const dispatch = useDispatch();
    const random = useSelector((state) => state.reducerInfo.cardFilter);    
    console.log('cardFilter',random)

    useEffect(() => {
        dispatch(filterCardsRandom("hola"))
    }, [])

    const [values, setValues] = React.useState({
        portal: null,
    });

    const setPortal = (popUp) => {
        return () => {
            // dispatch(filterCardsRandom())
            setValues((values) => ({ ...values, portal: popUp }));
        };
    };
    
    return(
        <div>
            {values.portal === "suerte" && (
                <Portal onClose={setPortal(null)}>
                    <LuckyCard register={setPortal("suerte")} data={random} />
                </Portal>
            )}
                <button onClick={setPortal("suerte")}>FortuneCard</button>
            {values.portal === "comunal" && (
                <Portal onClose={setPortal(null)}>
                    <LuckyCard className="mati-luckyCard" register={setPortal("comunal")} data={random} />
                </Portal>
            )}
            <button onClick={setPortal("comunal")}>Comunal </button>
        
        </div>
    )
}
    
export default PortalCard;

