import React, {useEffect} from 'react';
import {View} from 'react-native';

import * as styles from './styles';
import {Text} from '..';
import {Button} from '../button';

export const AlertModal = props => {
  const {closeModal, data} = props;
  useEffect(() => {
    // console.log('data ==>', data);
  }, []);
  return (
    <View style={styles.container()}>
      <View style={styles.cardStyle()}>
        <Text style={styles.textTitle()} onPress={() => closeModal()}>
          {data ? data.title : 'Data not found'}
        </Text>
        <Text style={styles.textTitle()} onPress={() => closeModal()}>
          {data ? data.body : 'Data not found'}
        </Text>
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
      </View>
    </View>
  );
};
