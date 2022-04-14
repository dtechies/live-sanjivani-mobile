import * as Actions from '../Types';

const initialState = {
  loginResponse: [],
};

const loginReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.LOGIN_USER:
      return {...state, loginResponse: payload};
    default:
      return state;
  }
};

export default loginReducer;
