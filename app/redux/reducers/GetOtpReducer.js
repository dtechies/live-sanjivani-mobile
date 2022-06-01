import * as Actions from '../Types';

const initialState = {
  getOtpResponse: [],
};

const getOtpReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_OTP:
      return {...state, getOtpResponse: payload};
    default:
      return state;
  }
};

export default getOtpReducer;
