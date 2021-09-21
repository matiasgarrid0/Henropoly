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
  GO_TO_JAIL,
  PLAYER_GAME_IS_OVER,
  TOKEN_PLAYERS

} from "../constants";

const initialState = {
  status: "free",
  host: null,
  order: [],
  actualTurn: null,
  dataPlayers: {},
  tokensDataPlayers:[]
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
      case TOKEN_PLAYERS: 
      return {
        ...state,
        tokensDataPlayers: payload.room
      }
    case PLAYER_GAME_IS_OVER:{
      return state; 
    }
    default:
      return state;
  };
}
/*
room:
host: "pani"
players: Array(1)
0: "berenjena"
length: 1
[[Prototype]]: Array(0)
tokens1:
owner: "pani"
token: "/static/media/toni.b38cec35.jpeg"
[[Prototype]]: Object
tokens2:
owner: "berenjena"
token: "/static/media/sele.c98664e3.jpeg"
[[Prototype]]: Object
tokens3: [{…}]
tokens4: [{…}]
[[Prototype]]: Object
*/

export default henropolyGame;
