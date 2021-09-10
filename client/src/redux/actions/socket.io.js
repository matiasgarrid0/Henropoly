import { CONNECT_SOCKET } from "../constants";
import io from "socket.io-client";

export const connectSocket = (token) => {
  const socket = io("//localhost:3001", {
    reconnectionDelayMax: 10000,
    auth: {
      token: token,
    },
  });
  return {
    type: CONNECT_SOCKET,
    payload: socket,
  };
};
