import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getUserFavoriteList = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_USER_FAVORITE_LIST});
    let url = `${BASE_URL}/user-favorites-list`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getUserFavoriteList URL := ', url);
        // console.log('getUserFavoriteList Header := ', header);
        // console.log('getUserFavoriteList Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_USER_FAVORITE_LIST,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_USER_FAVORITE_LIST,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getUserFavoriteList Action Error Response :=\n', error);
        dispatch({type: Actions.GET_USER_FAVORITE_LIST, payload: error});
      });
  };
};
