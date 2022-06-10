import * as actions from '../Types';
import {_addEditPlayerId} from 'services';

export const addEditPlayerId = body => {
  // console.log('body', body);
  return dispatch => {
    dispatch({type: actions.ADD_EDIT_PLAYER_ID});
    return _addEditPlayerId(body)
      .then(response => {
        return dispatch({
          type: actions.ADD_EDIT_PLAYER_ID,
          payload: response,
        });
      })
      .catch(error => {
        dispatch({type: actions.ADD_EDIT_PLAYER_ID, payload: error});
      });
  };
};
