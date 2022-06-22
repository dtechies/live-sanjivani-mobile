import * as actions from '../Types';
import {_getOTP} from 'services';

export const getOtp = body => {
  // console.log('getOtp body := ', body);
  return dispatch => {
    dispatch({type: actions.GET_OTP});
    return _getOTP(body)
      .then(response => {
        return dispatch({
          type: actions.GET_OTP,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.GET_OTP, payload: error});
      });
  };
};
