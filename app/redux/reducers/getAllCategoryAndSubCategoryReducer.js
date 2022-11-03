import * as Actions from '../Types';

const initialState = {
  getAllCategoryAndSubCategoryResponse: [],
};

const getAllCategoryAndSubCategoryReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_ALL_CATEGORY_SUBCATEGORY:
      return {...state, getAllCategoryAndSubCategoryResponse: payload};
    default:
      return state;
  }
};

export default getAllCategoryAndSubCategoryReducer;
