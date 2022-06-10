import React, {useState, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useDispatch} from 'react-redux';
import {userData, registerUser} from 'redux-actions';
import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Header,
  Toast,
} from 'components';
import {size, color} from 'theme';
import * as styles from './styles';
import {genderVal, languageVal} from 'json';
export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  // const [isLoading, seIsLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
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
  const [loading, setLoading] = useState(false);
  const toastRef = useRef();
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const getCurrentDate = givenDate => {
    let day =
      givenDate.getDate() > 9 ? givenDate.getDate() : `0${givenDate.getDate()}`;
    let month =
      givenDate.getMonth() + 1 > 9
        ? givenDate.getMonth() + 1
        : `0${givenDate.getMonth() + 1}`;
    let year = givenDate.getFullYear();
    let newDate = year + '-' + month + '-' + day;

    // console.log('givenDate', givenDate);
    // console.log('new date', newDate);
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
      email: email,
      language: language,
    };
    // console.log('RegisterBody ==>', RegisterBody);
    const RegisterResponse = await dispatch(registerUser(RegisterBody));
    let res = {status: false, message: 'Connection Error...!'};
    if (RegisterResponse) {
      res = RegisterResponse.payload;
    }
    if (res.status) {
      setLoading(false);
      // dispatch(userData({userData: res.data.user, login: true}));
      // console.log('Register response data ==>', res.data);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('otpScreen', {
          otpValue: {
            mob_no: res.data.mob_no,
            otp: res.data.otp,
          },
        });
      }, 200);
    } else {
      setLoading(false);
      toastMessage(res.message);
      // setOtpErr(res.message);
    }
  };

  const emailValidate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      setEmailErr('Please Enter Email Address');
      return false;
    } else if (reg.test(email) === false) {
      setEmailErr('Invalid email');
      return false;
    } else {
      setEmailErr('');
      return true;
    }
  };
  const validation = () => {
    let error = false;
    if (firstNm === '') {
      setFirstNmErr('Please Enter First Name');
      error = true;
    }
    if (lastNm === '') {
      setLastNmErr('Please Enter Last Name');
      error = true;
    }
    if (gender === '') {
      setGenderErr('Please select Gender');
      error = true;
    }
    if (selectedDate === '') {
      setDobErr('Please select Date');
      error = true;
    }
    let ans = emailValidate();
    if (!ans) {
      error = true;
    }
    if (phone === '') {
      setPhoneErr('Please Enter Phone number');
      error = true;
    } else if (phone.length < 10) {
      setPhoneErr('Invalid Phone number');
      error = true;
    }
    if (language === '') {
      setLanguageErr('Please select Language');
      error = true;
    }

    if (!error) {
      onRegisterData();
    }
  };

  // const editProfileDetails = () => {
  //   navigation.goBack();
  // };
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
      <Screen bounces={false} style={styles.screenContainer()}>
        <InputBox
          placeholder={'First Name'}
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
          <Text style={styles.errorText()}>{firstNmErr}</Text>
        ) : null}
        <InputBox
          placeholder={'Last Name'}
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
        {lastNmErr ? <Text style={styles.errorText()}>{lastNmErr}</Text> : null}
        <Dropdown
          data={genderVal}
          labelField="label"
          valueField="value"
          placeholder={'Gender'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(55)}
          containerStyle={styles.dropdownContainer()}
          value={gender}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setGender(item.value);
            setGenderErr('');
            setIsFocus(false);
          }}
          renderItem={item => {
            return (
              <View>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
        {genderErr ? <Text style={styles.errorText()}>{genderErr}</Text> : null}
        <Pressable
          style={styles.dateMainView()}
          onPress={() => {
            setShowDate(true);
            // setDobErr('');
            setExtra(extra + 1);
          }}>
          <Text style={styles.textDate(selectedDate == '' ? 1 : 0)}>
            {selectedDate == '' ? 'DOB' : selectedDate}
          </Text>
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
        {dobErr ? <Text style={styles.errorText()}>{dobErr}</Text> : null}
        <InputBox
          placeholder={'Email'}
          keyboardType={'email-address'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          placeholderTextColor={color.grayTxt}
          value={email}
          onChangeText={text => {
            setEmail(text);
            setEmailErr('');
            // emailValidate();
          }}
          maxLength={45}
        />
        {emailErr ? <Text style={styles.errorText()}>{emailErr}</Text> : null}
        <InputBox
          placeholder={'Phone Number'}
          keyboardType={'number-pad'}
          inputStyle={styles.inputStyle()}
          mainContainerStyle={styles.inputMainContainer()}
          placeholderTextColor={color.grayTxt}
          value={phone}
          maxLength={10}
          onChangeText={text => {
            setPhone(text);
            setPhoneErr('');
          }}
        />
        {phoneErr ? <Text style={styles.errorText()}>{phoneErr}</Text> : null}
        {/* <InputBox
          titleTx={'register_screen.select_language'}
          titleStyle={styles.labelDisableText()}
          value={'English'}
          containerStyle={styles.disableLanguage()}
          editable={editable}
          inputStyle={styles.inputDisableStyle()}
          mainContainerStyle={styles.inputMainDisableContainer()}
        /> */}
        <Dropdown
          data={languageVal}
          labelField="label"
          valueField="value"
          placeholder={'Language'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(56)}
          containerStyle={styles.dropdownContainer()}
          value={language}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setLanguage(item.value);
            setIsFocus(false);
            setLanguageErr('');
          }}
          renderItem={item => {
            return (
              <View>
                <Text text={item.value} style={styles.InsideLabelFieldText()} />
                <View style={styles.separator()} />
              </View>
            );
          }}
        />
        {languageErr ? (
          <Text style={styles.errorText()}>{languageErr}</Text>
        ) : null}

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
