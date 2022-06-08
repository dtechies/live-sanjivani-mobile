import * as Actions from '../Types';
import {_getAppointmentReminder} from 'services';

export const getAppointmentReminderProfile = () => {
  return dispatch => {
    dispatch({type: Actions.GET_APPOINTMENT_REMINDER_PROFILE});
    return _getAppointmentReminder()
      .then(response => {
        // console.log('getAppointmentReminderProfile URL := ', url);
        // console.log('getAppointmentReminderProfile header := ', header);
        // console.log('getAppointmentReminderProfile Response := ', response);
        if (response) {
          dispatch({
            type: Actions.GET_APPOINTMENT_REMINDER_PROFILE,
            payload: response,
          });
          return response;
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
        return error;
      });
  };
};
