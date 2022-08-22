import * as actions from '../Types';
import {_getTodayMedicationList} from 'services';

export const getTodayMedicationList = body => {
  return dispatch => {
    dispatch({type: actions.TODAY_MEDICATION_LIST});
    return _getTodayMedicationList(body)
      .then(response => {
        dispatch({
          type: actions.TODAY_MEDICATION_LIST,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        dispatch({type: actions.TODAY_MEDICATION_LIST, payload: error});
        return error;
      });
  };
};
