import {BASE_URL} from 'config';
import * as Actions from '../Types';
export const getSubCategoryData = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_SUB_CATEGORY_DATA});
    let url = `${BASE_URL}/get-subcategory-data`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getSubCategoryData URL := ', url);
        // console.log('getSubCategoryData Header := ', header);
        // console.log('getSubCategoryData Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_SUB_CATEGORY_DATA,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_SUB_CATEGORY_DATA,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getSubCategoryData Action Error Response :=\n', error);
        dispatch({type: Actions.GET_SUB_CATEGORY_DATA, payload: error});
      });
  };
};
