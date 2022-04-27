import {BASE_URL} from 'config';
import * as Actions from '../Types';

export const getMedicineDoctorDetail = header => {
  const {token} = header;

  return dispatch => {
    dispatch({type: Actions.GET_MEDICINE_DOCTOR_DETAIL});
    let url = `${BASE_URL}/add-medicine-reminder-view`;
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
        // console.log('getMedicineDoctorDetail URL := ', url);
        // console.log('getMedicineDoctorDetail Header := ', header);
        // console.log('getMedicineDoctorDetail Response := ', response);
        if (response) {
          return dispatch({
            type: Actions.GET_MEDICINE_DOCTOR_DETAIL,
            payload: response,
          });
        } else {
          return dispatch({
            type: Actions.GET_MEDICINE_DOCTOR_DETAIL,
            payload: response,
          });
        }
      })
      .catch(error => {
        // console.log(
        //   'getMedicineDoctorDetail Action Error Response :=\n',
        //   error,
        // );
        dispatch({type: Actions.GET_MEDICINE_DOCTOR_DETAIL, payload: error});
      });
  };
};
