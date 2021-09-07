import {
  SET_STATUS_TABLE,
  SET_TABLE_GAME,
  SET_DATA_DEFAULT,
  SET_DATA_TARGET
} from "../constants";
import * as AxiosApi from "./../../controllers/auth";

export const setDefault = () => {
  return async (dispatch) => {
    await callbackTest();
    try {
      const response = await AxiosApi.setDefault();
      if (response.data) {
        dispatch(getTable(response.data));
        dispatch(setPreloadTable("complete"));
      } else {
        dispatch(setPreloadTable("error"));
      }
    } catch (error) {
      dispatch(setPreloadTable("error"));
    }
  };
};
export const setPreloadTable = (status) => {
  return {
    type: SET_STATUS_TABLE,
    payload: status,
  };
};
export const getTable = (data) => {
  return {
    type: SET_TABLE_GAME,
    payload: data,
  };
};
export const resetTable = () => {
  return (dispatch) => {
    dispatch(getTable(null));
    dispatch(setPreloadTable("loading"));
  };
};
export const changeValueTable = (type, value) => {
  return {
    type: SET_DATA_DEFAULT,
    payload: {type, value},
  };
};
export const changeValueTarget = (type, value) => {
  return {
    type: SET_DATA_TARGET,
    payload: {type, value},
  };
};
const callbackTest = () => {
  return new Promise((resolve) => setTimeout(resolve, 1500));
};
