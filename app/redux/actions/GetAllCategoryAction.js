import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getAllCategory = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_ALL_CATEGORY});
    let url = `${BASE_URL}/all-category`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())

      .then(response => {
        // console.log('getAllCategory URL := ', url);
        // console.log('getAllCategory Header := ', header);
        // console.log('getAllCategory Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_ALL_CATEGORY,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_ALL_CATEGORY,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getAllCategory Action Error Response :=\n', error);
        dispatch({type: Actions.GET_ALL_CATEGORY, payload: error});
      });
  };
};
