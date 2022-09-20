import React, {useState, useRef, useContext} from 'react';
import {SafeAreaView, Pressable, View, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch} from 'react-redux';

import {registerUser} from 'redux-actions';
import {
  Loader,
  Text,
  Button,
  Screen,
  InputBox,
  Header,
  Toast,
  CustomStatusBar,
} from 'components';
import {size, color} from 'theme';
import {genderVal, languageVal, countryCode} from 'json';
import {LocalizationContext} from '../../App';

import * as styles from './styles';

export const RegisterScreen = () => {
  const {t} = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [firstNm, setFirstNm] = useState('');
  const [firstNmErr, setFirstNmErr] = useState('');
  const [lastNm, setLastNm] = useState('');
  const [lastNmErr, setLastNmErr] = useState('');
  const [dobErr, setDobErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [gender, setGender] = useState('');
  const [genderErr, setGenderErr] = useState('');
  const [language, setLanguage] = useState('');
  const [languageErr, setLanguageErr] = useState('');
  const [countryCodeVal, setCountryCodeVal] = useState('+91');
  const [loading, setLoading] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [isColor1, setIsColor1] = useState(false);
  const [isColor2, setIsColor2] = useState(false);
  const toastRef = useRef();
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  let countryDropDown = true;
  const getCurrentDate = givenDate => {
    let day =
      givenDate.getDate() > 9 ? givenDate.getDate() : `0${givenDate.getDate()}`;
    let month =
      givenDate.getMonth() + 1 > 9
        ? givenDate.getMonth() + 1
        : `0${givenDate.getMonth() + 1}`;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;
    setSelectedDate(newDate);
    setShowDate(false);
    setDobErr('');
  };

  const onRegisterData = async () => {
    setLoading(true);
    const RegisterBody = {
      first_name: firstNm,
      last_name: lastNm,
      gender: gender,
      dob: selectedDate,
      mob_no: phone,
      email: email.toLowerCase(),
      language: language,
      country_code: countryCodeVal,
    };
    // console.log('RegisterBody ==>', RegisterBody);
    const RegisterResponse = await dispatch(registerUser(RegisterBody));
    let res = {status: false, message: 'Connection Error...!'};
    if (RegisterResponse.payload !== undefined) {
      res = RegisterResponse.payload;
    }
    // console.log('RES register ==>', RegisterResponse);
    if (res.status) {
      setLoading(false);
      // console.log('Register response data ==>', res.data);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('otpSelectionScreen', {
          mob_no: res.data.mob_no,
          country_code: countryCodeVal,
          email: email.toLowerCase(),
        });
        // navigation.navigate('otpScreen', {
        //   otpValue: {
        //     mob_no: res.data.mob_no,
        //     otp: res.data.otp,
        //     country_code: countryCodeVal,
        //   },
        // });
      }, 200);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const emailValidate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      setEmailErr('register_screen.emailError');
      return false;
    } else if (reg.test(email) === false) {
      setEmailErr('register_screen.invalidEmailError');
      return false;
    } else {
      setEmailErr('');
      return true;
    }
  };
  const validation = () => {
    let error = false;
    if (firstNm === '') {
      setFirstNmErr('register_screen.firstNameError');
      error = true;
    }
    if (lastNm === '') {
      setLastNmErr('register_screen.LastNameError');
      error = true;
    }
    if (gender === '') {
      setGenderErr('register_screen.genderError');
      error = true;
    }
    if (selectedDate === '') {
      setDobErr('register_screen.dobError');
      error = true;
    }
    let ans = emailValidate();
    if (!ans) {
      error = true;
    }
    if (phone === '') {
      setPhoneErr('register_screen.phoneNameError');
      error = true;
    } else if (phone.length < 10) {
      setPhoneErr('register_screen.invalidPhoneNameError');
      error = true;
    }
    if (language === '') {
      setLanguageErr('register_screen.languageError');
      error = true;
    }

    if (!error) {
      onRegisterData();
    }
  };

  return (
    <SafeAreaView style={styles.container()}>
      <Toast
        ref={toastRef}
        position="top"
        style={styles.toast()}
        fadeOutDuration={200}
        opacity={0.9}
      />
      {loading && <Loader />}
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={true}
        isLogoCenter={false}
        isHeading={true}
        isBlue={false}
        isCamera={true}
        title={'register_screen.title'}
      />
      <Screen
        bounces={false}
        style={styles.screenContainer()}
        enableResetScrollToCoords={false}>
        <InputBox
          placeHolderVal={'register_screen.first_name'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          placeholderTextColor={color.grayTxt}
          value={firstNm}
          onChangeText={text => {
            setFirstNm(text);
            setFirstNmErr('');
          }}
          maxLength={15}
        />
        {firstNmErr ? (
          <Text style={styles.errorText()} tx={firstNmErr} />
        ) : null}
        <InputBox
          placeHolderVal={'register_screen.last_name'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          placeholderTextColor={color.grayTxt}
          value={lastNm}
          onChangeText={text => {
            setLastNm(text);
            setLastNmErr('');
          }}
          maxLength={15}
        />
        {lastNmErr ? <Text style={styles.errorText()} tx={lastNmErr} /> : null}
        <Dropdown
          data={genderVal}
          labelTxField="label"
          valueField="value"
          defaultValue={{
            label: 'register_screen.select_gender',
            value: '',
          }}
          placeholder={t('register_screen.gender')}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle(isColor)}
          maxHeight={size.moderateScale(90)}
          containerStyle={styles.dropdownContainer()}
          value={gender}
          flatListProps={{
            bounces: false,
          }}
          isTxEnabled={true}
          onChange={item => {
            setGender(item.value);
            setGenderErr('');
            setIsColor(true);
          }}
          renderItem={item => {
            return (
              <View>
                <Text tx={item.label} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
        {genderErr ? <Text style={styles.errorText()} tx={genderErr} /> : null}
        <Pressable
          style={styles.dateMainView()}
          onPress={() => {
            setShowDate(true);
            setExtra(extra + 1);
          }}>
          <Text
            style={styles.textDate(selectedDate == '' ? 1 : 0)}
            tx={selectedDate == '' ? 'register_screen.dob' : ''}
            text={selectedDate == '' ? '' : selectedDate}
          />
          {showDate && (
            <DateTimePickerModal
              isVisible={showDate}
              mode="date"
              maximumDate={new Date()}
              onConfirm={val => getCurrentDate(val)}
              onCancel={() => {
                setShowDate(false);
                setExtra(extra + 1);
              }}
            />
          )}
        </Pressable>
        {dobErr ? <Text style={styles.errorText()} tx={dobErr} /> : null}
        <InputBox
          placeHolderVal={'register_screen.email'}
          keyboardType={'email-address'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer(true)}
          placeholderTextColor={color.grayTxt}
          value={email}
          onChangeText={text => {
            setEmail(text);
            setEmailErr('');
          }}
          maxLength={45}
        />
        {emailErr ? <Text style={styles.errorText()} tx={emailErr} /> : null}
        <View style={styles.countryCodeRowView()}>
          <Dropdown
            defaultValue={countryCode[0]}
            data={countryCode}
            labelField="label"
            valueField="value"
            placeholder={'+91'}
            dropdownPosition={'bottom'}
            style={styles.countryCodeDropdown()}
            placeholderStyle={styles.countryCodeLabelFieldText()}
            selectedTextStyle={styles.countryCodeSelectedOptionTextStyle(
              isColor1,
            )}
            maxHeight={size.moderateScale(60)}
            containerStyle={styles.countryCodeDropdownContainer()}
            flatListProps={{
              bounces: false,
            }}
            onChange={item => {
              setCountryCodeVal(item.label);
              setIsColor1(true);
            }}
            renderItem={item => {
              return (
                <View>
                  <Text
                    text={item.label}
                    style={styles.countryCodeInsideLabelFieldText()}
                  />
                  <View style={styles.countryCodeSeparator()} />
                </View>
              );
            }}
          />
          <InputBox
            value={phone}
            placeholderTextColor={color.grayIcon}
            placeholder={'XXXXXXXXXX'}
            keyboardType={'phone-pad'}
            btnName={'Request OTP'}
            maxLength={10}
            onChangeText={val => {
              setPhone(val.replace(/[^0-9]+/g, ''));
              setPhoneErr('');
              setExtra(extra + 1);
            }}
            inputStyle={styles.inputStyle()}
            mainContainerStyle={styles.inputMainContainer(countryDropDown)}
          />
        </View>
        {phoneErr ? <Text style={styles.errorText()} tx={phoneErr} /> : null}
        <Dropdown
          defaultValue={{
            label: 'register_screen.language',
            value: '',
          }}
          // defaultValue={{label: <Text tx={languageVal[0].label} />}}
          // placeholder={<Text tx={'register_screen.language'} />}
          data={languageVal}
          // labelTxField="label"
          labelTxField="label"
          valueField="value"
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle(isColor2)}
          maxHeight={size.moderateScale(56)}
          containerStyle={styles.dropdownContainer()}
          value={language}
          flatListProps={{
            bounces: false,
          }}
          isTxEnabled={true}
          onChange={item => {
            setLanguage(item.value);
            setLanguageErr('');
            setIsColor2(true);
          }}
          renderItem={item => {
            return (
              <View>
                <Text tx={item.label} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
        {languageErr ? (
          <Text style={styles.errorText()} tx={languageErr} />
        ) : null}

        {/* <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'register_screen.save'}
          onPress={() => {
            validation();
          }}
        /> */}
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'register_screen.next'}
          onPress={() => {
            validation();
          }}
        />
      </Screen>
    </SafeAreaView>
  );
};
