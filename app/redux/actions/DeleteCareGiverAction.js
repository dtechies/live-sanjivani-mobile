import * as actions from '../Types';
import {_getCareGiverDelete} from 'services';

export const DeleteCareGiverAction = body => {
  return dispatch => {
    dispatch({type: actions.CARE_GIVER_LIST_DELETE});
    _getCareGiverDelete;
    return _getCareGiverDelete(body)
      .then(response => {
        console.log('responses', response);
        return dispatch({
          type: actions.CARE_GIVER_LIST_DELETE,
          payload: response,
        });
      })
      .catch(error => {
        dispatch({
          type: actions.CARE_GIVER_LIST_DELETE,
          payload: error,
        });
      });
  };
};
