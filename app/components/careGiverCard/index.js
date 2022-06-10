import {View, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '../text';
import {color, size, IcDot} from 'theme';

export const CareGiverCard = props => {
  const {data} = props;
  return (
    <View style={styles.cardMain()}>
      <Text style={styles.cardHeaderText()}>{data?.nick_name}</Text>
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
