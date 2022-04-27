import React, {useState} from 'react';
import {SafeAreaView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size} from 'theme';
import * as styles from './styles';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [isLoading, seIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date');
  const [dateCorrect, setDateCorrect] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [editable, setEditable] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameCorrect, setFirstNameCorrect] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameCorrect, setLastNameCorrect] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCorrect, setPhoneCorrect] = useState('');
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState('');
  const [genderType, setGenderType] = useState('');
  const [genderCorrect, setGenderCorrect] = useState('');
  const getCurrentDate = givenDate => {
    // console.log('A date has been picked: ', givenDate);
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    setSelectedDate(newDate);
    setDateCorrect('');
    setShowDate(false);
  };
  const gender = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];
  const firstNameValidation = val => {
    setFirstName(val);
    if (val === '') {
      setFirstNameCorrect('Enter your first name');
    } else {
      setFirstNameCorrect('');
    }
  };
  const lastNameValidation = val => {
    setLastName(val);
    if (val === '') {
      setLastNameCorrect('Enter your last name');
    } else {
      setLastNameCorrect('');
    }
  };
  const mobileNumberValidation = val => {
    setPhone(val);
    if (val.length !== 10) {
      setPhoneCorrect('Phone number should be equal to 10 digits');
    } else {
      setPhoneCorrect('');
    }
  };
  const emailValidation = val => {
    setEmail(val);
    {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(val) === false) {
        setEmailCorrect('Enter valid email');

        return false;
      } else {
        setEmailCorrect('');
      }
    }
  };
  const onNextPressValidation = () => {
    (firstName === '' && setFirstNameCorrect('Enter your first name')) ||
      (lastName === '' && setLastNameCorrect('Enter your last name')) ||
      (phone === '' &&
        setPhoneCorrect('Phone number should be equal to 10 digits')) ||
      (email === '' && setEmailCorrect('Enter valid email')) ||
      (genderType === '' && setGenderCorrect('Select gender')) ||
      (selectedDate === 'Date' && setDateCorrect('Select date'));
  };
  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Screen bounces={false} style={styles.screenContainer()}>
        <TitleBox
          titleTx={'register_screen.title_register'}
          titleContainerStyle={styles.titleTextContainer()}
        />
        <InputBox
          titleTx={'register_screen.first_name'}
          titleStyle={styles.labelFieldText()}
          placeholder={'First Name'}
          value={firstName}
          onChangeText={val => {
            firstNameValidation(val);
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {firstNameCorrect ? (
          <Text style={styles.textValidation()} text={firstNameCorrect} />
        ) : null}
        <InputBox
          titleTx={'register_screen.last_name'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Last Name'}
          value={lastName}
          onChangeText={val => {
            lastNameValidation(val);
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {lastNameCorrect ? (
          <Text style={styles.textValidation()} text={lastNameCorrect} />
        ) : null}
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
          value={genderType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setGenderType(item.value);
            setGenderCorrect('');
            setIsFocus(false);
          }}
        />
        {genderCorrect ? (
          <Text style={styles.textValidation()} text={genderCorrect} />
        ) : null}
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
        {dateCorrect ? (
          <Text style={styles.textValidation()} text={dateCorrect} />
        ) : null}
        <InputBox
          titleTx={'register_screen.email'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Email'}
          value={email}
          onChangeText={val => {
            emailValidation(val);
            setExtra(extra + 1);
          }}
          keyboardType={'email-address'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {emailCorrect ? (
          <Text style={styles.textValidation()} text={emailCorrect} />
        ) : null}
        <InputBox
          titleTx={'register_screen.phone_Number'}
          titleStyle={styles.labelFieldText()}
          placeholder={'Phone Number'}
          value={phone}
          onChangeText={val => {
            mobileNumberValidation(val);
            setExtra(extra + 1);
          }}
          maxLength={10}
          keyboardType={'number-pad'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {phoneCorrect ? (
          <Text style={styles.textValidation()} text={phoneCorrect} />
        ) : null}
        <InputBox
          titleTx={'register_screen.select_language'}
          titleStyle={styles.labelDisableText()}
          value={'English'}
          containerStyle={styles.disableLanguage()}
          editable={editable}
          inputStyle={styles.inputDisableStyle()}
          mainContainerStyle={styles.inputMainDisableContainer()}
        />
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'register_screen.next'}
          onPress={() =>
            firstName && lastName && phone && email
              ? navigation.navigate('selectServiceScreen', {
                  first_name: firstName,
                  last_name: lastName,
                  gender: genderType,
                  dob: selectedDate,
                  mob_no: phone,
                  email: email,
                  language: 'english',
                })
              : onNextPressValidation()
          }
        />
      </Screen>
    </SafeAreaView>
  );
};
