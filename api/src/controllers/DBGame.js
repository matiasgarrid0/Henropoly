var playersInGame = {};
let playersInHold = {};
var waitingRoom = {};
var gameRoom = {};
var timers = {};
const randomArray = (arr) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
const createRoom = (username) => {
  waitingRoom[username] = {
    host: username,
    players: [],
  };
  playersInHold[username] = { username: username, host: username };
};
const deleteRoom = (username) => {
  let freePlayers = waitingRoom[username].players;
  freePlayers.push(username);
  delete waitingRoom[username];
  for (let i = 0; i < freePlayers.length; i++) {
    delete playersInHold[freePlayers[i]];
  }
  return freePlayers;
};
const joinRoom = (username, host) => {
  if (waitingRoom[host]) {
    if (
      waitingRoom[host].host !== username &&
      waitingRoom[host].players.length < 3 &&
      !waitingRoom[host].players.includes(username)
    ) {
      waitingRoom[host].players.push(username);
      playersInHold[username] = { username: username, host: host };
      return ["successful", waitingRoom[host]];
    }
  }
  return ["fail"];
};
const leaveRoom = (username) => {
  let players = waitingRoom[playersInHold[username].host].players.filter(
    (player) => player !== username
  );
  waitingRoom[playersInHold[username].host].players = players;
  let host = playersInHold[username].host;
  delete playersInHold[username];
  return ["successful", players, waitingRoom[host], host];
};

const searchStatus = (username) => {
  if (playersInHold[username]) {
    return {
      status: "inHold",
      room: waitingRoom[playersInHold[username].host],
    };
  }
  if (playersInGame[username]) {
    return {
      status: "inGame",
      data: gameRoom[playersInGame[username].host],
    };
  }
  return { status: "free" };
};
const timer = (room, io) => {
  timers[room] = setInterval(
    () => {
      console.log("cambio turno");
      gameRoom[room].actualTurn = gameRoom[room].order[1];
      let arrayOrder = gameRoom[room].order;
      let playerFinal = arrayOrder.shift();
      arrayOrder.push(playerFinal);
      gameRoom[room].order = arrayOrder;
      arrayOrder.forEach((player) => {
        io.sockets.in(player).emit("setGame", {
          status: "setTurns",
          actualTurn: gameRoom[room].actualTurn,
          order: gameRoom[room].order,
        });
      });
    },
    20000,
    "JavaScript"
  );
};
const clearTimer = (room) => {
  clearInterval(room);
};
const goGame = (username, io) => {
  let players = deleteRoom(username);
  players.forEach((player) => {
    playersInGame[player] = { username: player, host: username };
  });
  let orden = randomArray(players);
  gameRoom[username] = {
    status: "inGame",
    host: username,
    order: orden,
    actualTurn: orden[0],
    dataPlayers: {
      target3: { username: null, status: false, box: 0, x: 120, y: 40 },
      target4: { username: null, status: false, box: 0, x: 40, y: 40 },
    },
  };
  gameRoom[username].dataPlayers.target1 = {
    username: gameRoom[username].order[0],
    status: true,
    box: 0,
    x: 120,
    y: 120,
  };
  gameRoom[username].dataPlayers.target2 = {
    username: gameRoom[username].order[1],
    status: true,
    box: 0,
    x: 40,
    y: 120,
  };
  if (gameRoom[username].order[2]) {
    gameRoom[username].dataPlayers.target2 = {
      username: gameRoom[username].order[2],
      status: true,
      box: 0,
      x: 120,
      y: 40,
    };
  }
  if (gameRoom[username].order[3]) {
    gameRoom[username].dataPlayers.target2 = {
      username: gameRoom[username].order[3],
      status: true,
      box: 0,
      x: 40,
      y: 40,
    };
  }
  timer(username, io);
  return [orden, gameRoom[username]];
};
module.exports = {
  playersInGame,
  playersInHold,
  waitingRoom,
  gameRoom,
  createRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
  goGame,
  searchStatus,
};
