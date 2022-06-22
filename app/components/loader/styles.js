import {size, color} from 'theme';

export const container = () => ({
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.semiTransBlack,
  height: size.deviceHeight,
  width: size.deviceWidth,
  position: 'absolute',
  transform: [{scale: 4}],
});
