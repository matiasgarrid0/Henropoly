const jwt = require("jsonwebtoken");
const { AUTH_SECRET } = process.env;
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
/* const { searchStatus,
  createRoom,
  deleteRoom,
  joinRoom,
  leaveRoom } = require('./theBabelTower/room');
const {
  goGame,
  gameOver,
  meEnd,
  roll,
  passTurn
} = require('./theBabelTower/basicGame'); */
const {
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
  initialTrade,
  acceptTrade,
  addTradeOfert,
  RemoveTradeOfert,
  setHenryCoin,
  setConfirmation,
  cancelTrade,
  selectAvatar
  /*luckyOrArc,
  gameActionsBoard*/
} = require("./controllers/theBabelTower.js");
const server = express();
const http = require("http").createServer(server);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", async (socket) => {
  //autentificacion:
  try {
    var decoded = await jwt.verify(socket.handshake.query.token, AUTH_SECRET);
    socket.join(decoded.user.username);
  } catch (err) {
    socket.disconnect();
  }
  //verificacion de estado desde roomm
  try {
    io.sockets
      .in(decoded.user.username)
      .emit("roomStatus", await searchStatus(decoded.user.username));
    //componente room
    socket.on("setRoom", async (data) => {
      if (data.type === "create") {
        await createRoom(decoded.user.username, io);
      } else if (data.type === "delete") {
        await deleteRoom(decoded.user.username, io);
      } else if (data.type === "join") {
        await joinRoom(decoded.user.username, data.host, io);
      } else if (data.type === "leaveRoom") {
        await leaveRoom(decoded.user.username, io);
      } else if (data.type === "kickPlayer") {
        await leaveRoom(data.player, io);
      } else if (data.type === "goGame") {
        await goGame(decoded.user.username, io);
      } else if (data.type === "selectAvatar") {
        await selectAvatar(data, io);
      }
    });
    socket.on("roomStatus", () => {});
    //gameDashboard
    socket.on("log", () => {});
    socket.on("setGame", () => {});
    socket.on("gameDashboard", async (data) => {
      if (data.type === "gameOver") {
        await gameOver(decoded.user.username, io);
      } else if (data.type === "meEnd") {
        await meEnd(decoded.user.username, io);
      } else if (data.type === "roll") {
        await roll(decoded.user.username, io);
      } else if (data.type === "passTurn") {
        await passTurn(decoded.user.username, io);
      }
      // }else if (data.type === "gameActionsBoard"){
      //   await gameActionsBoard(decoded.user.username, io)
      // }
    });
    //TradeDashboard
    socket.on("TradeDashboard", async (data) => {
      if (data.type === "buyProperty") {
        buyProperty(decoded.user.username, data.box, io);
      } else if (data.type === "buyRailway") {
        buyRailway(decoded.user.username, data.box, io);
      } else if (data.type === "buyService") {
        buyService(decoded.user.username, data.box, io);
      } else if (data.type === "goToJail") {
        goToJail(decoded.user.username, data.box, io);
      }
    });
    //timer
    socket.on("timer", () => {});
    //chat global
    socket.on("sendGlobal", (data) => {
      io.emit("chatGlobal", {
        username: decoded.user.username,
        message: data.message,
      });
    });
    socket.on("chatGlobal", () => {});
    socket.on("disconnect", () => {});
    //trader:
    socket.on("sendTrade", async (data) => {
      if (data.type === "initialTrade") {
        await initialTrade(data.host, decoded.user.username, data.target, io);
      } else if (data.type === "acceptTrade") {
        await acceptTrade(data.host, decoded.user.username, io);
      } else if (data.type === "addTradeOfert") {
        await addTradeOfert(data, io);
      } else if (data.type === "RemoveTradeOfert") {
        await RemoveTradeOfert(data, io);
      } else if (data.type === "setHenryCoin") {
        await setHenryCoin(data, io);
      } else if (data.type === "setConfirmation") {
        await setConfirmation(data, io);
      } else if (data.type === "cancelTrade") {
        await cancelTrade(data, io);
      }
    });
    socket.on("Trading", () => {});
  } catch (err) {
    console.log(err);
  }
});

server.name = "API";
// si funca deployear
//server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(
  cors({
    origin: "*",
  })
);
server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = http;
