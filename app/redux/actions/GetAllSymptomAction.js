import * as Actions from '../Types';
import {_getAllSymptom} from 'services';

export const getAllSymptomAction = () => {
  return dispatch => {
    dispatch({type: Actions.GET_ALL_SYMPTOM});
    return _getAllSymptom()
      .then(response => {
        // console.log('responses', response);
        dispatch({
          type: Actions.GET_ALL_SYMPTOM,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        dispatch({type: Actions.GET_ALL_SYMPTOM, payload: error});
        return error;
      });
  };
};
