import { SET_GAME, SET_TARGET_VALUE, SET_TURNS, KICK_PLAYER, SET_GAME_STATUS, SET_GAME_ROLL} from "../constants";

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
  return (dispatch) => {
  dispatch(setTurns(player.turn))
  return {
    type: KICK_PLAYER,
    payload: player.target,
  };
 }
};

export const setGameStatus = (payload) => {
  return {
    type:SET_GAME_STATUS,
    payload: payload,
  };
};

export const setGameRoll = (payload) => {
  return {
    type:SET_GAME_ROLL,
    payload: payload,
  };
};