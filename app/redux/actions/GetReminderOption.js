import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getReminderOption = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_REMINDER_OPTION});
    let url = `${BASE_URL}/get-reminder-options`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getReminderOption URL := ', url);
        // console.log('getReminderOption Header := ', header);
        // console.log('getReminderOption Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_REMINDER_OPTION,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_REMINDER_OPTION,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getReminderOption Action Error Response :=\n', error);
        dispatch({type: Actions.GET_REMINDER_OPTION, payload: error});
      });
  };
};
