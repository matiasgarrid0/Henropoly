import axios from "axios";
import { SET_TOKEN, SET_USER, SET_LOADING, SET_AUTH, SET_MAINTENANCE} from "../constants";
const { URL_API } = process.env;

export const register = ( username, email, password ) => {
  const data = {
    username: username,
    email: email,
    password: password
  }
  console.log(data)
  return async (dispatch) =>{
    dispatch(setLoading(true));
    try {
      const response = await axios.post( `localhost:3001/auth/signUp`,data)
      if(response.data){
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        dispatch(setAuthenticate(true));
      } else {
        dispatch(logOut());
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setMaintenance(true));
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
  };
  export const logOut = () => {
    return (dispatch) => {
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      dispatch(setToken(null));
      dispatch(setAuthenticate(false));
    };
  };
  export const setMaintenance = (bolean) => {
    return {
      type: SET_MAINTENANCE,
      payload: bolean,
    };
  };