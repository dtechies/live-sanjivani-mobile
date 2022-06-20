import moment from 'moment';
export const ConvertToUTC = string => {
  return moment(string, 'YYYY-MM-DD HH:mm:ss').toISOString();
};
