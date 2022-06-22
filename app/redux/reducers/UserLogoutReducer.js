import * as Actions from '../Types';

const initialState = {
  userLogOutResponse: [],
};

const userLogOutReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case Actions.USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userLogOutReducer;
