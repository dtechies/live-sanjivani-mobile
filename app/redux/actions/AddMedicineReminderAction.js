import {BASE_URL} from 'config';
import * as actions from '../Types';

export const addMedicineReminder = (body, header) => {
  const {token} = header;

  return dispatch => {
    dispatch({type: actions.ADD_MEDICINE_REMINDER});
    let url = `${BASE_URL}/add-medicine-reminder`;

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
        // console.log('addMedicineReminder URL := ', url);
        // console.log('addMedicineReminder body := ', body);
        // console.log('addMedicineReminder header := ', header);
        // console.log('addMedicineReminder Response := ', response);
        if (response) {
          return dispatch({
            type: actions.ADD_MEDICINE_REMINDER,
            payload: response,
          });
        } else {
          return dispatch({
            type: actions.ADD_MEDICINE_REMINDER,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('addMedicineReminder Error Response :=\n', error);
        dispatch({type: actions.ADD_MEDICINE_REMINDER, payload: error});
      });
  };
};
