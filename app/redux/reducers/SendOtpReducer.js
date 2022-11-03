import * as Actions from '../Types';

const initialState = {
  sendOtpResponse: [],
};

const sendOtpReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.SEND_OTP:
      return {...state, sendOtpResponse: payload};
    default:
      return state;
  }
};

export default sendOtpReducer;
