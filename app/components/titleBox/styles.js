import {size, color} from 'theme';
import {fonts} from '../../theme/Fonts';
import {fontSize} from '../../theme/FontSize';

export const container = () => ({
  // flex: 1,
  paddingVertical: size.moderateScale(7),
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: size.moderateScale(1),
  backgroundColor: color.lightPurple,
  borderColor: color.borderBlue,
});

export const titleTxt = () => ({
  maxHeight: size.moderateScale(35),
  fontSize: fontSize.large,
  color: color.blueTx,
  paddingHorizontal: size.moderateScale(10),
});
