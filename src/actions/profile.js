import axios from 'axios';
import { GET_PROFILE } from './types';

export const getCurrentProfile = () => async dispatch => {
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('id'); 

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };

  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_HOST}/profile/${id}`, config);

    dispatch({
      type: GET_PROFILE,
      payload: data,
    });
  } catch (err) {
    console.log(err)
  }
};