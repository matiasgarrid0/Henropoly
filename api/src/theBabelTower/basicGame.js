const { client, timers, timerSec, seconds, } = require('./')
const { sendTimer, timer, clearTime } =require('./timers')

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
  }

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
      var gameRoom = {
        status: "inGame",
        host: username,
        order: orden,
        actualTurn: orden[0],
        table: [
          { ID: 0, type: "exit", username: null },
          { ID: 1, type: "property", username: null },
          { ID: 2, type: "comunal", username: null },
          { ID: 3, type: "property", username: null },
          { ID: 4, type: "tax", username: null },
          { ID: 5, type: "railway", username: null },
          { ID: 6, type: "property", username: null },
          { ID: 7, type: "lucky", username: null },
          { ID: 8, type: "property", username: null },
          { ID: 9, type: "property", username: null },
          { ID: 10, type: "jail", username: null },
          { ID: 11, type: "property", username: null },
          { ID: 12, type: "service", username: null },
          { ID: 13, type: "property", username: null },
          { ID: 14, type: "property", username: null },
          { ID: 15, type: "railway", username: null },
          { ID: 16, type: "property", username: null },
          { ID: 17, type: "comunal", username: null },
          { ID: 18, type: "property", username: null },
          { ID: 19, type: "property", username: null },
          { ID: 20, type: "stop", username: null },
          { ID: 21, type: "property", username: null },
          { ID: 22, type: "lucky", username: null },
          { ID: 23, type: "property", username: null },
          { ID: 24, type: "property", username: null },
          { ID: 25, type: "railway", username: null },
          { ID: 26, type: "property", username: null },
          { ID: 27, type: "property", username: null },
          { ID: 28, type: "service", username: null },
          { ID: 29, type: "property", username: null },
          { ID: 30, type: "goJail", username: null },
          { ID: 31, type: "property", username: null },
          { ID: 32, type: "property", username: null },
          { ID: 33, type: "comunal", username: null },
          { ID: 34, type: "property", username: null },
          { ID: 35, type: "railway", username: null },
          { ID: 36, type: "lucky", username: null },
          { ID: 37, type: "property", username: null },
          { ID: 38, type: "taxVip", username: null },
          { ID: 39, type: "property", username: null }],
        dataPlayers: {
          target3: { username: null, status: false, box: 0, x: 120, y: 40 },
          target4: { username: null, status: false, box: 0, x: 40, y: 40 },
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
      };
      gameRoom.dataPlayers.target2 = {
        username: gameRoom.order[1],
        henryCoin: 1500,
        cards: [],
        status: true,
        box: 0,
        x: 40,
        y: 120,
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
   const response = await client.get(`gameRoom${username}`);
    const listPlayer = JSON.parse(response).order;
    listPlayer.forEach(async (player) => {
      await client.del(`playersInGame${player}`);
    });
    clearTimer(username); 
    await callbackTest(1500);
    await client.del(`gameRoom${username}`);
    listPlayer.forEach(async (player) => {
      io.sockets.in(player).emit('setGame', {
        status: "statusGame",
        type: "endGame",
      });
    });
  }
  const meEnd = async (username, io) => {
    try {
    const responseRoom = await client.get(`playersInGame${username}`);
    const response = await client.get(`gameRoom${responseRoom}`);
    var room = JSON.parse(response);
    if (room.order.length === 2) {
      gameOver(room.host, io)
    } else {
      let target;
      let meTurn = false
      if (room.actualTurn === username) {
       clearTimer(username)
       await callbackTest(1200);
        room.actualTurn = room.order[1]
        room.order.shift()
        meTurn = true
      } else {
        room.order = room.order.filter((players) => players !== username)
      }
      for (let i = 1; i < 5; i++) {
        if (room.dataPlayers[`target${i}`].username === username) {
          target = `target${i}`
          room.dataPlayers[`target${i}`].status = false
        
        };
      };
      room.move = true;
      await client.set(`gameRoom${responseRoom}`, JSON.stringify(room));
      await client.del(`playersInGame${username}`)
      room.order.forEach((player) => {
        io.sockets.in(player).emit('setGame', {
          status: "statusGame",
          type: "exitPlayer",
          info: { target: target, turn: { actualTurn: room.actualTurn, order: room.order } }
        });
      })
      io.sockets.in(username).emit('setGame', {
        status: "statusGame",
        type: "meEnd",
      });
  
     if (meTurn) {
        timer(room.host, io)
      } 
    }
  } catch (error) {
    console.log(error);
  }
  }
  
  const roll = async (username, io) => {
    try{
    let target;
    const responseRoom = await client.get(`playersInGame${username}`);
    const response = await client.get(`gameRoom${responseRoom}`);
    var room = JSON.parse(response);
    if (room.actualTurn === username && room.move === true) {
      let num1 = Math.floor(Math.random() * 6 + 1);
      let num2 = Math.floor(Math.random() * 6 + 1);
  
      for (let i = 1; i < 5; i++) {
        if (room.dataPlayers[`target${i}`].username === username) {
          target = `target${i}`
          room.dataPlayers[`target${i}`].box = room.dataPlayers[`target${i}`].box + num1 + num2
          if (room.dataPlayers[`target${i}`].box > 39) {
            room.dataPlayers[`target${i}`].box = room.dataPlayers[`target${i}`].box - 39
          }
        };
      };
      if (num1 !== num2) {
        room.move = false;
      }
      await client.set(`gameRoom${responseRoom}`, JSON.stringify(room))
      room.order.forEach((player) => {
        io.sockets.in(player).emit('setGame', {
          status: "roll",
          info: { target: target, move: room.dataPlayers[target].box },
          one: num1,
          two: num2,
          usernameRoll: username
        });
      })
    }
  } catch (error) {
    console.log(error);
  }
  }
  
  const passTurn = async (username, io) => {
    try{
    const host = await client.get(`playersInGame${username}`) //trae data de un player
    const responseGameRoom = await client.get(`gameRoom${host}`);
    var roomGame = JSON.parse(responseGameRoom);
    if (username === roomGame.actualTurn) {
      clearTimer(host)
      roomGame.actualTurn = roomGame.order[1];
      let arrayOrder = roomGame.order;
      let playerFinal = arrayOrder.shift();
      arrayOrder.push(playerFinal);
      roomGame.order = arrayOrder;
      roomGame.move = true;
      await client.set(`gameRoom${host}`, JSON.stringify(roomGame));
      arrayOrder.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          status: "setTurns",
          actualTurn: roomGame.actualTurn,
          order: roomGame.order,
        });
      });
      timer(host, io)
    }
  } catch (error) {
    console.log(error);
  }
  }

  module.exports = {
      goGame,
      gameOver,
      meEnd,
      roll,
      passTurn
  }