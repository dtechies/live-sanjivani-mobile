import {BASE_URL} from 'config';
import * as actions from '../Types';
import {_addMedicineReminder} from 'services';

export const addMedicineReminder = body => {
  return dispatch => {
    dispatch({type: actions.ADD_MEDICINE_REMINDER});
    return _addMedicineReminder(body)
      .then(response => {
        if (response) {
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
