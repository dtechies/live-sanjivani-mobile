import {BASE_URL} from 'config';
import * as Actions from '../Types';
export const getTipForDay = header => {
  const {token} = header;
  return dispatch => {
    dispatch({type: Actions.GET_TIP_FOR_DAY});
    let url = `${BASE_URL}/get-tip-for-day`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getTipForDay URL := ', url);
        // console.log('getTipForDay Header := ', header);
        // console.log('getTipForDay Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_TIP_FOR_DAY,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_TIP_FOR_DAY,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getTipForDay Action Error Response :=\n', error);
        dispatch({type: Actions.GET_TIP_FOR_DAY, payload: error});
      });
  };
};
