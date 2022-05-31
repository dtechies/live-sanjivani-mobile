import {size, color} from 'theme';

export const container = () => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.semiTransBlack,
  transform: [{scale: 2}],
});
