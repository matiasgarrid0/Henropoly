import axios from "axios";
import {
  GET_INFO,
  POST_PLAYERS,
  SET_STATUS_INFO,
  FILTER_COMUNAL_RANDOM,
  FILTER_LUCKY_RANDOM,
} from "../constants";

export const getInfoDb = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/cards`, {});
      dispatch(setStatusInfo());
      return dispatch({ type: GET_INFO, payload: response.data });
    } catch (error) {}
  };
};
export const setStatusInfo = () => {
  return { type: SET_STATUS_INFO, payload: true };
};

export function postPlayer(payload) {
  return async function (dispatch) {
    const response = await axios.post("/game/RegisterGame", payload);
    return dispatch({ type: POST_PLAYERS, payload: response.data });
  };
}
export const filterComunalRandom = (type) => {
  return { type: FILTER_COMUNAL_RANDOM, payload: type };
};
export const filterLuckyRandom = (type) => {
  return { type: FILTER_LUCKY_RANDOM, payload: type };
};
