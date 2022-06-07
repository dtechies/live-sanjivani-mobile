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
        {data?.notification_type == 'appointment' ? (
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
        <Text style={styles.textTitle()} onPress={() => closeModal()}>
          {data?.title ? data.title : 'Title not found'}
        </Text>
        <Text style={styles.textTitle()} onPress={() => closeModal()}>
          {data ? data.message : 'Message not found'}
        </Text>

        {data?.notification_type == 'reminder' ? (
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
