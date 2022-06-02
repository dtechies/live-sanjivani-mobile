import * as Actions from '../Types';
import {_getMedicineReminderView} from 'services';

export const getMedicineReminderView = () => {
  return dispatch => {
    dispatch({type: Actions.GET_MEDICINE_REMINDER_VIEW});
    return _getMedicineReminderView()
      .then(response => {
        // console.log('getMedicineReminderView URL := ', url);
        // console.log('getMedicineReminderView Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_MEDICINE_REMINDER_VIEW,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getMedicineReminderView Action Error Response :=\n',
        //   error,
        // );
        dispatch({type: Actions.GET_MEDICINE_REMINDER_VIEW, payload: error});
      });
  };
};
