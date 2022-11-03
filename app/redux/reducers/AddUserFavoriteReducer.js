import * as Actions from '../Types';

const initialState = {
  addUserFavoriteResponse: [],
};

const addUserFavoriteReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_USER_FAVORITE:
      return {...state, addUserFavoriteResponse: payload};
    default:
      return state;
  }
};

export default addUserFavoriteReducer;
