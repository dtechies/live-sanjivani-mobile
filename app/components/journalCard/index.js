import {View, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../text';
import {color, IcCrossArrow} from 'theme';

export const JournalCard = props => {
  const {data, onPress, ImageClick} = props;

  return (
    <View style={styles.cardMain()}>
      <View style={styles.rowSecond()}>
        {data.image ? (
          <TouchableOpacity
            onPress={() => {
              ImageClick && ImageClick();
            }}>
            <Text style={styles.cardHeaderText()} text={'Preview Image'} />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        <TouchableOpacity
          onPress={() => onPress && onPress()}
          style={styles.crossSvgStyle()}>
          <IcCrossArrow width={18} height={18} fill={color.grayIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.rowSecond()}>
        <Text style={styles.cardText()}>{data?.time}</Text>
        <Text style={styles.cardTextLastName()}>{data?.date}</Text>
      </View>
      <View style={styles.rowSecond()}>
        <Text style={styles.cardTextEmail()}>{data?.description}</Text>
      </View>
    </View>
  );
};
