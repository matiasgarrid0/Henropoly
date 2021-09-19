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
  SET_BUY_BOX
} from "../constants";

export const setGame = (data) => {
  return {
    type: SET_GAME,
    payload: data,
  };
};
export const setTargetValue = (player, data, value) => {
  return {
    type: SET_TARGET_VALUE,
    payload: { player, data, value },
  };
};
export const setTurns = (payload) => {
  return {
    type: SET_TURNS,
    payload: payload,
  };
};

export const kickPlayer = (player) => {
  return {
    type: KICK_PLAYER,
    payload: player,
  };
};

export const setGameStatus = (payload) => {
  return {
    type: SET_GAME_STATUS,
    payload: payload,
  };
};

export const setGameRoll = (payload) => {
  return {
    type: SET_GAME_ROLL,
    payload: payload,
  };
};
export const buyPropertyAction = (payload) => {
  return {
    type: BUY_PROPERTY_ACTION,
    payload: payload,
  };
}

 export const goToJail= (payload) => {
  return {
    type: GO_TO_JAIL,
    payload: payload,
  };
 }
export const setMoveTurn = (payload) => {
  return {
    type: SET_MOVE_TURN,
    payload: payload,
  };
};
export const setBuyBox = (payload) => {
  return {
    type: SET_BUY_BOX,
    payload: payload, //{box:1, target: 'target1',}
  };
};
export const setBalance = (payload) => {
  return {
    type: SET_BALANCE,
    payload: payload, //{target:"target1",henryCoin:1700,}
  };
};
