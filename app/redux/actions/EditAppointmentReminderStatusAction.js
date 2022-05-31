import {BASE_URL} from 'config';
import * as actions from '../Types';

export const editAppointmentReminderStatus = (body, header) => {
  const {token} = header;

  return dispatch => {
    dispatch({type: actions.EDIT_APPOINTMENT_REMINDER_STATUS});
    let url = `${BASE_URL}/edit-appointment-reminder-status`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(response => {
        // console.log('editAppointmentReminderStatus URL := ', url);
        // console.log('editAppointmentReminderStatus header := ', header);
        // console.log('editAppointmentReminderStatus body := ', body);
        // console.log('editAppointmentReminderStatus Response := ', response);
        if (response) {
          return dispatch({
            type: actions.EDIT_APPOINTMENT_REMINDER_STATUS,
            payload: response,
          });
        } else {
          return dispatch({
            type: actions.EDIT_APPOINTMENT_REMINDER_STATUS,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('editAppointmentReminderStatus Error Response :=\n', error);
        dispatch({
          type: actions.EDIT_APPOINTMENT_REMINDER_STATUS,
          payload: error,
        });
      });
  };
};
