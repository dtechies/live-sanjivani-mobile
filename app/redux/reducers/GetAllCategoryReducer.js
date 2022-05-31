import * as Actions from '../Types';

const initialState = {
  getAllCategoryResponse: [],
};

const getAllCategoryReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_ALL_CATEGORY:
      return {...state, getAllCategoryResponse: payload};
    default:
      return state;
  }
};

export default getAllCategoryReducer;
