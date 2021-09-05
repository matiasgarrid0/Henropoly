const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require ('cors')
const routes = require('./routes/index.js');
const server = express();
const { User } = require('./db.js');
const { checkTokenBySocket } = require("./controllers/Auth.js")
const http = require("http").createServer(server);
const io = require("socket.io")(http, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  let nombre;

  socket.on("conectado", (nomb) => {
    nombre = nomb;
    //socket.broadcast.emit manda el mensaje a todos los clientes excepto al que ha enviado el mensaje
    socket.broadcast.emit("mensajes", {
      nombre: nombre,
      mensaje: `${nombre} ha entrado en la sala del chat`,
    });
  });

  socket.on("mensaje", (nombre, mensaje) => {
    //io.emit manda el mensaje a todos los clientes conectados al chat
    io.emit("mensajes", { nombre, mensaje });
  });

  socket.on("disconnect", () => {
    io.emit("mensajes", {
      servidor: "Servidor",
      mensaje: `${nombre} ha abandonado la sala`,
    });
  });
});


//JOSE B

// //cuando se conecta un usuario
// socket.on("connection", async (socket) => {
//   //toma el token enviado por la conexion y decodifica el token para tener los datos del usuario
//   const user = await checkTokenBySocket(socket.handshake.query.token);
//   //hace un join con el ID del usuario - con este join ponemos enviarle mensaje a este determinado usuario
//   socket.join(user.ID);
//   //actualizamos estado de conectado en la base de datos
//   //await User.update({ connected: true }, { where: { ID: user.ID } });
//   console.log("user conectado", user);
//   //cuando se desconecta el socket
//   socket.on("disconect", async (socket) => {
//     //actualizamos estado de conectado en la base de datos
//     //await User.update({ connected: false }, { where: { ID: user.ID } });
//     console.log("user disconnect");
//   })
// });

//middleware
//usamos un mid para poder tener la conexion en las rutas 
server.use((req, res, next) => {
	req.socket = io;
	next();
});

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



module.exports = http;
