import * as Actions from '../Types';

const initialState = {
  registerResponse: [],
};

const registerReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.REGISTER_USER:
      return {...state, registerResponse: payload};
    default:
      return state;
  }
};

export default registerReducer;
