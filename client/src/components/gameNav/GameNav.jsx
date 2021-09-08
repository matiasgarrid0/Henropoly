import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getInfoDb }  from '../../redux/actions'
import { Portal } from '..';
import Trade from '../trade/Trade'
import Card from '../card/Card'
import Dados from '../dados/Dados'

const GameNav = () => {

    const dispatch = useDispatch()
    const cards = useSelector((state) => state.reducerInfo.info)
    console.log(cards) 
    
    useEffect(() => {
        dispatch(getInfoDb())
    }, [dispatch])

    const [values, setValues] = React.useState({
        portal: null,
    });
    const setPortal = (popUp) => {
        return () => {
            setValues((values) => ({ ...values, portal: popUp }));
        };
    };
    const carta={
            id:1,
            type:"property",
            name: " CSS",
            versionAlpha: 2,
            versionOne: 10,
            versionTwo: 30,
            versionThree: 90,
            versionFour: 160,
            versionPremium: 250,
            aditional: "además V4.0",
            commonVersion: 50,
            premiumVersion: 50,
            licenseValue: 30,
            color: "brown"
    }

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
                    <Card register={setPortal("card")} data={carta} />
                </Portal>
            )}
            <button onClick={setPortal("card")}>Cartas</button>
            <Dados/>
        </div>
    )
}
export default GameNav;