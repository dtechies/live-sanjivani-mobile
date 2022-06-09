import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {editReminderStatusAction} from 'redux-actions';

import * as styles from './styles';
import {Text} from '..';
import {Button} from '../button';
import {Loader} from '../loader';
import {IcCrossArrow, color, size} from 'theme';
export const AlertModal = props => {
  const {closeModal, data} = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  var givenTime = data.user_selected_time;
  var hourValue = givenTime.slice(0, 2);
  var ampm = hourValue >= 12 ? 'PM' : 'AM';

  // useEffect(() => {
  //   console.log('data', data);
  // }, []);

  const updateReminderStatus = async status => {
    // console.log('status ==>', status);
    // 'snooze/cancel/take',
    setLoading(true);
    const editReminderStatusBody = {
      id: data?.id,
      reminder_status: status,
    };
    const editReminderStatusResponse = await dispatch(
      editReminderStatusAction(editReminderStatusBody),
    );
    // console.log('editReminderStatusResponse ====', editReminderStatusResponse);
    const res = editReminderStatusResponse.payload;
    // console.log('res', res);
    if (res.status) {
      setLoading(false);
      closeModal();
    } else {
      setLoading(false);
      // toastMessage(res.message);
    }
  };

  return (
    <View style={styles.container()}>
      {loading && <Loader />}
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
        <Text style={styles.textDate()}>
          {data?.user_selected_time.slice(0, 5)} {ampm}
        </Text>
        <Text style={styles.textTitle()}>
          {data?.reminder_name && data.reminder_name}
        </Text>
        <Text style={styles.textDescription()}>
          {data?.dose} {data?.medicine_name} {data?.medicine_strength}{' '}
          {data?.medicine_strength_unit} {data?.medicine_form}
          {', '}
          {data?.reminder_frequency}
          {', '} {data?.reminder_time}
        </Text>

        {data?.type == 'reminder' ? (
          <View style={styles.rowView()}>
            <Button
              onPress={() => updateReminderStatus('snooze')}
              buttonText={styles.textSnooze()}
              buttonStyle={styles.snoozeButton()}
              name="snooze"
            />
            <Button
              onPress={() => updateReminderStatus('cancel')}
              buttonText={styles.textSnooze()}
              buttonStyle={styles.cancelButton()}
              name="cancel"
            />
            <Button
              onPress={() => updateReminderStatus('take')}
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
