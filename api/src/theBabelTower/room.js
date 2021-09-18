const { client, timers, timerSec, seconds } = require('./')


//funciones relacionadas con salas de espera y estados
const searchStatus = async (username) => {
    try {
        const ResponsePlayersInHold = await client.get(`playersInHold${username}`)//reset aqui
        if (ResponsePlayersInHold !== null) {
            const responseWaitingRoom = await client.get(
                `waitingRoom${ResponsePlayersInHold}`
            );
            return { status: "inHold", room: JSON.parse(responseWaitingRoom) };
        }
        const ResponsePlayersInGame = await client.get(`playersInGame${username}`);//reset aqui
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


module.exports = {
    searchStatus,
    createRoom,
    deleteRoom,
    joinRoom,
    leaveRoom
}