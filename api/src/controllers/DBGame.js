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
const randomArray = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
//funciones relacionadas con salas de espera y estados
const searchStatus = async (username) => {
  try {
    const ResponsePlayersInHold = await client.get(`playersInHold${username}`)
    if (ResponsePlayersInHold !== null) {
      const responseWaitingRoom = await client.get(
        `waitingRoom${ResponsePlayersInHold}`
      );
      return { status: "inHold", room: JSON.parse(responseWaitingRoom) };
    }
    const ResponsePlayersInGame = await client.get(`playersInGame${username}`);
    if (ResponsePlayersInGame !== null) {
      const responseGameRoom = await client.get(
        `gameRoom${ResponsePlayersInGame}`
      );
      return {
        status: "inGame",
        data: JSON.parse(responseGameRoom),
      };
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
      const value = JSON.stringify({
        host: username,
        players: [],
      });
      await client.set(`playersInHold${username}`, username);
      await client.set(`waitingRoom${username}`, value);
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
const timer = (username, io) => {
  timers[username] = setInterval(
    async () => {
      console.log("cambio turno");
      const responseGameRoom = await client.get(`gameRoom${username}`);
      var roomGame = JSON.parse(responseGameRoom);
      roomGame.actualTurn = roomGame.order[1];
      let arrayOrder = roomGame.order;
      let playerFinal = arrayOrder.shift();
      arrayOrder.push(playerFinal);
      roomGame.order = arrayOrder;
      await client.set(`gameRoom${username}`, JSON.stringify(roomGame));
      arrayOrder.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          status: "setTurns",
          actualTurn: roomGame.actualTurn,
          order: roomGame.order,
        });
      });
    },
    10000,
    "JavaScript"
  );
};
const clearTimer = (username) => {
  clearInterval(timers[username]);
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
    var gameRoom = {
      status: "inGame",
      host: username,
      order: orden,
      actualTurn: orden[0],
      dataPlayers: {
        target3: { username: null, status: false, box: 0, x: 120, y: 40 },
        target4: { username: null, status: false, box: 0, x: 40, y: 40 },
      },
    };
    gameRoom.dataPlayers.target1 = {
      username: gameRoom.order[0],
      status: true,
      box: 0,
      x: 120,
      y: 120,
    };
    gameRoom.dataPlayers.target2 = {
      username: gameRoom.order[1],
      status: true,
      box: 0,
      x: 40,
      y: 120,
    };
    if (gameRoom.order[2]) {
      gameRoom.dataPlayers.target2 = {
        username: gameRoom.order[2],
        status: true,
        box: 0,
        x: 120,
        y: 40,
      };
    }
    if (gameRoom.order[3]) {
      gameRoom.dataPlayers.target2 = {
        username: gameRoom.order[3],
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
    io.sockets.in(player).emit('setGame', {
      status: "statusGame",
      type: "endGame",
    });
  });
  clearTimer(username);
  await client.del(`gameRoom${username}`);
}
const meEnd = async (username, io) => {
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
      type: "meExit",
    });

    if (meTurn) {
      timer(room.host, io)
    }
  }
}

module.exports = {
  createRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
  goGame,
  searchStatus,
  gameOver,
  meEnd
};