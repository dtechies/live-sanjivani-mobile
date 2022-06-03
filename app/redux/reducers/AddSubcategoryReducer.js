import * as Actions from '../Types';

const initialState = {
  addSubcategoryResponse: [],
};

const addSubcategoryReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.ADD_SUBCATEGORY:
      return {...state, addSubcategoryResponse: payload};
    default:
      return state;
  }
};

export default addSubcategoryReducer;
