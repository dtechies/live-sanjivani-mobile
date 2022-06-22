import * as Actions from '../Types';

const initialState = {
  getUserFavoriteListResponse: [],
};

const getUserFavoriteListReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_USER_FAVORITE_LIST:
      return {...state, getUserFavoriteListResponse: payload};
    default:
      return state;
  }
};

export default getUserFavoriteListReducer;
