import * as actions from '../Types';
import {_addUserFavorites} from 'services';

export const addUserFavorite = body => {
  return dispatch => {
    dispatch({type: actions.ADD_USER_FAVORITE});
    return _addUserFavorites(body)
      .then(response => {
        // console.log('addUserFavorite Response := ', response);
        if (response) {
          dispatch({
            type: actions.ADD_USER_FAVORITE,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        // console.log('addUserFavorite Error Response :=\n', error);
        dispatch({type: actions.ADD_USER_FAVORITE, payload: error});
        return error;
      });
  };
};
