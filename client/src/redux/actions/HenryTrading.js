import { STATUS_TRADING } from "../constants";

export const statusTrading = (payload) => {
  return {
    type: STATUS_TRADING,
    payload: payload,
  };
};