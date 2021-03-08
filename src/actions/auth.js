import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = (id) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = await axios.get(`http://localhost:8080/api/profile/${id}`);

    dispatch({
      type: USER_LOADED,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({ firstName, lastName, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({ firstName, lastName, email, password });

  try {
    const { data } = await axios.post('https://recip-easy01.herokuapp.com/register', body, config);
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

  } catch (e) {
    dispatch({
      type: REGISTER_FAIL
    })
    console.log(e)
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const { data } = await axios.post('https://recip-easy01.herokuapp.com/login', body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};