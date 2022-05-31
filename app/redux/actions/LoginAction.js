import {BASE_URL} from 'config';
import * as actions from '../Types';

export const loginUser = body => {
  return dispatch => {
    dispatch({type: actions.LOGIN_USER});
    let url = `${BASE_URL}/user-login`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(response => {
        // console.log('loginUser URL := ', url);
        // console.log('loginUser body := ', body);
        // console.log('loginUser Response := ', response);
        if (response) {
          return dispatch({
            type: actions.LOGIN_USER,
            payload: response,
          });
        } else {
          return dispatch({type: actions.LOGIN_USER, payload: response});
        }
      })
      .catch(error => {
        // console.log('loginUser Error Response :=\n', error);
        dispatch({type: actions.LOGIN_USER, payload: error});
      });
  };
};
