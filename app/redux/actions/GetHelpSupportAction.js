import {BASE_URL} from 'config';
import * as Actions from '../Types';
export const getHelpSupport = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_HELP_SUPPORT});
    let url = `${BASE_URL}/get-helpsupport-data`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getHelpSupport URL := ', url);
        // console.log('getHelpSupport Header := ', header);
        // console.log('getHelpSupport Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_HELP_SUPPORT,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_HELP_SUPPORT,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log('getHelpSupport Action Error Response :=\n', error);
        dispatch({type: Actions.GET_HELP_SUPPORT, payload: error});
      });
  };
};
