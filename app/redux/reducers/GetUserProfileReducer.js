import * as Actions from '../Types';

const initialState = {
  getUserProfileResponse: [],
};

const getUserProfileReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.GET_USER_PROFILE:
      return {...state, getUserProfileResponse: payload};
    default:
      return state;
  }
};

export default getUserProfileReducer;
