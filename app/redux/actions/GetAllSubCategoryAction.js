import * as Actions from '../Types';
import {_getAllSubCategory} from 'services';

export const getAllSubCategory = () => {
  return dispatch => {
    dispatch({type: Actions.GET_ALL_SUB_CATEGORY});
    return _getAllSubCategory()
      .then(response => {
        // console.log('responses', response);
        dispatch({
          type: Actions.GET_ALL_SUB_CATEGORY,
          payload: response,
        });
        return response;
      })
      .catch(error => {
        dispatch({type: Actions.GET_ALL_SUB_CATEGORY, payload: error});
        return error;
      });
  };
};
