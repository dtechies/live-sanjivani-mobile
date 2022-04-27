import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getAllCategoryAndSubCategory = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_ALL_CATEGORY_SUBCATEGORY});
    let url = `${BASE_URL}/all_cat_subcategory`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getAllCategoryAndSubCategory URL := ', url);
        // console.log('getAllCategoryAndSubCategory Header := ', header);
        // console.log('getAllCategoryAndSubCategory Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_ALL_CATEGORY_SUBCATEGORY,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_ALL_CATEGORY_SUBCATEGORY,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getAllCategoryAndSubCategory Action Error Response :=\n',
        //   error,
        // );
        dispatch({type: Actions.GET_ALL_CATEGORY_SUBCATEGORY, payload: error});
      });
  };
};
