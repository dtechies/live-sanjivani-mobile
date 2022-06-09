import * as actions from '../Types';
import {_editReminderStatus} from 'services';

export const editReminderStatusAction = body => {
  return dispatch => {
    dispatch({type: actions.EDIT_REMINDER_STATUS});
    _editReminderStatus;
    return _editReminderStatus(body)
      .then(response => {
        return dispatch({
          type: actions.EDIT_REMINDER_STATUS,
          payload: response,
        });
      })
      .catch(error => {
        dispatch({
          type: actions.EDIT_REMINDER_STATUS,
          payload: error,
        });
      });
  };
};
