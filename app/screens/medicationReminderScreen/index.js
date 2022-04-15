import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';

import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size, color, IcSearch} from 'theme';
import * as styles from './styles';
export const MedicationReminderScreen = () => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const medicineForm = [
    {label: 'Tablet', value: 'tablet'},
    {label: 'Pill', value: 'pill'},
    {label: 'Drop', value: 'drop'},
  ];
  const dose = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
  ];
  const measurementUnit = [
    {label: 'g', value: 'g'},
    {label: 'IU', value: 'IU'},
    {label: 'mcg', value: 'mcg'},
    {label: 'mL', value: 'mL'},
  ];
  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Screen bounces={false} style={styles.screenContainer()}>
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
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setValue(item.value);
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
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setValue(item.value);
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
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </Screen>
    </SafeAreaView>
  );
};
