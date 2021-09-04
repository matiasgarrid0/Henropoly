import {
  SET_STATUS_TABLE,
  SET_TABLE_GAME,
  SET_DATA_DEFAULT,
} from "../constants";

const initialState = {
  statusTable: "loading",
  tableGame: null,
  actualGame: false,
  tableDefault: {
    scale: 0.7,
  },
};

const game = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_STATUS_TABLE:
      return {
        ...state,
        statusTable: payload,
      };
    case SET_TABLE_GAME:
      return {
        ...state,
        tableGame: payload,
      };
    case SET_DATA_DEFAULT:
      return {
        ...state,
        tableDefault: { ...state.tableDefault, [payload.type]: payload.value },
      };
    default:
      return state;
  }
};

export default game;
