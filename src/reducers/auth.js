import {
    REGISTER_SUCCESS,
    AUTH_ERROR,
    USER_LOADED,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGOUT
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {

      case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          token: localStorage.getItem('token'),
          user: payload,
          isAuthenticated: true,
          loading: false
        };
        
      case AUTH_ERROR:
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
        };

      default:
        return state;
    }
  }
  