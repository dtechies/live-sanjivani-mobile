import * as actions from '../Types';

import {_getCareGiverList} from 'services';

export const GetCareGiverListAction = () => {
  console.log('hiii');
  return dispatch => {
    dispatch({type: actions.CARE_GIVER_LIST});
    return _getCareGiverList()
      .then(response => {
        dispatch({
          type: actions.CARE_GIVER_LIST,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        console.log('getTipForDay Error Response :=\n', error);
        dispatch({type: actions.CARE_GIVER_LIST, payload: error});
        return error;
      });
  };
};
