import * as actions from '../Types';
import {_addOtherData} from 'services';

export const addOtherData = body => {
  return dispatch => {
    dispatch({type: actions.ADD_OTHER_DATA});
    return _addOtherData(body)
      .then(response => {
        dispatch({
          type: actions.ADD_OTHER_DATA,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        dispatch({type: actions.ADD_OTHER_DATA, payload: error});
      });
  };
};
