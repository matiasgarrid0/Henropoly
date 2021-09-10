import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getInfoDb } from '../../redux/actions'
import { Portal } from '..';
import Trade from '../trade/Trade'
import Card from '../card/Card'

const GameNav = () => {


    const dispatch = useDispatch()
    const cards = useSelector((state) => state.reducerInfo.info.table)
    console.log(cards)

    //const noFunciona = cards.filter((e) => e.name === "CSS") WHY NO FUNCA

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

    const player = {
        properties: [1, 2, 3],
        henrycoin: 1500,
        position: 0,
    }

    //Funciona ATR 
    // const arraydecartas = []
    //  for (let index = 0; index < player.properties.length; index++) {
    //  const element = player.properties[index]; // 0 - 1 // 1 - 3 // 2 -5 
    //  const cartita = carta.filter((e) => e.type === "property" && e.id === element)
    //  if(cartita.length > 0){
    //  arraydecartas.push(cartita)
    //  } 
    //  }
    //  console.log(arraydecartas)

    const carta = [
        {
            id: 1,
            type: "property",
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
        },
        {
            id: 39,
            type: "property",
            name: "React",
            versionAlpha: 50,
            versionOne: 200,
            versionTwo: 600,
            versionThree: 1400,
            versionFour: 1700,
            versionPremium: 2000,
            aditional: "además V4.0",
            commonVersion: 200,
            premiumVersion: 200,
            licenseValue: 200,
            color: "blue"
        },
        {
            id: 37,
            type: "property",
            name: "Redux",
            versionAlpha: 35,
            versionOne: 175,
            versionTwo: 500,
            versionThree: 1100,
            versionFour: 1300,
            versionPremium: 1500,
            aditional: "además V4.0",
            commonVersion: 200,
            premiumVersion: 200,
            licenseValue: 175,
            color: "blue"
        },
    ]


    return (
        <div>
            {values.portal === "trade" && (
                <Portal onClose={setPortal(null)}>
                    <Trade register={setPortal("trade")} trade={player} />
                </Portal>
            )}
            <button onClick={setPortal("trade")}>Negociar</button>
            {values.portal === "card" && (
                <Portal onClose={setPortal(null)}>
                    {
                        carta.map((e) => (
                            <Card register={setPortal("card")}
                                name={e.name}
                                id={e.id}
                                versionAlpha={e.versionAlpha}
                                versionOne={e.versionOne}
                                versionTwo={e.versionTwo}
                                versionThree={e.versionThree}
                                versionFour={e.versionFour}
                                versionPremium={e.versionPremium}
                                aditional={e.aditional}
                                commonVersion={e.commonVersion}
                                premiumVersion={e.premiumVersion}
                                licenseValue={e.licenseValue}
                                key={e.id} />
                        ))
                    }
                </Portal>
            )}
            <button onClick={setPortal("card")}>Cartas</button>
        </div>
    )
}
export default GameNav;


/**
 *  {
 cards.map((e) => (
     <Card register={setPortal("card")}
     name={e.name}
     id={e.id}
     versionAlpha={e.versionAlpha}
     versionOne={e.versionOne}
     versionTwo={e.versionTwo}
     versionThree={e.versionThree}
     versionFour={e.versionFour}
     versionPremium={e.versionPremium}
     aditional={e.aditional}
     commonVersion={e.commonVersion}
     premiumVersion={e.premiumVersion}
     licenseValue={e.licenseValue}
     key={e.id} />
     ))
    }
    */