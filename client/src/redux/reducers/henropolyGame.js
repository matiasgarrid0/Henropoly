import {
  SET_GAME,
  SET_TARGET_VALUE,
  SET_TURNS,
  KICK_PLAYER,
  SET_GAME_STATUS,
  SET_GAME_ROLL,
  BUY_PROPERTY_ACTION,
  SET_MOVE_TURN,
  SET_BALANCE,
  GO_TO_JAIL
} from "../constants";

const initialState = {
  status: "free",
  host: null,
  order: [],
  actualTurn: null,
  dataPlayers: {},
};
const henropolyGame = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GAME:
      return payload;
    case SET_TARGET_VALUE:
      return {
        ...state,
        dataPlayers: {
          ...state.dataPlayers,
          [payload.player]: {
            ...state.dataPlayers[payload.player],
            [payload.data]: payload.value,
          },
        },
      };
    case SET_TURNS:
      return {
        ...state,
        order: payload.order,
        actualTurn: payload.actualTurn,
      };
    case SET_BALANCE:
      return {
        ...state,
        dataPlayers: {
          ...state.dataPlayers,
          [payload.target]: {
            ...state.dataPlayers[payload.target],
            henryCoin: payload.henryCoin,
          },
        },
      };
    case SET_MOVE_TURN:
      return {
        ...state,
        move: payload,
      };
    case KICK_PLAYER:
      return {
        ...state,
        dataPlayers: {
          ...state.dataPlayers,
          [payload]: { ...state.dataPlayers[payload], status: false },
        },
      };
    case SET_GAME_STATUS:
      return {
        ...state,
        status: payload,
      };
    case BUY_PROPERTY_ACTION:
      let newTable = state.table;
      newTable[payload.box].owner =
        state.dataPlayers[payload.newProperty].username;
      return {
        ...state,
        table: newTable,
        dataPlayers: {
          ...state.dataPlayers,
          [payload.newProperty]: {
            ...state.dataPlayers[payload.newProperty],
            henryCoin: payload.newbalase,
          },
        },
      };
    case SET_GAME_ROLL: {
      return {
        ...state,
        dataPlayers: {
          ...state.dataPlayers,
          [payload.target]: {
            ...state.dataPlayers[payload.target],
            box: payload.move,
          },
        }
      }
      }
 
    case GO_TO_JAIL:
      return { 
        ...state,
        dataPlayers:{
          ...state.dataPlayers,        
        [payload.info.target]: {...state.dataPlayers[payload.info.target], box: payload.box}}
      };

    default:
      return state;
  };
}
/*
 box: 10
info:
move: 10
target: "target2"
[[Prototype]]: Object
newProperty: "target2"
status: "goToJail"
[[Prototype]]: Object */

export default henropolyGame;
