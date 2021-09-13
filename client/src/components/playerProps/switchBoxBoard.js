import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCardsRandom } from "../../redux/actions";

//
export function goToJail(pos) {
  return pos
}
export function gameActionsBoard(player, action, type, card) {
  switch (type) {
    case "property":
      if (action === "comprar") {
        //cuando comprar la propiedad básica
        // card.owner= player.ID
       //console.log('lo que estra para filter', player.properties[0][0].id, card[0].id)
       card[0].owner= player.username    
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
    case "service":
        if (action === "comprar") {
          card[0].owner= player.username 
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
          player.henryCoins= player.henryCoins + card[0].versionAlpha
          player.properties= player.properties.filter((e) => e[0].id !== card[0].id)
          return player
        }
    case "railway":
      if (action === "comprar") {
        card[0].owner= player.username 
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
        player.henryCoins= player.henryCoins + card[0].versionAlpha
        player.properties= player.properties.filter((e) => e[0].id !== card[0].id)
        return player
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

export function luckyOrArc(card, player, infoGame) {
// console.log('infoGame!!!!!!!!!', infoGame)
  switch (card[0].type) {
    case "pagas":
  player.henryCoins = player.henryCoins - card[0].value
        return player 
    case "cobras":
      player.henryCoins= player.henryCoins + card[0].value
        return player 
    case "migras"://cambiar de position
      //infoGame[0].resultNewGame.playerPosition.target1.box= 10
      return player
    case "pasas":
      return (player = {
        ...player,
        cards: player.cards.push(card)
      });
      
    default:
     return player;

     
  }
}





function Action() {
  const dispatch = useDispatch();
  const { info, infoGame } = useSelector((state) => state.reducerInfo);

  // useEffect(() => {
  //   dispatch(filterCardsRandom("Suerte"));
  // }, [dispatch]);

  //PLAYER= objeto con muchas props
  //valor= VALOR QUE SE DESCUENTA,
  //action =STRING por ej 'comprar'
  //type= "tipo de casilla"
  return (
    <div className="">
      <div>
        <span></span>
      </div>
    </div>
  );
}

export default Action;
