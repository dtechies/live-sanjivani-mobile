import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../text';
import {color, IcCrossArrow} from 'theme';

export const CareGiverCard = props => {
  const {data, onPress} = props;

  return (
    <View style={styles.cardMain()}>
      <View style={styles.rowSecond()}>
        <Text style={styles.cardHeaderText()}>{data?.nick_name}</Text>
        <TouchableOpacity
          onPress={() => onPress && onPress()}
          style={styles.crossSvgStyle()}>
          <IcCrossArrow width={18} height={18} fill={color.grayIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.row()}>
        <Text style={styles.cardText()}>{data?.first_name}</Text>
        <Text style={styles.cardTextLastName()}>{data?.last_name}</Text>
      </View>
      <View style={styles.rowSecond()}>
        <Text style={styles.cardTextEmail()}>{data?.contact_no}</Text>
        <Text style={styles.cardTextEmail()}>{data?.email}</Text>
      </View>
    </View>
  );
};
