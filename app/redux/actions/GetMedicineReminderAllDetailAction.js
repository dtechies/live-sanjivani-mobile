import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getMedicineReminderAllDetail = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_MEDICINE_REMINDER_ALL_DETAIL});
    let url = `${BASE_URL}/add-medicine-reminder-view`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getMedicineReminderAllDetail URL := ', url);
        // console.log('getMedicineReminderAllDetail Header := ', header);
        // console.log('getMedicineReminderAllDetail Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_MEDICINE_REMINDER_ALL_DETAIL,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_MEDICINE_REMINDER_ALL_DETAIL,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getMedicineReminderAllDetail Action Error Response :=\n',
        //   error,
        // );
        dispatch({
          type: Actions.GET_MEDICINE_REMINDER_ALL_DETAIL,
          payload: error,
        });
      });
  };
};
