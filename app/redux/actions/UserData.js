import * as Actions from '../Types';
export const userData = val => {
  return {type: Actions.USER_DATA, payload: val};
};
