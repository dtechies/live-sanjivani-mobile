import {View, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '..';
import {color, size, IcDot} from 'theme';
import {ToggleSwitch} from '../switch';
import moment from 'moment';

export const ReminderCard = props => {
  const {onTogglePress, onWholeCardPress, data} = props;
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
      <View style={styles.bottomView()}>
        <View>
          <Text style={styles.cardHeading(data.status)}>
            {data?.dose} {data?.medicine_name} {data?.medicine_strength}{' '}
            {data?.medicine_strength_unit}
          </Text>
          <Text style={styles.cardText(data.status)}>
            {data.reminder_frequency}{' '}
            {'at ' + data.user_selected_local_time
              ? moment(data.user_selected_local_time, 'HH:mm:ss').format(
                  'hh:mm A',
                )
              : '' + ' '}
          </Text>
        </View>
        <View>
          <Text style={styles.cardText(data.status)}>
            {data?.reminder_time}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
