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

const initialState = {
  tradeStatus: null,
  hostUsername: null,
  hostTrading: null,
  targetUsername: null,
  targetTrading: null,
  hostStatus: false,
  targetStatus: false,
  hostTradeCard: [],
  hostCard: [],
  targetTradeCard: [],
  targetCard: [],
  hostTradeCardIncludes: [],
  targetTradeCardIncludes: [],
  hostHenryCoin: 0,
  targetHenryCoin: 0,
  hostTotalHenryCoin: 0,
  targetTotalHenryCoin: 0,
};
const henryTrading = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_HOST_CONFIRMATION:
      return {
        ...state,
        hostStatus: payload,
      };
    case SET_TARGET_CONFIRMATION:
      return {
        ...state,
        targetStatus: payload,
      };
    case SET_HOST_HENRY_COIN:
      return {
        ...state,
        hostHenryCoin: payload.hostHenryCoin,
      };
    case SET_OPONENT_HENRY_COIN:
      return {
        ...state,
        targetHenryCoin: payload.targetHenryCoin,
      };
    case SET_TRADE_OFERT_HOST:
      return {
        ...state,
        hostTradeCard: payload.hostTradeCard,
        hostTradeCardIncludes: payload.hostTradeCardIncludes,
      };
    case SET_TRADE_OFERT_OPONENT:
      return {
        ...state,
        targetTradeCard: payload.targetTradeCard,
        targetTradeCardIncludes: payload.targetTradeCardIncludes,
      };
    case STATUS_TRADING:
      return {
        ...state,
        tradeStatus: payload,
      };
    case SET_HOST_TRADER:
      return {
        ...state,
        hostUsername: payload.hostUsername,
        hostTrading: payload.hostTrading,
      };
    case SET_TRADING_FULL:
      return payload;
    default:
      return state;
  }
};

export default henryTrading;