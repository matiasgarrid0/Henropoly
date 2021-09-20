import {
  STATUS_TRADING,
  SET_HOST_TRADER,
  SET_TRADING_FULL,
} from "../constants";

const initialState = {
  //tradeStatus: 'inTrading',
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
  hostHenryCoin: 0,
  targetHenryCoin: 0,
  hostTotalHenryCoin: 0,
  targetTotalHenryCoin: 0,
};
const henryTrading = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
