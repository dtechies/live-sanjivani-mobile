import {BASE_URL} from 'config';
import * as actions from '../Types';

export const editMedicineReminderStatus = (body, header) => {
  const {token} = header;

  return dispatch => {
    dispatch({type: actions.EDIT_MEDICINE_REMINDER_STATUS});
    let url = `${BASE_URL}/edit-medicine-reminder-status`;

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
        // console.log('editMedicineReminderStatus URL := ', url);
        // console.log('editMedicineReminderStatus header := ', header);
        // console.log('editMedicineReminderStatus body := ', body);
        // console.log('editMedicineReminderStatus Response := ', response);
        if (response) {
          return dispatch({
            type: actions.EDIT_MEDICINE_REMINDER_STATUS,
            payload: response,
          });
        } else {
          return dispatch({
            type: actions.EDIT_MEDICINE_REMINDER_STATUS,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('editMedicineReminderStatus Error Response :=\n', error);
        dispatch({type: actions.EDIT_MEDICINE_REMINDER_STATUS, payload: error});
      });
  };
};
