import {BASE_URL} from 'config';
import * as actions from '../Types';

export const registerUser = body => {
  return dispatch => {
    dispatch({type: actions.REGISTER_USER});
    let url = `${BASE_URL}/register-user`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(response => {
        // console.log('registerUser URL := ', url);
        // console.log('registerUser body := ', body);
        // console.log('registerUser Response := ', response);
        if (response) {
          return dispatch({
            type: actions.REGISTER_USER,
            payload: response,
          });
        } else {
          return dispatch({type: actions.REGISTER_USER, payload: response});
        }
      })
      .catch(error => {
        // console.log('registerUser Error Response :=\n', error);
        dispatch({type: actions.REGISTER_USER, payload: error});
      });
  };
};
