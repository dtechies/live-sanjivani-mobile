import React, {useEffect} from 'react';
import {View, Pressable} from 'react-native';

import * as styles from './styles';
import {Text} from '..';
import {Button} from '../button';
import {IcCrossArrow, color, size} from 'theme';
export const AlertModal = props => {
  const {closeModal, data} = props;
  useEffect(() => {
    // console.log('data ==>', data);
  }, []);
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
          {data?.frequency_value}
        </Text>
        <Text style={styles.textTitle()} onPress={() => closeModal()}>
          {data?.reminder_name && data.reminder_name}
        </Text>
        <Text style={styles.textDescription()} onPress={() => closeModal()}>
          {data?.dose} {data?.medicine_name} {data?.medicine_strength}{' '}
          {data?.medicine_strength_unit} {data?.medicine_form} {', '}
          {data?.frequency_value} {data?.reminder_time}
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
