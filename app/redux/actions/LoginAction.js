import {BASE_URL} from 'config';
import * as actions from '../Types';
import {_userLogin} from 'services';

export const loginUser = body => {
  return dispatch => {
    dispatch({type: actions.LOGIN_USER});
    return _userLogin(body)
      .then(response => {
        console.log('loginUser body := ', body);
        console.log('loginUser Response := ', response);
        return dispatch({
          type: actions.LOGIN_USER,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('loginUser Error Response :=\n', error);
        dispatch({type: actions.LOGIN_USER, payload: error});
      });
  };
};
