import { SET_TOKEN, SET_USER, SET_LOADING, SET_AUTH } from '../constants';

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('access_token');

const initialState = {
  user: user  ? user : null,
	token: token ? token : null,
	isAuth: user && token ? true : false,
	isLoading: true
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_TOKEN:
      return {
        ...state, token:payload
      }
    case SET_USER:
      return {
        ...state, user:payload
      }
    case SET_LOADING:
      return {
        ...state, isLoading:payload
      }
    case SET_AUTH:
    return {
      ...state, isAuth:payload
      }
    default: 
      return state;
  }
}

export default auth;