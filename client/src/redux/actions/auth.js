import axios from "axios";
import { SET_TOKEN, SET_USER, SET_LOADING, SET_AUTH } from "../constants";
import * as AxiosApi from './../../controllers/auth';
//const { URL_API } = process.env;

export const register = ( username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password
  }
  return async (dispatch) =>{
    dispatch(setLoading(true));
    try {
      const response = await axios.post(`http://localhost:3001/auth/signUp`,data)
      if(response.data){
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        dispatch(setAuthenticate(true));
      } else {
        dispatch(logOut());
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(logOut());
      dispatch(setLoading(false));
    }
  } 
};

export const login = ( username, password) => {
  const data = {
    username: username,
    password: password
  }
  return async (dispatch) =>{
    dispatch(setLoading(true));
    try {
      const response = await axios.post(`http://localhost:3001/auth/signIn`,data)
      if(response.data){
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        dispatch(setAuthenticate(true));
      } else {
        dispatch(logOut());
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error)
      dispatch(logOut());
      dispatch(setLoading(false));
    }
  } 
};

export const checkToken = (token) => {
  return async (dispatch) =>{
    try {
      const response = await AxiosApi.checkToken();
      if(response.data){
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        dispatch(setAuthenticate(true));
      } else {
       dispatch(logOut());
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error)
      dispatch(logOut());
      dispatch(setLoading(false));
    }
  } 
};


export const setLoading = (bolean) => {
    return {
      type: SET_LOADING,
      payload: bolean,
    };
};

  export const setAuthenticate = (bolean) => {
    return {
      type: SET_AUTH,
      payload: bolean,
    };
  };
  export const setToken = (token) => {
    localStorage.setItem("access_token", token);
    return {
      type: SET_TOKEN,
      payload: token,
    };
  };
  export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    return {
      type: SET_USER,
      payload: user,
    };
  }

  export const logOut = () => {
    return (dispatch) => {
      dispatch(setAuthenticate(false));
      dispatch(setToken(null));
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
    };
 
};