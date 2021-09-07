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
    scale: 0.6,
    high: 70,
    angle: 0,
  },
  players: {
    target1: {
      box: 0,
      wallet: 1500,
      properties: [],
      user: { ID: 1, username: "Seba", urlImage: "" },
    },
    target2: {
      box: 0,
      wallet: 1500,
      properties: [],
      user: { ID: 3, username: "FlorAdmin", urlImage: "" },
    },
    target3: {
      box: 0,
      wallet: 1500,
      properties: [],
      user: { ID: 4, username: "FacuRearte", urlImage: "" },
    },
    target4: {
      box: 0,
      wallet: 1500,
      properties: [],
      user: { ID: 5, username: "ludmila", urlImage: "" },
    },
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
