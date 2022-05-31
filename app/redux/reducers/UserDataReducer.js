import * as Actions from '../Types';

const initialState = {
  userDataResponse: [],
};

const userDataReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.USER_DATA:
      return {...state, userDataResponse: payload};
    default:
      return state;
  }
};

export default userDataReducer;
