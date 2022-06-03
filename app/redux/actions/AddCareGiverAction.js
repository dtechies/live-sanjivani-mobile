import * as actions from '../Types';
import {_addCareGiver} from 'services';

export const AddCareGiver = body => {
  // console.log('AddCareGiver body := ', body);
  return dispatch => {
    dispatch({type: actions.ADD_CAREGIVER});
    return _addCareGiver(body)
      .then(response => {
        // console.log('AddCareGiver Response := ', response);
        return dispatch({
          type: actions.ADD_CAREGIVER,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('AddCareGiver Error Response :=\n', error);
        dispatch({type: actions.ADD_CAREGIVER, payload: error});
      });
  };
};
