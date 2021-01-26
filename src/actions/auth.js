import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    // update to fetch current user from database
    const { data } = await axios.get('/api/auth');

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
    const { data } = await axios.post('http://localhost:8096/register', body, config);
    
    const jwtRequest = {
      email,
      password
    };
    
    const response = await axios.post(' http://localhost:8096/authenticate', jwtRequest)
    
    localStorage.setItem('token', response.data.token)
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });

  } catch (e) {
    console.log(e)
  }
};