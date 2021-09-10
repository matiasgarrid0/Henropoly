import React, { useState} from 'react';
import { useDispatch} from 'react-redux';

/* const expressions = {
   expressionStandar: /^[a-zA-Z0-9_-]+$/, // Letras, numeros, guion y guion_bajo
   usernameLong: /^.{4,25}$/, // 4 a 25 digitos.
   passwordLong: /^.{8,16}$/, // 4 a 16 digitos.
 }; */
//!/^[a-zA-Z0-9_-]+$/.test(input.username)
let player = {
    properties: null,
    henrycoin: 1500,
    position: 0,
    ludmila: "sdjbdbhjdbdbjbsdbjdbjdbjdbdbj",
};
/* resultNewGame:
Bank:
BankHenryCoins: 200000
properties: []
[[Prototype]]: Object
PlayerData:
target1: {ID: "1", username: "JHHHJ", henryCoins: 1500, properties: Array(0), cards: Array(0)}
target2: {ID: "2", username: "HGHH", henryCoins: 1500, properties: Array(0), cards: Array(0)}
target3: {ID: "3", username: "JHJHJJ", henryCoins: 1500, properties: Array(0), cards: Array(0)}
target4: {ID: "4", username: "JHJHJH", henryCoins: 1500, properties: Array(0), cards: Array(0)}
[[Prototype]]: Object
actualTurn: "target1"
order: (4) ["target1", "target3", "target4", "target2"] */

function gameActionsBoard(player, action, cards, type) {
  //   if (position === 1) {
  //     if (action === "comprar") {
  //       return (jose = {
  //         properties: "CSS",
  //         henrycoin: 1500 - 5,
  //         position: 1,
  //       });
  //     } else {
  //       return (jose = {
  //         properties: null,
  //         henrycoin: 1500,
  //         position: 1,
  //       });
  //     }
  //   }

//   if (cards.table[position].type === "properties") {
//   }
//   if (cards.table[position].type === "comunal") {
//   }

  switch (player.position) {
    case 0:
    // |||||||||||||||||||||||||||||||||||
    case 1:
      if (action === "comprar") {
        return (player = {
          properties: "CSS",
          henrycoin: player.henrycoin - cards,
          position: 1,
        });
      } else {
        return (player = {
          ...player,
          position: 1,
        });
      }
    case 2:

    case 3:
      if (action === "comprar") {
        return (player = {
          properties: "HTML",
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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
          henrycoin: player.henrycoin - cards,
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

function  Action(props) {
  const dispatch = useDispatch();
  
  
   return (
  <div className='container-register'>
     {/*    {console.log(
  gameActionsBoard()} */}

       </div>
     
   ) 
  }
  
  export default Action;