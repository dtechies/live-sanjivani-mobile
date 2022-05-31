import {BASE_URL} from 'config';
import * as actions from '../Types';

export const addUserFavorite = (body, header) => {
  const {token} = header;

  return dispatch => {
    dispatch({type: actions.ADD_USER_FAVORITE});
    let url = `${BASE_URL}/add-user-favorites`;

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(response => {
        // console.log('addUserFavorite URL := ', url);
        // console.log('addUserFavorite header := ', header);
        // console.log('addUserFavorite body := ', body);
        // console.log('addUserFavorite Response := ', response);
        if (response) {
          return dispatch({
            type: actions.ADD_USER_FAVORITE,
            payload: response,
          });
        } else {
          return dispatch({type: actions.ADD_USER_FAVORITE, payload: response});
        }
      })
      .catch(error => {
        // console.log('addUserFavorite Error Response :=\n', error);
        dispatch({type: actions.ADD_USER_FAVORITE, payload: error});
      });
  };
};
