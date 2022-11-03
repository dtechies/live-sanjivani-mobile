import * as actions from '../Types';
import {_editAppointmentReminderStatus} from 'services';

export const editAppointmentReminderStatus = body => {
  return dispatch => {
    dispatch({type: actions.EDIT_APPOINTMENT_REMINDER_STATUS});
    _editAppointmentReminderStatus;
    return _editAppointmentReminderStatus(body)
      .then(response => {
        // console.log('editAppointmentReminderStatus body := ', body);
        // console.log('editAppointmentReminderStatus Response := ', response);
        return dispatch({
          type: actions.EDIT_APPOINTMENT_REMINDER_STATUS,
          payload: response,
        });
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
