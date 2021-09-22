import {
  STATUS_TRADING,
  SET_HOST_TRADER,
  SET_TRADING_FULL,
  SET_TRADE_OFERT_HOST,
  SET_TRADE_OFERT_OPONENT,
  SET_HOST_HENRY_COIN,
  SET_OPONENT_HENRY_COIN,
  SET_HOST_CONFIRMATION,
  SET_TARGET_CONFIRMATION
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
  return {
    type: SET_TRADING_FULL,
    payload: payload,
  };
};
export const setTradeOfertHost = (payload) => {
  return {
    type: SET_TRADE_OFERT_HOST,
    payload: payload,
  };
};
export const setTradeOfertOponent = (payload) => {
  return {
    type: SET_TRADE_OFERT_OPONENT,
    payload: payload,
  };
};
export const setHostHenryCoin = (payload) => {
  return {
    type: SET_HOST_HENRY_COIN,
    payload: payload,
  };
};
export const setTargetHenryCoin = (payload) => {
  return {
    type: SET_OPONENT_HENRY_COIN,
    payload: payload,
  };
};
export const setHostConfirmation = (payload) => {
  return {
    type: SET_HOST_CONFIRMATION,
    payload: payload,
  };
};
export const setTargetConfirmation = (payload) => {
  return {
    type: SET_TARGET_CONFIRMATION,
    payload: payload,
  };
};