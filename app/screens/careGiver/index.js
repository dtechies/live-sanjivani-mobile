import React, {useState} from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Button, Header, InputBox, Screen} from 'components';
import * as styles from './styles';

export const CareGiver = () => {
  const navigation = useNavigation();

  const [extra, setExtra] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [firstNameCorrect, setFirstNameCorrect] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameCorrect, setLastNameCorrect] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneCorrect, setPhoneCorrect] = useState('');
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState('');
  const [nickName, setNickName] = useState('');
  const [nickNameCorrect, setNickNameCorrect] = useState('');

  const validation = () => {
    let error = false;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName === '') {
      setFirstNameCorrect('Please Enter First Name');
      error = true;
    }
    if (lastName === '') {
      setLastNameCorrect('Please Enter Last Name');
      error = true;
    }
    if (nickName === '') {
      setNickNameCorrect('Please select NickName');
      error = true;
    }
    if (email === '') {
      setEmailCorrect('Please Enter Email Address');
      error = true;
    } else if (reg.test(email) === false) {
      setEmailCorrect('Invalid email');
      error = true;
    } else {
      setEmailCorrect('');
    }
    if (phone === '') {
      setPhoneCorrect('Please Enter Phone number');
      error = true;
    } else if (phone.length < 10) {
      setPhoneCorrect('Invalid Phone number');
      error = true;
    } else {
      setPhoneCorrect('');
      setExtra(extra + 1);
    }

    if (!error) {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={styles.container()}>
      <Header
        leftOnPress={() => {
          navigation.goBack();
        }}
        isColor={true}
        isLeftArrow={true}
        isHeading={true}
        title={'careGiver_screen.title'}
      />
      <Screen withScroll>
        <View style={styles.mainViewStyle(1)}>
          <View style={styles.leftViewStyle()}>
            <Text
              style={styles.labelTextStyle()}
              tx={'careGiver_screen.firstName'}
            />
          </View>
          <View style={styles.rightViewStyle()}>
            <InputBox
              value={firstName}
              onChangeText={val => {
                setFirstName(val);
                setExtra(extra + 1);
                setFirstNameCorrect('');
              }}
              maxLength={15}
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.inputTextStyle()}
              containerStyle={styles.containerVal()}
            />
          </View>
        </View>
        {firstNameCorrect ? (
          <Text style={styles.textValidation()} text={firstNameCorrect} />
        ) : null}
        <View style={styles.mainViewStyle()}>
          <View style={styles.leftViewStyle()}>
            <Text
              style={styles.labelTextStyle()}
              tx={'careGiver_screen.lastName'}
            />
          </View>
          <View style={styles.rightViewStyle()}>
            <InputBox
              value={lastName}
              onChangeText={val => {
                setLastName(val);
                setLastNameCorrect('');
                setExtra(extra + 1);
              }}
              maxLength={15}
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.inputTextStyle()}
              containerStyle={styles.containerVal()}
            />
          </View>
        </View>
        {lastNameCorrect ? (
          <Text style={styles.textValidation()} text={lastNameCorrect} />
        ) : null}
        <View style={styles.mainViewStyle()}>
          <View style={styles.leftViewStyle()}>
            <Text
              style={styles.labelTextStyle()}
              tx={'careGiver_screen.contactPhone'}
            />
          </View>
          <View style={styles.rightViewStyle()}>
            <InputBox
              value={phone}
              onChangeText={val => {
                setPhone(val);
                setPhoneCorrect('');
                setExtra(extra + 1);
              }}
              maxLength={10}
              keyboardType={'number-pad'}
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.inputTextStyle()}
              containerStyle={styles.containerVal()}
            />
          </View>
        </View>
        {phoneCorrect ? (
          <Text style={styles.textValidation()} text={phoneCorrect} />
        ) : null}
        <View style={styles.mainViewStyle()}>
          <View style={styles.leftViewStyle()}>
            <Text
              style={styles.labelTextStyle()}
              tx={'careGiver_screen.emailId'}
            />
          </View>
          <View style={styles.rightViewStyle()}>
            <InputBox
              value={email}
              onChangeText={val => {
                setEmail(val);
                setEmailCorrect('');
                setExtra(extra + 1);
              }}
              // maxLength={20}
              keyboardType={'email-address'}
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.inputTextStyle()}
              containerStyle={styles.containerVal()}
            />
          </View>
        </View>
        {emailCorrect ? (
          <Text style={styles.textValidation()} text={emailCorrect} />
        ) : null}
        <View style={styles.mainViewStyle()}>
          <View style={styles.leftViewStyle()}>
            <Text
              style={styles.labelTextStyle()}
              tx={'careGiver_screen.nickName'}
            />
          </View>
          <View style={styles.rightViewStyle()}>
            <InputBox
              value={nickName}
              onChangeText={val => {
                setNickName(val);
                setNickNameCorrect('');
                setExtra(extra + 1);
              }}
              maxLength={30}
              mainContainerStyle={styles.inputMain()}
              inputStyle={styles.inputTextStyle()}
              containerStyle={styles.containerVal()}
            />
          </View>
        </View>
        {nickNameCorrect ? (
          <Text style={styles.textValidation()} text={nickNameCorrect} />
        ) : null}
      </Screen>
      <Button
        buttonStyle={styles.button()}
        buttonText={styles.buttonTxt()}
        nameTx={'careGiver_screen.save'}
        onPress={() => {
          validation();
        }}
      />
    </SafeAreaView>
  );
};
