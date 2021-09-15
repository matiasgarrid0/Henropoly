import { SET_VIEW } from "../constants";

const initialState = {
  view: {
    scale: 0.6,
    high: 70,
    angle: 0,
  },
};
const view = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_VIEW:
      return {
        ...state,
        view: { ...state.view, [payload.type]: payload.value },
      };
    default:
      return state;
  }
};

export default view;