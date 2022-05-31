import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getAppointmentReminderAllDetail = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL});
    let url = `${BASE_URL}/add-appointment-reminder-view`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getAppointmentReminderAllDetail URL := ', url);
        // console.log('getAppointmentReminderAllDetail Header := ', header);
        // console.log('getAppointmentReminderAllDetail Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getAppointmentReminderAllDetail Action Error Response :=\n',
        //   error,
        // );
        dispatch({
          type: Actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL,
          payload: error,
        });
      });
  };
};
