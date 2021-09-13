const jwt = require("jsonwebtoken");
const { AUTH_SECRET } = process.env;
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const {
  createRoom,
  deleteRoom,
  joinRoom,
  leaveRoom,
  goGame,
  searchStatus,
} = require("./controllers/DBGame");
const server = express();
const http = require("http").createServer(server);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", async (socket) => {
  try {
    var decoded = await jwt.verify(socket.handshake.query.token, AUTH_SECRET);
    socket.join(decoded.user.username);
  } catch (err) {
    socket.disconnect();
  }

  io.sockets
    .in(decoded.user.username)
    .emit("roomStatus", searchStatus(decoded.user.username));

  socket.on("setRoom", (data) => {
    if (data.type === "create") {
      createRoom(decoded.user.username);
      io.sockets.in(decoded.user.username).emit("roomStatus", {
        status: "inHold",
        room: { host: decoded.user.username, players: [] },
      });
    } else if (data.type === "delete") {
      const arrayFree = deleteRoom(decoded.user.username);
      arrayFree.forEach((player) => {
        io.sockets.in(player).emit("roomStatus", {
          status: "free",
        });
      });
    } else if (data.type === "join") {
      const result = joinRoom(decoded.user.username, data.host);
      if (result[0] === "successful") {
        result[1].players.forEach((player) => {
          io.sockets.in(player).emit("roomStatus", {
            status: "inHold",
            room: result[1],
          });
        });
        io.sockets.in(data.host).emit("roomStatus", {
          status: "inHold",
          room: result[1],
        });
      }
    } else if (data.type === "leaveRoom") {
      const result = leaveRoom(decoded.user.username);
      if (result[0] === "successful") {
        result[1].forEach((player) => {
          io.sockets.in(player).emit("roomStatus", {
            status: "inHold",
            room: result[2],
          });
        });
        io.sockets.in(result[3]).emit("roomStatus", {
          status: "inHold",
          room: result[2],
        });
        io.sockets.in(decoded.user.username).emit("roomStatus", {
          status: "free",
        });
      }
    } else if (data.type === "kickPlayer") {
      const result = leaveRoom(data.player);
      if (result[0] === "successful") {
        result[1].forEach((player) => {
          io.sockets.in(player).emit("roomStatus", {
            status: "inHold",
            room: result[2],
          });
        });
        io.sockets.in(result[3]).emit("roomStatus", {
          status: "inHold",
          room: result[2],
        });
        io.sockets.in(data.player).emit("roomStatus", {
          status: "free",
        });
      }
    } else if (data.type === "goGame") {
      const result = goGame(decoded.user.username, io);
      result[0].forEach((player) => {
        io.sockets.in(player).emit("roomStatus", {
          status: "inGame",
          data: result[1],
        });
      });
    }
  });
  socket.on("roomStatus", () => {});
  socket.on("setGame", () => {});
  socket.on('sendGlobal', (data) => {
    io.emit('chatGlobal', {
      username: decoded.user.username,
      message: data.message
    });
  });
  socket.on("chatGlobal", () => {
  });
  socket.on("disconnect", () => {});
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
