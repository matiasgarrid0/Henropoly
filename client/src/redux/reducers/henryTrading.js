import { STATUS_TRADING } from "../constants";

const initialState = {
  status: false,
};
const henryTrading = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATUS_TRADING:
      return {
        ...state,
        status: payload
      };
    default:
      return state;
  }
};

export default henryTrading;
