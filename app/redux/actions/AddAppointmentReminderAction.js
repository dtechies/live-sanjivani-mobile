import * as actions from '../Types';
import {_addAppointmentReminder} from 'services';

export const addAppointmentReminder = body => {
  return dispatch => {
    dispatch({type: actions.ADD_APPOINTMENT_REMINDER});
    return _addAppointmentReminder(body)
      .then(response => {
        console.log('addAppointmentReminder Response := ', response);
        if (response) {
          dispatch({
            type: actions.ADD_APPOINTMENT_REMINDER,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        console.log('addAppointmentReminder Error Response :=\n', error);
        dispatch({type: actions.ADD_APPOINTMENT_REMINDER, payload: error});
        return error;
      });
  };
};
