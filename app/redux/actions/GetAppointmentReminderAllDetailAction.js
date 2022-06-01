import * as actions from '../Types';
import {_addAppointmentReminderView} from 'services';

export const getAppointmentReminderAllDetail = () => {
  return dispatch => {
    dispatch({type: actions.GET_OTP});
    return _addAppointmentReminderView()
      .then(response => {
        dispatch({
          type: actions.GET_OTP,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.GET_OTP, payload: error});
        return error;
      });
  };
};
