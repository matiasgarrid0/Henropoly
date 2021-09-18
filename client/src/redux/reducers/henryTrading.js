import { STATUS_TRADING } from "../constants";

const initialState = {
  tradeStatus: false,
};
const henryTrading = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATUS_TRADING:
      return {
        ...state,
        tradeStatus: payload
      };
    default:
      return state;
  }
};

export default henryTrading;
