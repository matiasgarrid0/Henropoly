const jwt = require("jsonwebtoken");
const { AUTH_SECRET } = process.env;
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const server = express();
const http = require("http").createServer(server);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", async (socket) => {
  try {
    var decoded = await jwt.verify(socket.handshake.auth.token, AUTH_SECRET);
    socket.join(decoded.user.ID);
  } catch (err) {
    socket.disconnect();
  }


  socket.on("disconnect", () => {
  });
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
