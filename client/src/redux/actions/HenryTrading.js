import {
  STATUS_TRADING,
  SET_HOST_TRADER,
  SET_TRADING_FULL,
} from "../constants";

export const statusTrading = (payload) => {
  return {
    type: STATUS_TRADING,
    payload: payload,
  };
};
export const setHostTrader = (payload) => {
  return {
    type: SET_HOST_TRADER,
    payload: payload,
  };
};
export const setTradingFull = (payload) => {
  console.log(payload)
  return {
    type: SET_TRADING_FULL,
    payload: payload,
  };
};
