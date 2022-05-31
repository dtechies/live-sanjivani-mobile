import {View, Pressable, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../';
import {color, IcSelected} from 'theme';
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
  return (
    <Pressable style={[styles.container(), containerStyle]} onPress={onPress}>
      <View style={styles.flexOne()}></View>
      <View style={styles.centerView()}>
        <View style={styles.centerLeftView()}>{svgCardItems}</View>
        <View style={styles.centerRightView()}>
          <View style={styles.flexDirectionStyle()}>
            <Text
              style={[styles.TextFirstTxt(), textFirstStyle]}
              text={nameFirst}
              tx={nameFirstTx}
            />
            <Text
              style={[styles.TextFirstTxt(), textFirstStyle]}
              text={' ' + nameThird}
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
        {isSelected && <IcSelected height={20} width={20} fill={color.blue} />}
      </View>
    </Pressable>
  );
};
