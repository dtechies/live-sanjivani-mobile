import * as actions from '../Types';
import {_getUserFavSubCategoryPdf} from 'services';

export const GetUserFavSubCategoryPdfAction = body => {
  return dispatch => {
    dispatch({type: actions.USER_SELECTED_ID_PDF});
    return _getUserFavSubCategoryPdf(body)
      .then(response => {
        // console.log('GetUserFavSubCategoryPdf Response := ', response);
        if (response) {
          dispatch({
            type: actions.USER_SELECTED_ID_PDF,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        console.log('GetUserFavSubCategoryPdf Error Response :=\n', error);
        dispatch({type: actions.USER_SELECTED_ID_PDF, payload: error});
        return error;
      });
  };
};
