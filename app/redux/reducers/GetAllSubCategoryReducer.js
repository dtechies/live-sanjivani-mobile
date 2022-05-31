import * as Actions from '../Types';

const initialState = {
  getAllSubCategoryResponse: [],
};

const getAllSubCategoryReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_ALL_SUB_CATEGORY:
      return {...state, getAllSubCategoryResponse: payload};
    default:
      return state;
  }
};

export default getAllSubCategoryReducer;
