import {BASE_URL} from 'config';
import * as actions from '../Types';
import {_addSubcategory} from 'services';

export const AddSubcategory = body => {
  // console.log('AddSubcategory body := ', body);
  return dispatch => {
    dispatch({type: actions.ADD_SUBCATEGORY});
    return _addSubcategory(body)
      .then(response => {
        // console.log('AddSubcategory Response := ', response);
        return dispatch({
          type: actions.ADD_SUBCATEGORY,
          payload: response,
        });
      })
      .catch(error => {
        // console.log('AddSubcategory Error Response :=\n', error);
        dispatch({type: actions.ADD_SUBCATEGORY, payload: error});
      });
  };
};
