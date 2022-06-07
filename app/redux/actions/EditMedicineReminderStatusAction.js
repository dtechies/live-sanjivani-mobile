import * as actions from '../Types';
import {_editMedicineReminderStatus} from 'services';

export const editMedicineReminderStatus = body => {
  return dispatch => {
    dispatch({type: actions.EDIT_MEDICINE_REMINDER_STATUS});

    _editMedicineReminderStatus;

    return _editMedicineReminderStatus(body)
      .then(response => {
        // console.log('editMedicineReminderStatus body := ', body);
        // console.log('editMedicineReminderStatus Response := ', response);
        return dispatch({
          type: actions.EDIT_MEDICINE_REMINDER_STATUS,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('editMedicineReminderStatus Error Response :=\n', error);
        dispatch({type: actions.EDIT_MEDICINE_REMINDER_STATUS, payload: error});
      });
  };
};
