import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCardsRandom } from "../../redux/actions";

//
export function gameActionsBoard(player, action, type, card) {
  switch (type) {
    case "property":
      if (action === "comprar") {
        //cuando comprar la propiedad básica
        // card.owner= player.ID
       //console.log('lo que estra para filter', player.properties[0][0].id, card[0].id)    
        player.henryCoins = player.henryCoins - card[0].licenseValue
        return (player = {
          ...player,
          properties: player.properties.push(card)
        });
      }
      if (action === "pagar") { //ver logica porq solo se paga si tiene dueño
        player.henryCoins= player.henryCoins - card[0].versionAlpha
        return (player = {
          ...player
        });
      }
      if (action === "vender") {
        //cuando vendes al banco, se le suma el precio base y fin.
        player.henryCoins= player.henryCoins + card[0].versionAlpha
                                             //  [0, 1, 2]
        player.properties= player.properties.filter((e) => e[0].id !== card[0].id)
        return player
      }
      if (action === "mejorar") {
        //comprar una casita u hotel de mejora
        player.henryCoins= player.henryCoins - card[0].versionAlpha
        return (player = {
          ...player //le resta el valor para mejorar.         
        });
        //Si entra aca... Filtramos las cartas que conincidan con la posicion 1 en este caso y pusheamos esa carta al array de jugador
      } else {
        return player;
      }
    case "comunal":
        return player;
      //dispatch(fiterrandom) -----> card id
      // otra switch (id) ----> return el playercambiado segun carta
    case "lucky":
      //dispatch(fiterrandom) -----> card id
      // otra switch (id) ----> return el playercambiado segun carta
      return player;
    case "service":
        if (action === "comprar") {
          player.henryCoins = player.henryCoins - card[0].licenseValue
          return (player = {
            ...player,
            properties: player.properties.push(card)
          });
        }
        if (action === "pagar") {//ver logica porq solo se paga si tiene dueño
          player.henryCoins= player.henryCoins - 15
          return (player = {
            ...player
          });
        }
        if (action === "vender") {
          player.henryCoins= player.henryCoinsn + 90
          player.properties= player.properties.filter((e) => e.id !== e.id)
          return (player = {
            ...player
          });
        }
    case "railway":
      if (action === "comprar") {
        player.henryCoins = player.henryCoins - card[0].takeCheckpoint
        return (player = {
          ...player,
          properties: player.properties.push(card)
        });
      }
      if (action === "pagar") {//ver logica porq solo se paga si tiene dueño
        player.henryCoins= player.henryCoins - 10
        return (player = {
          ...player
        });
      }
      if (action === "vender") {
        player.henryCoins= player.henryCoins +  40
        return (player = {
          ...player,
          properties:player.properties.filter((e) => e[0].id !== card[0].id)
        });
      }
      // player.henryCoins= player.henryCoins - 500
      // return (player = {
      //   ...player
      // });
    case "tax":
      player.henryCoins= player.henryCoins - 200
      return (player = {
        ...player
      });
    case "taxVip":
      player.henryCoins= player.henryCoins - 400
      return (player = {
          ...player
      });

    case "exit" || "jail" || "goJail" || "stop":
      return player;

    default:
      return player;
  }
}

function Action() {
  const dispatch = useDispatch();
  const { info, infoGame } = useSelector((state) => state.reducerInfo);

  useEffect(() => {
    dispatch(filterCardsRandom("Suerte"));
  }, [dispatch]);

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

export default Action;
