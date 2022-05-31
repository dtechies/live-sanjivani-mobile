import {BASE_URL} from 'config';
import * as Actions from '../Types';
export const getAllSubCategory = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_ALL_SUB_CATEGORY});
    let url = `${BASE_URL}/all-subcategory`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getAllSubCategory URL := ', url);
        // console.log('getAllSubCategory Header := ', header);
        // console.log('getAllSubCategory Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_ALL_SUB_CATEGORY,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_ALL_SUB_CATEGORY,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getAllSubCategory Action Error Response :=\n', error);
        dispatch({type: Actions.GET_ALL_SUB_CATEGORY, payload: error});
      });
  };
};
