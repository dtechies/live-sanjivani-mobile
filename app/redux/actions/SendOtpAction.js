import * as actions from '../Types';
import {_sendOtp} from 'services';

export const SendOtp = body => {
  return dispatch => {
    dispatch({type: actions.SEND_OTP});
    return _sendOtp(body)
      .then(response => {
        dispatch({
          type: actions.SEND_OTP,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        dispatch({type: actions.SEND_OTP, payload: error});
        return error;
      });
  };
};
