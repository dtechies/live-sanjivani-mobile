import * as Actions from '../Types';

const initialState = {
  getSubCategoryDataResponse: [],
};

const getSubCategoryDataReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.GET_SUB_CATEGORY_DATA:
      return {...state, getSubCategoryDataResponse: payload};
    default:
      return state;
  }
};

export default getSubCategoryDataReducer;
