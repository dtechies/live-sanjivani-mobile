import * as actions from '../Types';
import {_getAllCategoryAndSubCategory} from 'services';
export const getAllCategoryAndSubCategory = () => {
  return dispatch => {
    dispatch({type: actions.GET_OTP});
    return _getAllCategoryAndSubCategory()
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
