import * as actions from '../Types';
import {_getHelpSupportData} from 'services';

export const getHelpSupport = () => {
  return dispatch => {
    dispatch({type: actions.GET_HELP_SUPPORT});
    return _getHelpSupportData()
      .then(response => {
        dispatch({
          type: actions.GET_HELP_SUPPORT,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        // console.log('getOtp Error Response :=\n', error);
        dispatch({type: actions.GET_HELP_SUPPORT, payload: error});
        return error;
      });
  };
};
