import * as Actions from '../Types';
import {_getAppointmentReminder} from 'services';

export const getAppointmentReminderProfile = body => {
  return dispatch => {
    dispatch({type: Actions.GET_APPOINTMENT_REMINDER_PROFILE});
    return _getAppointmentReminder(body)
      .then(response => {
        if (response) {
          dispatch({
            type: Actions.GET_APPOINTMENT_REMINDER_PROFILE,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        dispatch({
          type: Actions.GET_APPOINTMENT_REMINDER_PROFILE,
          payload: error,
        });
        return error;
      });
  };
};
