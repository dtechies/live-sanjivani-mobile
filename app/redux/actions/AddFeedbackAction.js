import * as actions from '../Types';
import {_addFeedback} from 'services';

export const addFeedBack = body => {
  return dispatch => {
    dispatch({type: actions.ADD_FEEDBACK});
    return _addFeedback(body)
      .then(response => {
        console.log('addFeedBack Response := ', response);
        if (response) {
          dispatch({
            type: actions.ADD_FEEDBACK,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        console.log('addFeedBack Error Response :=\n', error);
        dispatch({type: actions.ADD_FEEDBACK, payload: error});
        return error;
      });
  };
};
