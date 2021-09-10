import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterCardsRandom} from '../../redux/actions'
function Action() {
  const dispatch = useDispatch();
  const { info, infoGame } = useSelector((state) => state.reducerInfo);
  
  useEffect(() => {
    dispatch(filterCardsRandom('Suerte'))
  }, [dispatch])


/* resultNewGame:
Bank:
BankHenryCoins: 200000
properties: []
[[Prototype]]: Object
PlayerData:
target3: {ID: "3", username: "JOSE", henryCoins: 1500, properties: Array(0), value: Array(0)}
target4: {ID: "4", username: "FACU", henryCoins: 1500, properties: Array(0), value: Array(0)}
[[Prototype]]: Object
target1: {ID: "1", username: "SEBA", henryCoins: 1500, properties: Array(0), value: Array(0)}
actualTurn: "target1"
order: (4) ["target1", "target3", "target4", "target2"] */

const player = {
  ID: "2",
  username: "LUDMI",
  henryCoins: 1500,
  properties: [],
  value: [],
  position: 1,
};

// console.log('player.position',player.position)




                        //PLAYER= objeto con muchas props
                        //valor= VALOR QUE SE DESCUENTA, 
                        //action =STRING por ej 'comprar'
                        //type= "tipo de casilla"
 
function gameActionsBoard(player, action, value, type) {

  /**1:
aditional: "además V4.0"
color: "brown"
commonVersion: 50
id: 1
licenseValue: 30
name: " CSS"
numberBox: null
premiumVersion: 50
type: "property"
versionAlpha: 2
versionFour: 160
versionOne: 10
versionPremium: 250
versionThree: 90
versionTwo: 30 */
    
  switch (type) {
    case "property":
      if (action === "comprar") {
        //cuando comprar la propiedad básica
        return (player = {
          properties: "CSS",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      }
      if (action === "pagar") {
        //cuando caes en casilla ajena
        return (player = {
          properties: "CSS",
          henrycoin: player.henrycoin + value,
          position: 1,
        });
      }
      if (action === "vender") {
        //cuando vendes al banco, se le suma el precio base y fin.
        return (player = {
          properties: "CSS",
          henrycoin: player.henrycoin + value,
          position: 1,
        });
      }
      if (action === "mejorar") {
        //comprar una casita u hotel de mejora
        return (player = {
          properties: "CSS",
          henrycoin: player.henrycoin - 50, //le resta el valor para mejorar.
          position: 1,
        });
        //Si entra aca... Filtramos las cartas que conincidan con la posicion 1 en este caso y pusheamos esa carta al array de jugador
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 2:
      if (action === "comprar") {
        return (player = {
          properties: "Postgres",
          henrycoin: player.henrycoin - value,
          position: 6,
        });
      } else {
        return (player = {
          ...player,
          position: 6,
        });
      }
    case 3:
      if (action === "comprar") {
        return (player = {
          properties: "HTML",
          henrycoin: player.henrycoin - value,
          position: 2,
        });
      } else {
        return (player = {
          ...player,
          position: 2,
        });
      }
    case 4:

    case 5:

    case 6:
      if (action === "comprar") {
        return (player = {
          properties: "Postgres",
          henrycoin: player.henrycoin - value,
          position: 6,
        });
      } else {
        return (player = {
          ...player,
          position: 6,
        });
      }
    case 7:

    case 8:
      if (action === "comprar") {
        return (player = {
          properties:
            player.properties === null
              ? "Postgres"
              : player.properties + "Postgres",
          henrycoin: player.henrycoin - value,
          position: 8,
        });
      } else {
        return (player = {
          ...player,
          position: 8,
        });
      }
    case 9:
      if (action === "comprar") {
        return (player = {
          properties: "MySQL",
          henrycoin: player.henrycoin - value,
          position: 9,
        });
      } else {
        return (player = {
          ...player,
          position: 9,
        });
      }
    //
    case 10:
    //jail

    case 11:
      if (action === "comprar") {
        return (player = {
          properties: "C#",
          henrycoin: player.henrycoin - value,
          position: 11,
        });
      } else {
        return (player = {
          ...player,
          position: 11,
        });
      }

    case 12:
      if (action === "comprar") {
        return (player = {
          properties: "service",
          henrycoin: player.henrycoin - value,
          position: 12,
        });
      } else {
        return (player = {
          ...player,
          position: 12,
        });
      }

    case 13:
      if (action === "comprar") {
        return (player = {
          properties: "C++",
          henrycoin: player.henrycoin - value,
          position: 13,
        });
      } else {
        return (player = {
          ...player,
          position: 13,
        });
      }

    case 14:
      if (action === "comprar") {
        return (player = {
          properties: "C",
          henrycoin: player.henrycoin - value,
          position: 14,
        });
      } else {
        return (player = {
          ...player,
          position: 14,
        });
      }

    case 15:
      if (action === "comprar") {
        return (player = {
          properties: "railway",
          henrycoin: player.henrycoin - value,
          position: 15,
        });
      } else {
        return (player = {
          ...player,
          position: 15,
        });
      }

    case 16:
      if (action === "comprar") {
        return (player = {
          properties: "Boostrap",
          henrycoin: player.henrycoin - value,
          position: 16,
        });
      } else {
        return (player = {
          ...player,
          position: 16,
        });
      }

    case 17:
    //comunal

    case 18:
      if (action === "comprar") {
        return (player = {
          properties: "Diseño UI/UX",
          henrycoin: player.henrycoin - value,
          position: 18,
        });
      } else {
        return (player = {
          ...player,
          position: 18,
        });
      }

    case 19:
      if (action === "comprar") {
        return (player = {
          properties: "Express",
          henrycoin: player.henrycoin - value,
          position: 19,
        });
      } else {
        return (player = {
          ...player,
          position: 19,
        });
      }

    case 20:
    //park
    case 21:
      if (action === "comprar") {
        return (player = {
          properties: "Vue",
          henrycoin: player.henrycoin - value,
          position: 21,
        });
      } else {
        return (player = {
          ...player,
          position: 21,
        });
      }
    case 23:
      if (action === "comprar") {
        return (player = {
          properties: "Angular",
          henrycoin: player.henrycoin - value,
          position: 23,
        });
      } else {
        return (player = {
          ...player,
          position: 23,
        });
      }
    case 24:
      if (action === "comprar") {
        return (player = {
          properties: "Node",
          henrycoin: player.henrycoin - value,
          position: 24,
        });
      } else {
        return (player = {
          ...player,
          position: 24,
        });
      }
    case 25:
      if (action === "comprar") {
        return (player = {
          properties: "HENRY M3",
          henrycoin: player.henrycoin - value,
          position: 25,
        });
      } else {
        return (player = {
          ...player,
          position: 25,
        });
      }
    case 26:
      if (action === "comprar") {
        return (player = {
          properties: "Python",
          henrycoin: player.henrycoin - value,
          position: 26,
        });
      } else {
        return (player = {
          ...player,
          position: 26,
        });
      }
    case 27:
      if (action === "comprar") {
        return (player = {
          properties: "Java",
          henrycoin: player.henrycoin - value,
          position: 27,
        });
      } else {
        return (player = {
          ...player,
          position: 27,
        });
      }

    case 29:
      if (action === "comprar") {
        return (player = {
          properties: "Javascript",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }

    case 31:
      if (action === "comprar") {
        return (player = {
          properties: "Sequelize",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 32:
      if (action === "comprar") {
        return (player = {
          properties: "GitHub",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 33:
      if (action === "comprar") {
        return (player = {
          properties: "comunal", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 34:
      if (action === "comprar") {
        return (player = {
          properties: "Git",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 35:
      if (action === "comprar") {
        return (player = {
          properties: "Henry M4", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 36:
      if (action === "comprar") {
        return (player = {
          properties: "lucky", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 37:
      if (action === "comprar") {
        return (player = {
          properties: "Redux",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 38:
      if (action === "comprar") {
        return (player = {
          properties: "tax", //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 39:
      if (action === "comprar") {
        return (player = {
          properties: "React",
          henrycoin: player.henrycoin - value,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    default:
      break;
  }
}

  return (
    <div className="">
      <div>
        {/* {console.log("LUCKYYYYYYYYYYY", info)} */}
        {/* {console.log()} */}
        {
          
        }
        <span>Hola gente</span>
      </div>
    </div>
  );
}

export default Action;
