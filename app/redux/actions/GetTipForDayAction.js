import * as actions from '../Types';
import {_getTipForDayData} from 'services';

export const getTipForDay = () => {
  return dispatch => {
    dispatch({type: actions.GET_TIP_FOR_DAY});
    return _getTipForDayData()
      .then(response => {
        dispatch({
          type: actions.GET_TIP_FOR_DAY,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getTipForDay Error Response :=\n', error);
        dispatch({type: actions.GET_TIP_FOR_DAY, payload: error});
        return error;
      });
  };
};
