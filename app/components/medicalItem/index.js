import {View, Pressable, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../';
import {color, IcSelected, size} from 'theme';
import {SvgUri} from 'react-native-svg';

export const MedicalItems = props => {
  const {
    containerStyle,
    onPress,
    nameFirst,
    nameSecond,
    nameFirstTx,
    nameSecondTx,
    textFirstStyle,
    textSecondStyle,
    svgCardItems,
    isSelected,
    nameThirdTx,
    nameThird,
  } = props;
  // const imageUrl = svgCardItems ? {uri: svgCardItems} : images.icLogo;
  return (
    <Pressable style={[styles.container(), containerStyle]} onPress={onPress}>
      <View style={styles.flexOne()}></View>
      <View style={styles.centerView()}>
        {/* <View style={styles.centerLeftView()}>{svgCardItems}</View> */}
        <SvgUri
          height={size.moderateScale(35)}
          width={size.moderateScale(35)}
          uri={svgCardItems}
        />
        <View style={styles.centerRightView()}>
          <View style={styles.flexDirectionStyle()}>
            <Text
              style={[styles.TextFirstTxt(), textFirstStyle]}
              text={nameFirst}
              tx={nameFirstTx}
            />
            <Text
              style={[styles.TextFirstTxt(), textFirstStyle]}
              text={' ' + nameThird ? nameThird : ''}
              tx={nameThirdTx}
            />
          </View>
          <Text
            style={[styles.TextSecondTxt(), textSecondStyle]}
            text={nameSecond}
            tx={nameSecondTx}
          />
        </View>
      </View>

      <View style={styles.flexOne()}>
        {isSelected && (
          <IcSelected height={20} width={20} fill={color.borderBlue} />
        )}
      </View>
    </Pressable>
  );
};
