import * as actions from '../Types';
import {_editReminderStatus} from 'services';

export const EditReminderStatusAction = body => {
  return dispatch => {
    dispatch({type: actions.EDIT_REMINDER_STATUS});
    _editReminderStatus;
    return _editReminderStatus(body)
      .then(response => {
        // console.log('editAppointmentReminderStatus body := ', body);
        // console.log('editAppointmentReminderStatus Response := ', response);
        return dispatch({
          type: actions.EDIT_REMINDER_STATUS,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('editAppointmentReminderStatus Error Response :=\n', error);
        dispatch({
          type: actions.EDIT_REMINDER_STATUS,
          payload: error,
        });
      });
  };
};
