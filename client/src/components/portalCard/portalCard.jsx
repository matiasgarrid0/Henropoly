import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Portal } from '..';
import {filterLuckyRandom , filterComunalRandom, getInfoDb} from '../../redux/actions'
import LuckyCard from '../luckyCard/LuckyCard'
import RailwayCard from '../railwayCard/RailwayCard'
// import './luckyCard.css'

const PortalCard = () => {
    const dispatch = useDispatch();
    const luckyCard = useSelector((state) => state.reducerInfo.luckyCard);
    const infoRail = useSelector((state) => state.reducerInfo.info);
    console.log('ASKLDJASLDKJASLKDJSLADKJSALDK', infoRail);
    const comunalCard = useSelector((state) => state.reducerInfo.comunalCard);     


    useEffect(() => {
        dispatch(filterLuckyRandom())
        dispatch(filterComunalRandom())
        dispatch(getInfoDb())
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
                    <LuckyCard register={setPortal("suerte")} data={luckyCard} />
                </Portal>
            )}
                <button onClick={setPortal("suerte")}>FortuneCard</button>
            {values.portal === "comunal" && (
                <Portal onClose={setPortal(null)}>
                    <LuckyCard className="mati-luckyCard" register={setPortal("comunal")} data={comunalCard} />
                </Portal>
            )}
            <button onClick={setPortal("comunal")}>Comunal </button>
        
        </div>
    )
}
    
export default PortalCard;