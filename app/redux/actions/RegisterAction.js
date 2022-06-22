import {BASE_URL} from 'config';
import * as actions from '../Types';
import {_registerUser} from 'services';

export const registerUser = body => {
  // console.log('registerUser body := ', body);
  return dispatch => {
    dispatch({type: actions.REGISTER_USER});
    return _registerUser(body)
      .then(response => {
        // console.log('registerUser Response := ', response);
        return dispatch({
          type: actions.REGISTER_USER,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('registerUser Error Response :=\n', error);
        dispatch({type: actions.REGISTER_USER, payload: error});
      });
  };
};
