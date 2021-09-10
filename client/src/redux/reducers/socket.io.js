import { CONNECT_SOCKET } from "../constants";

const initialState = {
  socket: null,
};

const socketIO = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONNECT_SOCKET:
      return {
        ...state,
        socket: payload,
      };
    default:
      return state;
  }
};

export default socketIO;
