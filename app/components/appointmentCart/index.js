import {View, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '..';
import {color, size, IcDot} from 'theme';
import {ToggleSwitch} from '../switch';

export const AppointmentCard = props => {
  const {onTogglePress, onWholeCardPress, data, time, date, doctor, address} =
    props;
  return (
    <Pressable
      onPress={() => onWholeCardPress && onWholeCardPress()}
      style={styles.cardMain(data.isActive)}>
      <View style={styles.medicationCard()}>
        <View style={styles.row()}>
          <View style={styles.onlyRow()}>
            <View style={styles.row()}>
              <View style={styles.circleView()} />
              <Text style={styles.textTime()} text={time} />
            </View>
            <View style={styles.row()}>
              <View style={styles.circleDateView()} />
              <Text style={styles.textTime()} text={date} />
            </View>
            <ToggleSwitch
              isOn={data.status}
              size={'small'}
              onToggle={() => onTogglePress && onTogglePress()}
            />
          </View>
        </View>
        <Text style={styles.medicineName()} text={doctor} />
        <Text style={styles.desTextStyle()} text={address} />
      </View>
    </Pressable>
  );
};
