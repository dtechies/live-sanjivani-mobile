import * as actions from '../Types';

const initialState = {
  currentTheme: 'light',
};

const themeMode = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.APP_THEME:
      return {...state, currentTheme: payload};
    default:
      return state;
  }
};

export default themeMode;
