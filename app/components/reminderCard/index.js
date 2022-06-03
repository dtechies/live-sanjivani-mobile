import {View, Pressable} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {Text} from '..';
import {color, size, IcDot} from 'theme';
import {ToggleSwitch} from '../switch';

export const ReminderCard = props => {
  const {onTogglePress, onWholeCardPress, data} = props;
  return (
    <Pressable
      onPress={() => onWholeCardPress && onWholeCardPress()}
      style={styles.cardMain(data.isActive)}>
      <View style={styles.cardFirst()}>
        <View style={styles.row()}>
          <IcDot
            height={size.moderateScale(12)}
            width={size.moderateScale(12)}
            fill={data.isActive ? color.darkBlue : color.blueLight}
          />
          <Text style={styles.cardHeading(data.isActive)}>
            {data?.dose} {data?.medicine_name} {data?.medicine_strength}{' '}
            {data?.medicine_strength_unit}
          </Text>
        </View>
        <ToggleSwitch
          isOn={data.isActive}
          size={'small'}
          onToggle={() => onTogglePress && onTogglePress()}
        />
      </View>
      <View>
        <Text style={styles.cardText(data.isActive)}>
          {data?.user_selected_time}
          {',  '} {data?.reminder_time}
        </Text>
      </View>
    </Pressable>
  );
};
