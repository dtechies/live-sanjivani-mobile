import * as actions from '../Types';
import {_storeOTP} from 'services';

export const StoreOTP = body => {
  // console.log('registerUser body := ', body);
  return dispatch => {
    dispatch({type: actions.STORE_OTP});
    return _storeOTP(body)
      .then(response => {
        // console.log('registerUser Response := ', response);
        dispatch({
          type: actions.STORE_OTP,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('registerUser Error Response :=\n', error);
        dispatch({type: actions.STORE_OTP, payload: error});
        return error;
      });
  };
};
