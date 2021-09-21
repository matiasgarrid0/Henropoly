const { CardProperty, CommunalArch, FortuneCard } = require("./../db");
const { targetY, targetX } = require("./calculatorTargetPosition");
const asyncRedis = require("async-redis");
// const redis = require('redis');
const redisConfig = {
  url: process.env.REDIS_URL || process.env.REDIS_TLS_URL,
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || "6379",
  pass: process.env.REDIS_PASSWORD || "",
};

const client = asyncRedis.createClient(redisConfig);

var timers = {};
var timerSec = {};
var seconds = {};
const randomArray = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
const callbackTest = (value) => {
  return new Promise((resolve) => setTimeout(resolve, value));
};
//funciones relacionadas con salas de espera y estados
const searchStatus = async (username) => {
  try {
    const ResponsePlayersInHold = await client.get(`playersInHold${username}`); //reset aqui
    if (ResponsePlayersInHold !== null) {
      const responseWaitingRoom = await client.get(
        `waitingRoom${ResponsePlayersInHold}`
      );
      if (responseWaitingRoom !== null) {
        return { status: "inHold", room: JSON.parse(responseWaitingRoom) };
      } else {
        await client.del(`playersInHold${username}`);
      }
    }
    const ResponsePlayersInGame = await client.get(`playersInGame${username}`); //reset aqui
    if (ResponsePlayersInGame !== null) {
      const responseGameRoom = await client.get(
        `gameRoom${ResponsePlayersInGame}`
      );
      if (responseGameRoom !== null) {
        return {
          status: "inGame",
          data: JSON.parse(responseGameRoom),
        };
      } else {
        await client.del(`playersInGame${username}`);
      }
    }
    return { status: "free" };
  } catch (error) {
    console.log(error);
  }
};
const createRoom = async (username, io) => {
  try {
    const ResponsePlayersInHold = await client.get(`playersInHold${username}`);
    const responseWaitingRoom = await client.get(
      `waitingRoom${ResponsePlayersInHold}`
    );
    if (responseWaitingRoom === null && ResponsePlayersInHold === null) {
     
      const value = {
        host: username,
        players: [],
        //playersTotal.push(host),
        tokens: [{}]
      };
      if(value.players[0]){
         value.playersTotal ={
        one:username,
        dos: value.players[0]
      } }
      if(value.players[1]){value.playersTotal ={
        ...value.playersTotal,
       tres: value.players[1]
      } }

      if(value.players[2]) { value.playersTotal ={
        ...value.playersTotal,
       cuatro: value.players[2]
      } }
   
      await client.set(`playersInHold${username}`, username);
      await client.set(`waitingRoom${username}`, JSON.stringify(value));
      io.sockets.in(username).emit("roomStatus", {
        status: "inHold",
        room: { host: username, players: [] },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteRoom = async (username, io) => {
  try {
    const responseWaitingRoom = await client.get(`waitingRoom${username}`);
    let playersFree = JSON.parse(responseWaitingRoom).players;
    playersFree.push(username);
    playersFree.forEach(async (player) => {
      await client.del(`playersInHold${player}`);
      io.sockets.in(player).emit("roomStatus", {
        status: "free",
      });
    });
    await client.del(`waitingRoom${username}`);
  } catch (error) {
    console.log(error);
  }
};
const joinRoom = async (username, host, io) => {
  try {
    const responseWaitingRoom = await client.get(`waitingRoom${host}`);
    if (responseWaitingRoom !== null) {
      let roomJson = JSON.parse(responseWaitingRoom);
      if (
        roomJson.host !== username &&
        roomJson.players.length < 3 &&
        !roomJson.players.includes(username)
      ) {
        roomJson.players.push(username);
        await client.set(`waitingRoom${host}`, JSON.stringify(roomJson));
        await client.set(`playersInHold${username}`, host);
        roomJson.players.forEach((player) => {
          io.sockets.in(player).emit("roomStatus", {
            status: "inHold",
            room: roomJson,
          });
        });
        io.sockets.in(host).emit("roomStatus", {
          status: "inHold",
          room: roomJson,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const leaveRoom = async (username, io) => {
  try {
    const ResponsePlayersInHold = await client.get(`playersInHold${username}`);
    const responseWaitingRoom = await client.get(
      `waitingRoom${ResponsePlayersInHold}`
    );
    let roomJson = JSON.parse(responseWaitingRoom);
    roomJson.players = roomJson.players.filter((player) => player !== username);
    await client.del(`playersInHold${username}`);
    await client.set(
      `waitingRoom${ResponsePlayersInHold}`,
      JSON.stringify(roomJson)
    );
    roomJson.players.forEach((player) => {
      io.sockets.in(player).emit("roomStatus", {
        status: "inHold",
        room: roomJson,
      });
    });
    io.sockets.in(roomJson.host).emit("roomStatus", {
      status: "inHold",
      room: roomJson,
    });
    io.sockets.in(username).emit("roomStatus", {
      status: "free",
    });
  } catch (error) {
    console.log(error);
  }
};
//funciones relacionadas con el juego y sus tiempos
const sendTimer = async (username, io) => {
  try {
    const responseGameRoom = await client.get(`gameRoom${username}`);
    const roomGame = JSON.parse(responseGameRoom);
    if (roomGame !== null) {
      roomGame.order.forEach((player) => {
        io.sockets.in(player).emit("timer", seconds[username]);
      });
    } else {
      clearTimer(username);
    }
  } catch (error) {
    console.log(error);
  }
};

const timer = (username, io) => {
  try {
    seconds[username] = 120;
    sendTimer(username, io);
    timerSec[username] = setInterval(async () => {
      seconds[username] = seconds[username] - 1;
      sendTimer(username, io);
      if (seconds[username] % 15 === 0) {
        console.log("sec x 15");
      }
      if (seconds[username] === 0) {
        seconds[username] = 120;
        console.log("cambio turno");
        const responseGameRoom = await client.get(`gameRoom${username}`);
        if (responseGameRoom !== null) {
          var roomGame = JSON.parse(responseGameRoom);
          roomGame.actualTurn = roomGame.order[1];
          let arrayOrder = roomGame.order;
          let playerFinal = arrayOrder.shift();
          arrayOrder.push(playerFinal);
          roomGame.order = arrayOrder;
          roomGame.move = true;
          await client.set(`gameRoom${username}`, JSON.stringify(roomGame));
          let target;
          for (let i = 1; i < 5; i++) {
            if (
              roomGame.dataPlayers[`target${i}`].username ===
              roomGame.actualTurn
            ) {
              target = `target${i}`;
            }
          }
          arrayOrder.forEach((player) => {
            io.sockets.in(player).emit("setGame", {
              status: "setTurns",
              actualTurn: roomGame.actualTurn,
              order: roomGame.order,
            });
            io.sockets
              .in(player)
              .emit("log", { target: target, text: "inicia su turno." });
          });
        } else {
          clearTimer(username);
        }
      }
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};


const clearTimer = (username) => {
  //clearInterval(timers[username]);
  clearInterval(timerSec[username]);
};
const goGame = async (username, io) => {
  try {
    const responseWaitingRoom = await client.get(`waitingRoom${username}`);
    let playersFree = JSON.parse(responseWaitingRoom).players;
    playersFree.push(username);
    await client.del(`waitingRoom${username}`);
    playersFree.forEach(async (player) => {
      await client.set(`playersInGame${player}`, username);
    });
    var orden = randomArray(playersFree);
    const responseProperty = await CardProperty.findAll();
    const responseLucky = await FortuneCard.findAll();
    const responseComunal = await CommunalArch.findAll();
    var gameRoom = {
      status: "inGame",
      host: username,
      order: orden,
      actualTurn: orden[0],
      table: responseProperty,
      lucky: responseLucky,
      comunal: responseComunal,
      dataPlayers: {
        target3: {
          username: null,
          henryCoin: 1500,
          cards: [],
          status: false,
          box: 0,
          x: 120,
          y: 40,
          token:null
        },
        target4: {
          username: null,
          henryCoin: 1500,
          cards: [],
          status: false,
          box: 0,
          x: 40,
          y: 40,
          token:null
        },
      },
      move: true,
    };
    gameRoom.dataPlayers.target1 = {
      username: gameRoom.order[0],
      henryCoin: 1500,
      cards: [],
      status: true,
      box: 0,
      x: 120,
      y: 120,
      token:null
    };
    gameRoom.dataPlayers.target2 = {
      username: gameRoom.order[1],
      henryCoin: 1500,
      cards: [],
      status: true,
      box: 0,
      x: 40,
      y: 120,
      token:null
    };
    if (gameRoom.order.length > 2) {
      gameRoom.dataPlayers.target3 = {
        username: gameRoom.order[2],
        henryCoin: 1500,
        cards: [],
        status: true,
        box: 0,
        x: 120,
        y: 40,
      };
    }
    if (gameRoom.order.length > 3) {
      gameRoom.dataPlayers.target4 = {
        username: gameRoom.order[3],
        henryCoin: 1500,
        cards: [],
        status: true,
        box: 0,
        x: 40,
        y: 40,
      };
    }
    await client.set(`gameRoom${username}`, JSON.stringify(gameRoom));
    playersFree.forEach(async (player) => {
      await client.del(`playersInHold${player}`);
      io.sockets.in(player).emit("roomStatus", {
        status: "inGame",
        data: gameRoom,
      });
    });
    timer(username, io);
  } catch (error) {
    console.log(error);
  }
};
const gameOver = async (username, io) => {
  try {
    const response = await client.get(`gameRoom${username}`);
    const listPlayer = JSON.parse(response).order;
    listPlayer.forEach(async (player) => {
      await client.del(`playersInGame${player}`);
    });
    clearTimer(username);
    await callbackTest(1500);
    await client.del(`gameRoom${username}`);
    listPlayer.forEach(async (player) => {
      io.sockets.in(player).emit("setGame", {
        status: "statusGame",
        type: "endGame",
      });
    });
  } catch (error) {
    console.log(error);
  }
};
const meEnd = async (username, io) => {
  try {
    const responseRoom = await client.get(`playersInGame${username}`);
    const response = await client.get(`gameRoom${responseRoom}`);
    var room = JSON.parse(response);
    if (room.order.length === 2) {
      gameOver(room.host, io);
    } else {
      let target;
      let meTurn = false;
      if (room.actualTurn === username) {
        seconds[username] = 120;
        //clearTimer(username)
        //await callbackTest(1200);
        room.actualTurn = room.order[1];
        room.order.shift();
        meTurn = true;
      } else {
        room.order = room.order.filter((players) => players !== username);
      }
      for (let i = 1; i < 5; i++) {
        if (room.dataPlayers[`target${i}`].username === username) {
          target = `target${i}`;
          room.dataPlayers[`target${i}`].status = false;
        }
      }
      room.move = true;
      await client.set(`gameRoom${responseRoom}`, JSON.stringify(room));
      await client.del(`playersInGame${username}`);
      let newTarget;
      for (let i = 1; i < 5; i++) {
        if (room.dataPlayers[`target${i}`].username === room.actualTurn) {
          newTarget = `target${i}`;
        }
      }
      room.order.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          status: "statusGame",
          type: "exitPlayer",
          info: {
            target: target,
            turn: { actualTurn: room.actualTurn, order: room.order },
          },
        });
        io.sockets
          .in(player)
          .emit("log", { target: target, text: "a abandonado la partida." });
      });
      //await callbackTest(150)
      room.order.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          status: "setTurns",
          actualTurn: room.actualTurn,
          order: room.order,
        });
        io.sockets
          .in(player)
          .emit("log", { target: newTarget, text: "inicia su turno." });
      });
      io.sockets.in(username).emit("setGame", {
        status: "statusGame",
        type: "meEnd",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const roll = async (username, io) => {
  try {
    let target;
    const responseRoom = await client.get(`playersInGame${username}`);
    const response = await client.get(`gameRoom${responseRoom}`);
    var room = JSON.parse(response);
    if (room.actualTurn === username && room.move === true) {
      let num1 = Math.floor(Math.random() * 6 + 1);
      let num2 = Math.floor(Math.random() * 6 + 1);
      for (let i = 1; i < 5; i++) {
        if (room.dataPlayers[`target${i}`].username === username) {
          target = `target${i}`;
          room.dataPlayers[`target${i}`].box =
            room.dataPlayers[`target${i}`].box + num1 + num2;
          if (room.dataPlayers[`target${i}`].box > 39) {
            room.dataPlayers[`target${i}`].box =
              room.dataPlayers[`target${i}`].box - 39;
            room.dataPlayers[`target${i}`].henryCoin =
              room.dataPlayers[`target${i}`].henryCoin + 100;
            room.order.forEach((player) => {
              io.sockets.in(player).emit("log", {
                target: `target${i}`,
                text: `pasa por salida y cobra 100 henryCoins.`,
              });
              io.sockets.in(player).emit("setGame", {
                status: "setBalance",
                info: {
                  target: `target${i}`,
                  henryCoin: room.dataPlayers[`target${i}`].henryCoin,
                },
              });
            });
          }
        }
      }
      room.dataPlayers[target].x = targetX(target, room.dataPlayers[target].box);
      room.dataPlayers[target].y = targetY(target, room.dataPlayers[target].box);
      let buyAlquiler = false;
    //  let buyTax = false      
      let targetProperty;
      let cardChoice = null;
      let cost;
      let buyTax;
      let buyLuckyCard;
      let buyComunalCard;
      let luckyType
      let comunalType
      if (
        room.table[room.dataPlayers[target].box].owner !== null &&
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === "property"
      ) {
        buyAlquiler = true;
        for (let i = 1; i < 5; i++) {
          if (
            room.dataPlayers[`target${i}`].username ===
            room.table[room.dataPlayers[target].box].owner
          ) {
            targetProperty = `target${i}`;
          }
        }
        cost = room.table[room.dataPlayers[target].box][room.table[room.dataPlayers[target].box].actualPrice];
        room.dataPlayers[target].henryCoin =
          room.dataPlayers[target].henryCoin - cost;
        room.dataPlayers[targetProperty].henryCoin =
          room.dataPlayers[targetProperty].henryCoin + cost;
      } else if (
        room.table[room.dataPlayers[target].box].owner !== null &&
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === "service"
      ) {
        buyAlquiler = true;
        for (let i = 1; i < 5; i++) {
          if (
            room.dataPlayers[`target${i}`].username ===
            room.table[room.dataPlayers[target].box].owner
          ) {
            targetProperty = `target${i}`;
          }
        }
        cost = (num1 + num2) * 4;
        room.dataPlayers[target].henryCoin =
          room.dataPlayers[target].henryCoin - cost;
        room.dataPlayers[targetProperty].henryCoin =
          room.dataPlayers[targetProperty].henryCoin + cost;
      } else if (
        room.table[room.dataPlayers[target].box].owner !== null &&
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === "railway"
      ) {
        buyAlquiler = true;
        for (let i = 1; i < 5; i++) {
          if (
            room.dataPlayers[`target${i}`].username ===
            room.table[room.dataPlayers[target].box].owner
          ) {
            targetProperty = `target${i}`;
          }
        }
        cost = room.table[room.dataPlayers[target].box][room.table[room.dataPlayers[target].box].actualPrice];
        room.dataPlayers[target].henryCoin =
          room.dataPlayers[target].henryCoin - cost;
        room.dataPlayers[targetProperty].henryCoin =
          room.dataPlayers[targetProperty].henryCoin + cost;
      } else if (
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === "tax"
      ) {
        buyTax = true;
        for (let i = 1; i < 5; i++) {
          if (
            room.dataPlayers[`target${i}`].username ===
            room.table[room.dataPlayers[target].box].owner
          ) {
            targetProperty = `target${i}`;
          }
        }
        cost = 200
        room.dataPlayers[target].henryCoin =
          room.dataPlayers[target].henryCoin - cost;
        room.dataPlayers[targetProperty].henryCoin =
          room.dataPlayers[targetProperty].henryCoin + cost;

      } else if (
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === "taxVip"
      ) {
        buyTax = true;
        for (let i = 1; i < 5; i++) {
          if (
            room.dataPlayers[`target${i}`].username ===
            room.table[room.dataPlayers[target].box].owner
          ) {
            targetProperty = `target${i}`;
          }
        }
        cost = 400
        room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin - cost;
        room.dataPlayers[targetProperty].henryCoin = room.dataPlayers[targetProperty].henryCoin + cost;

      } else if (
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === 'lucky'
      ) {
        buyLuckyCard = true;
        luckyType = '';
        let luckyCards = room.lucky;
        let numberLucky = Math.floor((Math.random() * 12) + 1)
        let luckyCard = luckyCards.filter((e) => e.ID === numberLucky)
        cardChoice = luckyCard
        if (luckyCard[0].type === 'pagas') {
          luckyType = 'pagas'
          cost = luckyCard[0].value
          room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin - cost;
        } else if (luckyCard[0].type === 'cobras') {
          luckyType = 'cobras'
          cost = luckyCard[0].value
          room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin + cost;
        }
        else if (luckyCard[0].type === 'pasas') {
          room.dataPlayers[target].cards.push(luckyCard[0]);
        } else if (luckyCard[0].type === 'migras') {
          room.dataPlayers[target].cards.push(luckyCard[0]);
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      } else if (
        room.table[room.dataPlayers[target].box].owner !== username &&
        room.table[room.dataPlayers[target].box].type === 'comunal') {
        buyComunalCard = true;
        comunalType = '';
        let comunalCards = room.comunal;
        const numberComunal = Math.floor((Math.random() * 7) + 1)
        let comunalCard = comunalCards.filter((e) => e.ID === numberComunal)
        cardChoice = comunalCard
        if (comunalCard[0].type === 'cobras') {
          comunalType = 'cobras'
          cost = comunalCard[0].value
          room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin + cost;
        } else {
          comunalType = 'pagas'
          cost = comunalCard[0].value
          room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin - cost;
        }
      }

      if (num1 !== num2) {
        room.move = false;
      }
      await client.set(`gameRoom${responseRoom}`, JSON.stringify(room));
      room.order.forEach(async (player) => {
        io.sockets.in(player).emit("setGame", {
          status: "roll",
          info: { target: target, move: room.dataPlayers[target].box },
          one: num1,
          two: num2,
          move: room.move,
          usernameRoll: username,
          cardChoice: cardChoice,
          buyAlquiler: {
            status: buyAlquiler,
            target: target,
            secondTarget: targetProperty,
          },
        });
        io.sockets.in(player).emit("log", {
          target: target,
          text: `ha lanzado dado y tira : ${num1} / ${num2}. se mueve ${num1 + num2
            } espacios.`,
        });
      });
      if (buyAlquiler) {
        room.order.forEach(async (player) => {
          await callbackTest(100);
          io.sockets.in(player).emit("log", {
            target: target,
            text: `paga por licencia a ${room.dataPlayers[targetProperty].username} ${cost} henryCoins.`,
          });
        });

        room.order.forEach( async (e) => { 
          await callbackTest(100);
          io.sockets.in(e).emit("setGame", {
          status: "setBalance",
          info: {
            target: target,
            henryCoin: room.dataPlayers[target].henryCoin,
          },
          });
        })
       
      }
      if (buyTax) {
        room.order.forEach(async (player) => {
          await callbackTest(100);
          io.sockets.in(player).emit("log", {
            target: target,
            text: `paga por impuesto ${cost} henryCoins.`,
          });
          io.sockets.in(player).emit("setGame", {
            status: "setBalance",
            info: {
              target: target,
              henryCoin: room.dataPlayers[target].henryCoin,
            },
          })
        })
      /*   buyTax = false //Linea para falsear el buy tax si no sigue cobrando undefined
        room.order.forEach(async (e) => {
          await callbackTest(100);
           io.sockets.in(e).emit("setGame", {
          status: "setBalance",
          info: {
            target: target,
            henryCoin: room.dataPlayers[target].henryCoin,
          },
        });
        })    */
;
      }
      if (buyLuckyCard) {
        room.order.forEach(async (player) => {
          await callbackTest(100);
          if (cost) {
            io.sockets.in(player).emit("log", {
              target: target,
              text: `${luckyType} unos $${cost} henryCoins por carta de suerte.`,
            })
          }
          else if (luckyCard.type === 'pasas') {
            io.sockets.in(player).emit("log", {
              target: target,
              text: ' consiguió una carta para salvarse de migrar.',
            })
          }
          else {
            io.sockets.in(player).emit("log", {
              target: target,
              text: ' te vas a migrar, más suerte la próxima.',
            })
          }
          io.sockets.in(player).emit("setGame", {
            status: "setBalance",
            info: {
              target: target,
              henryCoin: room.dataPlayers[target].henryCoin,
            }
          })
        })
      }
      if (buyComunalCard) {
        room.order.forEach(async (player) => {
          await callbackTest(100);
          io.sockets.in(player).emit("log", {
            target: target,
            text: ` ${comunalType} unos $${cost} henryCoins por carta comunal.`,
          })
          io.sockets.in(player).emit("setGame", {
            status: "setBalance",
            info: {
              target: target,
              henryCoin: room.dataPlayers[target].henryCoin,
            }
          })
        })
      }
      if (room.move) {
        room.order.forEach(async (player) => {
          await callbackTest(100);
          io.sockets.in(player).emit("log", {
            target: target,
            text: ` tira dados dobles y puede volver a tirar`,
          })
        })
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const passTurn = async (username, io) => {
  try {
    const host = await client.get(`playersInGame${username}`); //trae data de un player
    const responseGameRoom = await client.get(`gameRoom${host}`);
    var roomGame = JSON.parse(responseGameRoom);
    if (username === roomGame.actualTurn) {
      seconds[host] = 120;
      //clearTimer(username)
      //await callbackTest(1200)
      //clearTimer(host)
      roomGame.actualTurn = roomGame.order[1];
      let arrayOrder = roomGame.order;
      let playerFinal = arrayOrder.shift();
      arrayOrder.push(playerFinal);
      roomGame.order = arrayOrder;
      roomGame.move = true;
      await client.set(`gameRoom${host}`, JSON.stringify(roomGame));
      let target;
      for (let i = 1; i < 5; i++) {
        if (
          roomGame.dataPlayers[`target${i}`].username === roomGame.actualTurn
        ) {
          target = `target${i}`;
        }
      }
      arrayOrder.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          status: "setTurns",
          actualTurn: roomGame.actualTurn,
          order: roomGame.order,
        });
        io.sockets
          .in(player)
          .emit("log", { target: target, text: " inicia su turno." });
      });
      //timer(host, io)
    }
  } catch (error) {
    console.log(error);
  }
};

///////////////////////////////////////////////////////// --SWITCH-BOX-BOARD-- ////////////////////////////////////////////////////////////////////////////////////////////////////////
const buyProperty = async (username, box, io) => {
  try {
    const host = await client.get(`playersInGame${username}`);
    const responseGameRoom = await client.get(`gameRoom${host}`);
    let target;
    var room = JSON.parse(responseGameRoom); // -----> traigo info necesaria la transefiero a JSON
    for (let i = 1; i < 5; i++) {
      if (room.dataPlayers[`target${i}`].username === username) {
        target = `target${i}`;
      }
    }
    if (
      room.dataPlayers[target].henryCoin >= room.table[box].licenseValue &&
      room.table[box].owner === null
    ) {
      room.dataPlayers[target].henryCoin =
        room.dataPlayers[target].henryCoin - room.table[box].licenseValue;
      room.table[box].owner = username;
      await client.set(`gameRoom${host}`, JSON.stringify(room)); //----> seteo la info en redis a stringfy
      room.order.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          //----> mando la repuesta x socket
          status: "buyProperty",
          box: box,
          newProperty: target,
          newbalase: room.dataPlayers[target].henryCoin,
        });
      });
       
      room.order.forEach(e => {
         io.sockets.in(e).emit("log", {
          target: target,
          text: `ha comprado ${room.table[box].name} a ${room.table[box].licenseValue} HenryCoins.`,
        });
      });
      
    }
  } catch (error) {
    console.log(error);
  }
}

const buyRailway = async (username, box, io) => {
  const host = await client.get(`playersInGame${username}`)
  const responseGameRoom = await client.get(`gameRoom${host}`);
  let target;
  var room = JSON.parse(responseGameRoom); // -----> traigo info necesaria la transefiero a JSON
  for (let i = 1; i < 5; i++) {
    if (room.dataPlayers[`target${i}`].username === username) {
      target = `target${i}`
    };
  };
  if (room.dataPlayers[target].henryCoin >= room.table[box].licenseValue && room.table[box].owner === null) {
    room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin - room.table[box].licenseValue;
    room.table[box].owner = username;
    await client.set(`gameRoom${host}`, JSON.stringify(room)); //----> seteo la info en redis a stringfy
    room.order.forEach((player) => {
      io.sockets.in(player).emit("setGame", { //----> mando la repuesta x socket 
        status: "buyRailway",
        box: box,
        newProperty: target,
        newbalase: room.dataPlayers[target].henryCoin
      });
    });
    room.order.forEach((player) => {
      io.sockets.in(player).emit("log", {
        target: target,
        text: `ha comprado ${room.table[box].name} a ${room.table[box].licenseValue} HenryCoins.`,
      });
    });
  }
}

const buyService = async (username, box, io) => {
  const host = await client.get(`playersInGame${username}`)
  const responseGameRoom = await client.get(`gameRoom${host}`);
  let target;
  var room = JSON.parse(responseGameRoom); // -----> traigo info necesaria la transefiero a JSON
  for (let i = 1; i < 5; i++) {
    if (room.dataPlayers[`target${i}`].username === username) {
      target = `target${i}`
    };
  };
  if (room.dataPlayers[target].henryCoin >= room.table[box].licenseValue && room.table[box].owner === null) {
    room.dataPlayers[target].henryCoin = room.dataPlayers[target].henryCoin - room.table[box].licenseValue;
    room.table[box].owner = username
    await client.set(`gameRoom${host}`, JSON.stringify(room)); //----> seteo la info en redis a stringfy
    room.order.forEach((player) => {
      io.sockets.in(player).emit("setGame", { //----> mando la repuesta x socket 
        status: "buyService",
        box: box,
        newProperty: target,
        newbalase: room.dataPlayers[target].henryCoin
      });
     
    });
  room.order.forEach((e) => {
     io.sockets.in(e).emit("log", {
        target: target,
        text: `ha comprado ${room.table[box].name} a ${room.table[box].licenseValue} HenryCoins.`,
      });
  })
  }
}



const goToJail = async (username, io) => {
  try {
   // console.log(io)
  const host = await client.get(`playersInGame${username}`)
  const responseGameRoom = await client.get(`gameRoom${host}`);
  let target;
  var room = JSON.parse(responseGameRoom); // -----> traigo info necesaria la transefiero a JSON
  if (room.actualTurn === username) {
  for (let i = 1; i < 5; i++) {
    if (room.dataPlayers[`target${i}`].username === username) {
      target = `target${i}`
    }
  }
  room.dataPlayers[target].x = targetX(target, room.dataPlayers[target].box);
  room.dataPlayers[target].y = targetY(target, room.dataPlayers[target].box);
     // console.log('log in carcer',   room.dataPlayers[target].box)
      if(room.dataPlayers[target].box === 30) {
        room.dataPlayers[target].box = room.dataPlayers[target].box - 20
       
        console.log('pos changed', room.dataPlayers[target].box)
    // console.log(io)
     await client.set(`gameRoom${host}`, JSON.stringify(room)); //----> seteo la info en redis a stringfy
   room.order.forEach((player) => {
    io.sockets.in(player).emit("setGame", { //----> mando la repuesta x socket 
      status: "goToJail", 
      info: { target: target, move: room.dataPlayers[target].box },
      box: room.dataPlayers[target].box,
      newProperty: target,
    });
    io.sockets.in(player)
    .emit("log", { target: target, text: " va directo a la carcel" });
  }); 


      }
    };
  } catch (error) {
  console.log(error);
} 
}

  
  const playerIsLoser = () => {

  }


module.exports = {
  createRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
  goGame,
  searchStatus,
  gameOver,
  meEnd,
  roll,
  passTurn,
  buyProperty,
  buyRailway,
  buyService,
  goToJail,
  playerIsLoser

  //luckyComunalCard,
  /*luckyOrArc,
  gameActionsBoard*/
};
