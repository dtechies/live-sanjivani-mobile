import {color, size} from 'theme';

export const container = () => ({
  flex: 1,
  justifyContent: 'center',
  backgroundColor: color.blue,
});
export const imageView = () => ({
  marginLeft: size.moderateScale(15),
  alignSelf: 'center',
});
