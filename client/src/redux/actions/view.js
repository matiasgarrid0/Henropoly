import { SET_VIEW } from "../constants";

export const setView = (type, value) => {
  return {
    type: SET_VIEW,
    payload: { type, value },
  };
};

