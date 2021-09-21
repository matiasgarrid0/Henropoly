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
  SET_OWNER
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
export const setBalance = (payload) => {
  return {
    type: SET_BALANCE,
    payload: payload,
  };
};
export const serOwner = (payload) => {
  return {
    type: SET_OWNER,
    payload: payload,
  };
};

export const updateTrade =(data)=>{
  return async (dispatch) => {
    data.targetTradeCard.forEach((card) => {
      dispatch(serOwner({box:card.id ,target:data.hostTrading}));
    });
    data.hostTradeCard.forEach((card) => {
      dispatch(serOwner({box:card.id ,target:data.targetTrading}));
    });
    let newBalanceHost = data.hostTotalHenryCoin - data.hostHenryCoin + data.targetHenryCoin
    let newBalanceTarget = data.targetTotalHenryCoin - data.targetHenryCoin + data.hostHenryCoin
    dispatch(setBalance({target:data.hostTrading, henryCoin:newBalanceHost}))
    dispatch(setBalance({target:data.targetTrading, henryCoin:newBalanceTarget}))
  };
}