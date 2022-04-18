import {color, size, fontSize, fonts} from 'theme';

export const container = () => ({
  flex: 1,
  marginTop: size.moderateScale(15),
  marginHorizontal: size.moderateScale(13),
  backgroundColor: color.white,
});
export const containContainerStyle = () => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.white,
});
export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const textLanding = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.mediumGreen,
  fontSize: fontSize.medium,
});
export const showAllButton = () => ({
  alignSelf: 'center',
  padding: size.moderateScale(8),
  width: size.deviceWidth * 0.4,
});
export const row = () => ({
  flexDirection: 'row',
  alignItems: 'center',
});
export const categoriesListContainer = () => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: size.moderateScale(40),
  paddingHorizontal: size.moderateScale(5),
  marginBottom: size.moderateScale(5),
  borderWidth: size.moderateScale(1),
  borderColor: color.gainsBoro,
  backgroundColor: color.ghostWhite,
});
export const textCategoryTitle = () => ({
  fontFamily: fonts.openSansBold,
  color: color.dimGrey,
  fontSize: fontSize.medium,
  marginLeft: size.moderateScale(5),
});
export const modalStyle = () => ({
  borderTopLeftRadius: size.moderateScale(15),
  borderTopRightRadius: size.moderateScale(15),
  paddingTop: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.white,
});
export const modalContentContainerStyle = () => ({
  alignItems: 'center',
  marginBottom: size.moderateScale(15),
});
export const dragStyle = () => ({
  backgroundColor: color.transparent,
});
export const modalTitleText = () => ({
  fontFamily: fonts.openSansBold,
  color: color.dimGrey,
  fontSize: fontSize.medium,
  marginLeft: size.moderateScale(5),
  textAlign: 'center',
});
export const textInputTitle = () => ({
  fontFamily: fonts.openSansBold,
  color: color.purple,
  fontSize: fontSize.small,
});
export const inputMainContainer = () => ({
  marginBottom: size.moderateScale(20),
  width: size.deviceWidth * 0.5,
});
export const labelFieldText = () => ({
  fontFamily: fonts.openSansRegular,
  color: color.purple,
  fontSize: fontSize.small,
  paddingLeft: size.moderateScale(5),
});
export const modalUnitText = () => ({
  fontFamily: fonts.openSansBold,
  color: color.purple,
  fontSize: fontSize.small,
});
export const addFavoriteView = () => [
  row(),
  {
    justifyContent: 'center',
  },
];
export const tickIconView = () => ({
  height: size.moderateScale(20),
  width: size.moderateScale(20),
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: color.dimGrey,
  borderWidth: size.moderateScale(1),
});
export const textAddToFavorite = () => ({
  fontFamily: fonts.openSansMedium,
  color: color.dimGrey,
  fontSize: fontSize.small,
  marginLeft: size.moderateScale(10),
});
export const addButtonStyle = () => ({
  paddingVertical: size.moderateScale(10),
  width: size.deviceWidth * 0.5,
  alignSelf: 'center',
  borderColor: color.black,
  backgroundColor: color.darkGrey,
  borderWidth: size.moderateScale(1),
  marginTop: size.moderateScale(20),
});
export const textAddButton = () => ({
  fontFamily: fonts.openSansBold,
  color: color.black,
  fontSize: fontSize.small,
});
