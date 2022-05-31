import * as Actions from '../Types';

const initialState = {
  getMedicineDoctorDetailResponse: [],
};

const getMedicineDoctorDetailReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_MEDICINE_DOCTOR_DETAIL:
      return {...state, getMedicineDoctorDetailResponse: payload};
    default:
      return state;
  }
};

export default getMedicineDoctorDetailReducer;
