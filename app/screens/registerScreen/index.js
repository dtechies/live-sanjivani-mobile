import React, {useState} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  Loader,
  Text,
  Button,
  TitleBox,
  Screen,
  InputBox,
  Header,
} from 'components';
import {size, color} from 'theme';
import * as styles from './styles';
import {genderval, languageVal} from 'json';
export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [isLoading, seIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [editable, setEditable] = useState(false);
  const [firstNm, setFirstNm] = useState('');
  const [firstNmErr, setFirstNmErr] = useState('');
  const [lastNm, setLastNm] = useState('');
  const [lastNmErr, setLastNmErr] = useState('');
  const [dob, setDob] = useState('');
  const [dobErr, setDobErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [gender, setGender] = useState('');
  const [genderErr, setGenderErr] = useState('');
  const [language, setLanguage] = useState('');
  const [languageErr, setLanguageErr] = useState('');

  const getCurrentDate = givenDate => {
    let day = givenDate.getDate();
    let month = givenDate.getMonth() + 1;
    let year = givenDate.getFullYear();
    let newDate = day + '-' + month + '-' + year;
    setSelectedDate(newDate);
    setShowDate(false);
    setDobErr('');
  };

  const emailValidate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      setEmailErr('Please Enter Email Address');
    } else if (reg.test(email) === false) {
      setEmailErr('Invalid email');
    } else {
      setEmailErr('');
    }
  };
  const validation = () => {
    if (firstNm === '') {
      setFirstNmErr('Please Enter First Name');
    }
    if (lastNm === '') {
      setLastNmErr('Please Enter Last Name');
    }
    if (gender === '') {
      setGenderErr('Please select Gender');
    }
    if (selectedDate === '') {
      setDobErr('Please select Date');
    }
    emailValidate();
    if (phone === '') {
      setPhoneErr('Please Enter Phone number');
    } else if (phone.length < 10) {
      setPhoneErr('Invalid Phone number');
    }

    if (language === '') {
      setLanguageErr('Please select Language');
    }
  };

  const editProfileDetails = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
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
          data={genderval}
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
            emailValidate();
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
            firstNm &&
            lastNm &&
            gender &&
            selectedDate &&
            email &&
            phone.length == 10 &&
            language
              ? editProfileDetails()
              : validation();
          }}
        />
      </Screen>
    </SafeAreaView>
  );
};
