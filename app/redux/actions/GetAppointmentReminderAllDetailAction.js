import * as actions from '../Types';
import {_addAppointmentReminderView} from 'services';

export const getAppointmentReminderAllDetail = () => {
  return dispatch => {
    dispatch({type: actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL});
    return _addAppointmentReminderView()
      .then(response => {
        dispatch({
          type: actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({
          type: actions.ADD_APPOINTMENT_REMINDER_ALL_DETAIL,
          payload: error,
        });
        return error;
      });
  };
};
