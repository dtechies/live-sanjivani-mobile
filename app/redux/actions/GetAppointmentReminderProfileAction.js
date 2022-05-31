import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getAppointmentReminderProfile = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_APPOINTMENT_REMINDER_PROFILE});
    let url = `${BASE_URL}/get-appointment-reminder-profile`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getAppointmentReminderProfile URL := ', url);
        // console.log('getAppointmentReminderProfile header := ', header);
        // console.log('getAppointmentReminderProfile Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_APPOINTMENT_REMINDER_PROFILE,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_APPOINTMENT_REMINDER_PROFILE,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getAppointmentReminderProfile Action Error Response :=\n',
        //   error,
        // );
        dispatch({
          type: Actions.GET_APPOINTMENT_REMINDER_PROFILE,
          payload: error,
        });
      });
  };
};
