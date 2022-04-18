import React, {useState} from 'react';
import {SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size, color} from 'theme';
import * as styles from './styles';
export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [isLoading, seIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date');
  const [showDate, setShowDate] = useState(false);
  const [editable, setEditable] = useState(false);

  const getCurrentDate = givenDate => {
    // console.log('A date has been picked: ', givenDate);
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    setSelectedDate(newDate);
    setShowDate(false);
  };
  const gender = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Screen bounces={false} style={styles.screenContainer()}>
        <TitleBox
          title={'Lets Create Your Profile'}
          titleContainerStyle={styles.titleTextContainer()}
        />
        <InputBox
          titleTx={'register_screen.first_name'}
          titleStyle={styles.labelFieldText()}
          placeholder={'First Name'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        <InputBox
          titleTx={'register_screen.last_name'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Last Name'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        <Text style={styles.labelFieldText()} tx="register_screen.gender" />

        <Dropdown
          data={gender}
          labelField="label"
          valueField="value"
          placeholder={'Select Gender'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(105)}
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
        <Text style={styles.labelFieldText()} tx="register_screen.dob" />
        <Pressable
          style={styles.dateMainView()}
          onPress={() => {
            setShowDate(true);
          }}>
          <Text style={styles.textDate()}>{selectedDate}</Text>
          {showDate && (
            <DateTimePickerModal
              isVisible={showDate}
              mode="date"
              onConfirm={val => getCurrentDate(val)}
              onCancel={() => {
                setShowDate(false);
                setExtra(extra + 1);
              }}
            />
          )}
        </Pressable>
        <InputBox
          titleTx={'register_screen.email'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Email'}
          keyboardType={'email-address'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        <InputBox
          titleTx={'register_screen.phone_Number'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Phone Number'}
          keyboardType={'number-pad'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        <InputBox
          titleTx={'register_screen.select_language'}
          titleStyle={styles.labelDisableText()}
          value={'English'}
          containerStyle={{borderColor: color.darkGrey}}
          editable={editable}
          inputStyle={styles.inputDisableStyle()}
          mainContainerStyle={styles.inputMainDisableContainer()}
        />
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          name={'NEXT'}
          onPress={() => alert('Signup')}
        />
      </Screen>
    </SafeAreaView>
  );
};
