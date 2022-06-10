import React, {useState, useRef, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AddCareGiver, userData} from 'redux-actions';
import {
  Text,
  Button,
  Header,
  InputBox,
  Screen,
  Toast,
  Loader,
} from 'components';
import * as styles from './styles';
import {color} from 'theme';

export const CareGiver = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [firstNameCorrect, setFirstNameCorrect] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameCorrect, setLastNameCorrect] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [phoneCorrect, setPhoneCorrect] = useState('');
  const [email, setEmail] = useState('');
  const [emailCorrect, setEmailCorrect] = useState('');
  const [nickName, setNickName] = useState('');
  const [nickNameCorrect, setNickNameCorrect] = useState('');
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
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
      saveData();
    }
  };

  const saveData = async () => {
    setLoading(true);
    const addCaregiverBody = {
      first_name: firstName,
      last_name: lastName,
      contact_no: phone,
      email: email,
      nick_name: nickName,
    };
    // console.log('addCaregiverBody ==>', addCaregiverBody);
    const AddCareGiverResponse = await dispatch(AddCareGiver(addCaregiverBody));
    let res = {status: false, message: 'Connection Error...!'};
    if (AddCareGiverResponse) {
      res = AddCareGiverResponse;
    }
    if (res.status) {
      setLoading(false);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.goBack();
      }, 150);
    } else {
      setLoading(false);
      toastMessage(res.message);
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
              placeholder={'Enter First Name'}
              value={firstName}
              onChangeText={val => {
                setFirstName(val);
                setExtra(extra + 1);
                setFirstNameCorrect('');
              }}
              maxLength={15}
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
              placeholder={'Enter Last Name'}
              value={lastName}
              onChangeText={val => {
                setLastName(val);
                setLastNameCorrect('');
                setExtra(extra + 1);
              }}
              maxLength={15}
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
              placeholder={'Enter Contact Number'}
              value={phone}
              onChangeText={val => {
                setPhone(val);
                setPhoneCorrect('');
                setExtra(extra + 1);
              }}
              maxLength={10}
              keyboardType={'number-pad'}
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
              placeholder={'Enter Email'}
              value={email}
              onChangeText={val => {
                setEmail(val);
                setEmailCorrect('');
                setExtra(extra + 1);
              }}
              keyboardType={'email-address'}
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
              placeholder={'Enter Nick Name'}
              value={nickName}
              onChangeText={val => {
                setNickName(val);
                setNickNameCorrect('');
                setExtra(extra + 1);
              }}
              maxLength={30}
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
