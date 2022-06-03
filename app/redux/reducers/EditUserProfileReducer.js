import * as Actions from '../Types';

const initialState = {
  editUserProfileResponse: [],
};

const editUserProfileReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.EDIT_PROFILE_DETAILS:
      return {...state, editUserProfileResponse: payload};
    default:
      return state;
  }
};

export default editUserProfileReducer;
