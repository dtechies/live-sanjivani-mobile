import {BASE_URL} from 'config';
import * as actions from '../Types';

export const addAppointmentReminder = (body, header) => {
  const {token} = header;

  return dispatch => {
    dispatch({type: actions.ADD_APPOINTMENT_REMINDER});
    let url = `${BASE_URL}/add-appointment-reminder`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: body,
    })
      .then(res => res.json())
      .then(response => {
        // console.log('addAppointmentReminder URL := ', url);
        // console.log('addAppointmentReminder body := ', body);
        // console.log('addAppointmentReminder header := ', header);
        // console.log('addAppointmentReminder Response := ', response);
        if (response) {
          return dispatch({
            type: actions.ADD_APPOINTMENT_REMINDER,
            payload: response,
          });
        } else {
          return dispatch({
            type: actions.ADD_APPOINTMENT_REMINDER,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('addAppointmentReminder Error Response :=\n', error);
        dispatch({type: actions.ADD_APPOINTMENT_REMINDER, payload: error});
      });
  };
};
