import * as Actions from '../Types';
import {_userFavoritesList} from 'services';

export const getUserFavoriteList = body => {
  return dispatch => {
    dispatch({type: Actions.GET_USER_FAVORITE_LIST});
    return _userFavoritesList(body)
      .then(response => {
        // console.log('getUserFavoriteList Response := ', response);
        if (response) {
          dispatch({
            type: Actions.GET_USER_FAVORITE_LIST,
            payload: response,
          });
          return response;
        }
      })
      .catch(error => {
        // console.log('getUserFavoriteList Action Error Response :=\n', error);
        dispatch({type: Actions.GET_USER_FAVORITE_LIST, payload: error});
        return error;
      });
  };
};
