import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {EditReminderStatusAction} from 'redux-actions';

import * as styles from './styles';
import {Text} from '..';
import {Button} from '../button';
import {Loader} from '../loader';
import {IcCrossArrow, color, size} from 'theme';
import moment from 'moment';
export const AlertModal = props => {
  const {closeModal, data} = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const updateReminderStatus = async status => {
    // console.log('status ==>', status);
    // 'snooze/cancel/take',
    setLoading(true);
    const editReminderStatusBody = {
      id: data?.id,
      reminder_status: status,
    };
    // console.log('editReminderStatusBody ====', editReminderStatusBody);
    const editReminderStatusResponse = await dispatch(
      EditReminderStatusAction(editReminderStatusBody),
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
        {data?.type == 'appointment_reminder' && (
          <Pressable
            onPress={() => closeModal()}
            style={styles.closeIconStyle()}>
            <IcCrossArrow
              width={size.moderateScale(15)}
              height={size.moderateScale(15)}
              fill={color.black}
            />
          </Pressable>
        )}
        <View>
          {data?.type == 'appointment_reminder' ? (
            <View>
              <Text style={styles.textDate()}>
                {`Appointment-time : ${moment(
                  data?.appointment_time.slice(0, 5),
                  'HH:mm',
                ).format('hh:mm A')}`}
              </Text>
              <Text style={styles.textTitle()}>
                {data?.doctor_name && data.doctor_name}
              </Text>
              <Text style={styles.textTitle()}>
                {data?.doctor_address && data.doctor_address}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={styles.textDate()}>
                {moment(data?.user_selected_time.slice(0, 5), 'HH:mm').format(
                  'hh:mm A',
                )}
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
            </View>
          )}
        </View>

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
