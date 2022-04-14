import {BASE_URL} from 'config';
import * as actions from '../Types';

export const loginUser = (header, body) => {
  return dispatch => {
    dispatch({type: actions.LOGIN_USER});
    let url = `${BASE_URL}/users/userLogin`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    })
      .then(res => res.json())
      .then(response => {
        console.log('URL := ', url);
        console.log('header := ', header);
        console.log('body := ', body);
        console.log('Response := ', response);
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
        console.log('loginUser Error Response :=\n', error);
        dispatch({type: actions.LOGIN_USER, payload: error});
      });
  };
};
