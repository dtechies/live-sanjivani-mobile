import React, {useState} from 'react';
import {SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size, color, IcSearch} from 'theme';
import * as styles from './styles';
import {
  medicineForm,
  dose,
  measurementUnit,
  reminderFrequency,
  reminderTime,
} from 'json';

export const MedicationReminderScreen = () => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [medicineValue, setMedicineValue] = useState(null);
  const [doseValue, setDoseValue] = useState(null);
  const [unitValue, setUniteValue] = useState(null);
  const [extra, setExtra] = useState(0);
  const [remindFrequencyValue, setRemindFrequencyValue] = useState(null);
  const [remindFreqDate, setRemindFreqDate] = useState('Select a Date');
  const [showDate, setShowDate] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [remindTimeValue, setRemindTimeValue] = useState(null);
  const [remindTime, setRemindTime] = useState('Select a Time');
  const [showTime, setShowTime] = useState(false);

  const getRemindFreqCurrentDate = givenDate => {
    // console.log('A date has been picked: ', givenDate);
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    // console.log('newDate: ', newDate);
    setRemindFreqDate(newDate);
    setShowDate(false);
  };
  const getRemindTime = givenTime => {
    // console.log('A Time picked: ', givenTime);
    var hours = givenTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    let newTime = givenTime.toTimeString().slice(0, 5) + ' ' + ampm;
    // console.log('newTime: ', newTime);
    setRemindTime(newTime);
    setShowTime(false);
  };
  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Screen
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.screenContainer()}>
        <TitleBox
          title={'Medication Reminder'}
          titleContainerStyle={styles.titleTextContainer()}
        />
        <InputBox
          titleTx={'medication_reminder_screen.referred_by'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Search'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          rightIcon={
            <IcSearch
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.purple}
            />
          }
        />
        <InputBox
          titleTx={'medication_reminder_screen.name_of_medicine'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Name of Medicine'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.medicine_form"
        />

        <Dropdown
          data={medicineForm}
          labelField="label"
          valueField="value"
          placeholder={'Select Form'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={medicineValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setMedicineValue(item.value);
            setIsFocus(false);
          }}
        />
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.dose"
        />
        <Dropdown
          data={dose}
          labelField="label"
          valueField="value"
          placeholder={'Dose'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={doseValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setDoseValue(item.value);
            setIsFocus(false);
          }}
        />

        <InputBox
          titleTx={'medication_reminder_screen.medicine_strength'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Medicine Strength'}
          keyboardType={'number-pad'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />

        <Dropdown
          data={measurementUnit}
          labelField="label"
          valueField="value"
          placeholder={'Unit of Measurement'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={unitValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setUniteValue(item.value);
            setIsFocus(false);
          }}
        />
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.reminder_frequency"
        />
        <Dropdown
          data={reminderFrequency}
          labelField="label"
          valueField="value"
          placeholder={'Select Frequency'}
          dropdownPosition={'auto'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={remindFrequencyValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setRemindFrequencyValue(item.value);
            setRemindFreqDate('Select a Date');
            setIsFocus(false);
          }}
        />
        {remindFrequencyValue === 'Alternate Day' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValue === 'Once A Week' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {remindFrequencyValue === 'Fixed Date' && (
          <Pressable
            onPress={() => {
              setShowDate(!showDate);
            }}>
            <Text style={styles.textDate()}>{remindFreqDate}</Text>
          </Pressable>
        )}
        {showDate && (
          <DateTimePickerModal
            isVisible={showDate}
            mode="date"
            onConfirm={val => getRemindFreqCurrentDate(val)}
            onCancel={() => {
              setShowDate(false);
              setExtra(extra + 1);
            }}
          />
        )}
        <Text
          style={styles.labelFieldText()}
          tx="medication_reminder_screen.reminder_time"
        />
        <Dropdown
          data={reminderTime}
          labelField="label"
          valueField="value"
          placeholder={'Select Time'}
          dropdownPosition={'auto'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(175)}
          containerStyle={styles.dropdownContainer()}
          value={remindTimeValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setRemindTimeValue(item.value);
            setRemindTime('Select a Time');
            setIsFocus(false);
          }}
        />
        {remindTimeValue === 'One Fixed Time' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'Before Meal' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {remindTimeValue === 'Before Bed' && (
          <Pressable
            onPress={() => {
              setShowTime(!showTime);
            }}>
            <Text style={styles.textDate()}>{remindTime}</Text>
          </Pressable>
        )}
        {showTime && (
          <DateTimePickerModal
            isVisible={showTime}
            mode="time"
            locale="en_GB"
            onConfirm={val => getRemindTime(val)}
            onCancel={() => {
              setShowDate(false);
              setExtra(extra + 1);
            }}
          />
        )}
        <InputBox
          titleTx={'medication_reminder_screen.pill_remaining'}
          titleStyle={styles.labelFieldText()}
          placeholder={'0'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        <Button
          onPress={() => navigation.navigate('addScreen')}
          nameTx="appointment_reminder_screen.add"
          buttonStyle={styles.addButtonStyle()}
          buttonText={styles.textAddButton()}
        />
      </Screen>
    </SafeAreaView>
  );
};
