import * as actions from '../Types';
import {_getTodayMedicationList} from 'services';

export const getTodayMedicationList = () => {
  return dispatch => {
    dispatch({type: actions.TODAY_MEDICATION_LIST});
    return _getTodayMedicationList()
      .then(response => {
        dispatch({
          type: actions.TODAY_MEDICATION_LIST,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.TODAY_MEDICATION_LIST, payload: error});
        return error;
      });
  };
};
