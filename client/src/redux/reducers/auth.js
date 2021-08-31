import { SET_TOKEN, SET_USER, SET_LOADING, SET_AUTH, SET_MAINTENANCE} from '../constants';

const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('access_token');

const initialState = {
  user: user && user,
	token: token ? token : null,
	isAuth: user && token ? true : false,
	isLoading: true,
  inMaintenance: false,
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
      case SET_MAINTENANCE:
        return {
          ...state, inMaintenance:payload
          }
    default: 
      return state;
  }
}

export default auth;