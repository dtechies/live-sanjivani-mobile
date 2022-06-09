import {View, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '..';
import {color, size, IcDot} from 'theme';
import {ToggleSwitch} from '../switch';

export const ReminderCard = props => {
  const {onTogglePress, onWholeCardPress, data} = props;
  // console.log('datatatat=', data);
  var givenTime = data?.user_selected_time;
  var hourValue = givenTime.slice(0, 2);
  var ampm = hourValue >= 12 ? 'PM' : 'AM';
  return (
    <Pressable
      onPress={() => onWholeCardPress && onWholeCardPress()}
      style={styles.cardMain(data.status)}>
      <View style={styles.cardFirst()}>
        <View style={styles.row()}>
          <IcDot
            height={size.moderateScale(12)}
            width={size.moderateScale(12)}
            fill={data.status ? color.darkBlue : color.blueLight}
          />
          <Text style={styles.cardReminder(data.status)}>
            {data?.reminder_name}
          </Text>
        </View>
        <ToggleSwitch
          isOn={data.status}
          size={'small'}
          onToggle={() => onTogglePress && onTogglePress()}
        />
      </View>
      <View>
        <Text style={styles.cardHeading(data.status)}>
          {data?.dose} {data?.medicine_name} {data?.medicine_strength}{' '}
          {data?.medicine_strength_unit}
        </Text>
        <Text style={styles.cardText(data.status)}>
          {data?.user_selected_time.slice(0, 5)} {ampm}
          {', '}
          {data?.reminder_time}
        </Text>
      </View>
    </Pressable>
  );
};
