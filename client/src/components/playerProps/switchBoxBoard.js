import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterCardsRandom} from '../../redux/actions';


 export function gameActionsBoard(player, action, type, card) {
  switch (type) {
    case "property":
      if (action === "comprar") {
        //cuando comprar la propiedad básica
       // card.owner= player.ID
        return (
          player = { 
          ...player,
          properties: player.properties.push(card),
          henrycoin: player.henrycoin - card.licenseValue,
        })
      }
      if (action === "pagar") { 
        return (player = { 
            ...player, 
          henrycoin: player.henrycoin - card.versionAlpha,  
        });
      }
      if (action === "vender") {
        //cuando vendes al banco, se le suma el precio base y fin.
        return (player = {
          properties: player.properties.filter(e=> e.id !== e.id),
          henrycoin: player.henrycoin - card.versionAlpha,
        });
      }
      if (action === "mejorar") {
        //comprar una casita u hotel de mejora
        return (player = {
          henrycoin: player.henrycoin - 50, //le resta el valor para mejorar.
          position: 1,
        });
        //Si entra aca... Filtramos las cartas que conincidan con la posicion 1 en este caso y pusheamos esa carta al array de jugador
      } else {
        return player;
      }

      case"comunal":
        return player;
        //dispatch(fiterrandom) -----> card id
        // otra switch (id) ----> return el playercambiado segun carta
      case "lucky":
          //dispatch(fiterrandom) -----> card id
          // otra switch (id) ----> return el playercambiado segun carta
       return player;
//*"property","service","lucky","comunal","railway","exit","jail","goJail","stop"service":
    return (player = { 
      ...player, 
    henrycoin: player.henrycoin - 90,  
  });
  case "railway":
    return (player = { 
      ...player, 
    henrycoin: player.henrycoin - 500,  
  });
  case "tax":
    return (player = { 
      ...player, 
    henrycoin: player.henrycoin - 500,  
  });
  
  case "exit"|| 'jail' || 'goJail' || 'stop':
    return player;
    
  default:
    return player;
    
} 

function Action() {
  const dispatch = useDispatch();
  const { info, infoGame } = useSelector((state) => state.reducerInfo);
  
  useEffect(() => {
    dispatch(filterCardsRandom('Suerte'))
  }, [dispatch])

//PLAYER= objeto con muchas props
//valor= VALOR QUE SE DESCUENTA, 
//action =STRING por ej 'comprar'
//type= "tipo de casilla"
  return (
    <div className="">
      <div>
        <span>Hola gente</span>
      </div>
    </div>
  );
}
}

export default Action;
