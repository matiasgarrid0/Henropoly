const { client, timers, timerSec, seconds } = require('./')

const sendTimer = async (username, io) => {
    try {
    const responseGameRoom = await client.get(`gameRoom${username}`);
    const roomGame = JSON.parse(responseGameRoom);
    if(roomGame !== null) {
   
       roomGame.order.forEach((player) => {
      io.sockets.in(player).emit("timer", seconds[username]);
    });
    } else {
     
       clearTimer(username)
    }
  } catch (error) {
    console.log(error);
  }
  };
  
  
  const timer = (username, io) => {
    try{
    seconds[username] = 120
    sendTimer(username, io);
    timerSec[username] = setInterval(async () => {
      seconds[username] = seconds[username] - 1;
      sendTimer(username, io)
    }, 1000);
    timers[username] = setInterval(
      async () => {
        seconds[username] = 120
        clearInterval(timerSec[username]);
        sendTimer(username, io);
        timerSec[username] = setInterval(async () => {
          seconds[username] = seconds[username] - 1;
          sendTimer(username, io)
        }, 1000);
        console.log("cambio turno");
        const responseGameRoom = await client.get(`gameRoom${username}`);
        var roomGame = JSON.parse(responseGameRoom);
        roomGame.actualTurn = roomGame.order[1];
        let arrayOrder = roomGame.order;
        let playerFinal = arrayOrder.shift();
        arrayOrder.push(playerFinal);
        roomGame.order = arrayOrder;
        roomGame.move = true;
        await client.set(`gameRoom${username}`, JSON.stringify(roomGame));
        arrayOrder.forEach((player) => {
          io.sockets.in(player).emit("setGame", {
            status: "setTurns",
            actualTurn: roomGame.actualTurn,
            order: roomGame.order,
          });
        });
      },
      120000,
      "JavaScript"
    );
  } catch (error) {
    console.log(error);
  }
  };
  
  const clearTimer = (username) => {
    clearInterval(timers[username]);
    clearInterval(timerSec[username]);
  
  };

  module.exports = {
      sendTimer,
      timer,
      clearTimer
  }