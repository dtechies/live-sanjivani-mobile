import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getMedicineReminderProfile = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_MEDICINE_REMINDER_PROFILE});
    let url = `${BASE_URL}/get-medicine-reminder-profile`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getMedicineReminderProfile URL := ', url);
        // console.log('getMedicineReminderProfile Header := ', header);
        // console.log('getMedicineReminderProfile Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_MEDICINE_REMINDER_PROFILE,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_MEDICINE_REMINDER_PROFILE,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getMedicineReminderProfile Action Error Response :=\n',
        //   error,
        // );
        dispatch({type: Actions.GET_MEDICINE_REMINDER_PROFILE, payload: error});
      });
  };
};
