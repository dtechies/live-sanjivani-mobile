import React, {useState, useEffect} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {Text, Screen, InputBox, Button} from 'components';
import {useNavigation} from '@react-navigation/native';

import {size, color, IcPlus} from 'theme';
import {addServiceData} from 'json';
import * as styles from './styles';
export const AddScreen = props => {
  const navigation = useNavigation();
  const [data, setData] = useState(addServiceData);
  const [activeIndex, setActiveIndex] = useState(null);
  const [extra, setExtra] = useState(0);
  const [noteVal, setNoteVal] = useState('');
  const [showTakeNote, setShowTakeNote] = useState(false);
  const [show, setShow] = useState(true);
  // const params = props.route.params && props.route.params;
  const params = 'all';
  return (
    <SafeAreaView style={styles.full()}>
      <Screen style={styles.container()}>
        <Pressable>
          <Text style={styles.textLanding()} tx={'add_screen.add'} />
        </Pressable>
        {(params === 'medication' || params === 'all') && (
          <Button
            onPress={() => navigation.navigate('medicationReminderScreen')}
            nameTx="add_screen.add_medication"
            buttonStyle={styles.addReminderButtonStyle()}
            buttonText={styles.textAddAppointment()}
            leftIcon={
              <IcPlus
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.black}
              />
            }
          />
        )}
        {(params === 'appointment' || params === 'all') && (
          <Button
            onPress={() => navigation.navigate('appointmentReminderScreen')}
            nameTx="add_screen.add_appointment"
            buttonStyle={styles.addReminderButtonStyle()}
            buttonText={styles.textAddAppointment()}
            leftIcon={
              <IcPlus
                height={size.moderateScale(20)}
                width={size.moderateScale(20)}
                fill={color.black}
              />
            }
          />
        )}
        {data.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <>
              <Pressable
                style={styles.listView()}
                onPress={() => {
                  if (isActive) {
                    setActiveIndex(null);
                  } else {
                    setActiveIndex(index);
                    setExtra(extra + 1);
                  }
                }}>
                <Text style={styles.categoryName()}>{item.name}</Text>
              </Pressable>
              {isActive &&
                item.subCategory.map((subItem, subIndex) => {
                  return (
                    <Pressable
                      onPress={() =>
                        navigation.navigate('progressScreen', {
                          showAll: true,
                        })
                      }>
                      <Text style={styles.subItemText()}>{subItem.name}</Text>
                    </Pressable>
                  );
                })}
            </>
          );
        })}
        {show && (
          <Pressable
            onPress={() => {
              setShowTakeNote(!showTakeNote);
              setShow(false);
            }}
            style={styles.takeNoteView()}>
            <Text style={styles.textTakeNot()}>
              {noteVal.length > 0 ? noteVal : 'Medical Journal (take notes)'}
            </Text>
          </Pressable>
        )}
        {showTakeNote && (
          <View>
            <InputBox
              value={noteVal}
              onChangeText={value => {
                setNoteVal(value);
                setExtra(extra + 1);
              }}
              inputStyle={[styles.labelFieldText()]}
              mainContainerStyle={styles.inputMainContainer()}
            />

            <Button
              onPress={() => {
                setShow(true);
                setShowTakeNote(false);
              }}
              nameTx="appointment_reminder_screen.add"
              buttonStyle={styles.addButtonStyle()}
              buttonText={styles.textAddButton()}
            />
          </View>
        )}
      </Screen>
    </SafeAreaView>
  );
};
