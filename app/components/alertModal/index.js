import React, {useEffect} from 'react';
import {View, Pressable} from 'react-native';

import * as styles from './styles';
import {Text} from '..';
import {Button} from '../button';
import {IcCrossArrow, color, size} from 'theme';
export const AlertModal = props => {
  const {closeModal, data} = props;
  console.log('DATAAAA', props);
  var givenTime = data.user_selected_time;
  var hourValue = givenTime.slice(0, 2);
  var ampm = hourValue >= 12 ? 'PM' : 'AM';
  return (
    <View style={styles.container()}>
      <View style={styles.cardStyle()}>
        {data?.type == 'appointment' ? (
          <Pressable
            onPress={() => closeModal()}
            style={styles.closeIconStyle()}>
            <IcCrossArrow
              width={size.moderateScale(15)}
              height={size.moderateScale(15)}
              fill={color.black}
            />
          </Pressable>
        ) : null}
        <Text style={styles.textDate()} onPress={() => closeModal()}>
          {data?.user_selected_time.slice(0, 5)} {ampm}
        </Text>
        <Text style={styles.textTitle()} onPress={() => closeModal()}>
          {data?.reminder_name && data.reminder_name}
        </Text>
        <Text style={styles.textDescription()} onPress={() => closeModal()}>
          {data?.dose} {data?.medicine_name} {data?.medicine_strength}{' '}
          {data?.medicine_strength_unit} {data?.medicine_form}
          {', '}
          {data?.reminder_frequency}
          {', '} {data?.reminder_time}
        </Text>

        {data?.type == 'reminder' ? (
          <View style={styles.rowView()}>
            <Button
              onPress={() => closeModal()}
              buttonText={styles.textSnooze()}
              buttonStyle={styles.snoozeButton()}
              name="snooze"
            />
            <Button
              onPress={() => closeModal()}
              buttonText={styles.textSnooze()}
              buttonStyle={styles.cancelButton()}
              name="cancel"
            />
            <Button
              onPress={() => closeModal()}
              buttonText={styles.textSnooze()}
              buttonStyle={styles.takeButton()}
              name="take"
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};
