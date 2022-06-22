import * as Actions from '../Types';

const initialState = {
  GetUserFavSubCategoryPdfResponse: [],
};

const GetUserFavSubCategoryPdfReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case Actions.USER_SELECTED_ID_PDF:
      return {...state, GetUserFavSubCategoryPdfResponse: payload};
    default:
      return state;
  }
};

export default GetUserFavSubCategoryPdfReducer;
