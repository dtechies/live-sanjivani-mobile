import React, {useState, useRef} from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loginUser, userData} from 'redux-actions';
import {images, IcArrowNext} from 'theme';
import {Loader, Text, Button, Screen, InputBox, Toast} from 'components';
import {size, color} from 'theme';
import * as styles from './styles';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [subScreen, setSubScreen] = useState(false);
  const [mainScreen, setMainScreen] = useState(true);
  const [editable, setEditable] = useState(true);
  const [number, setNumber] = useState('');
  const [numberCorrect, setNumberCorrect] = useState('');
  const [loading, setLoading] = useState(false);
  const [extra, setExtra] = useState(0);

  const requestOtp = () => {
    number
      ? (setEditable(false), setMainScreen(false), setSubScreen(true))
      : setNumberCorrect('Phone number should be equal to 10 digits');
  };
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const onLoginPress = async () => {
    setLoading(true);

    const loginBody = {
      mob_no: number,
    };
    // console.log('loginBody ==>', loginBody);
    const loginResponse = await dispatch(loginUser(loginBody));
    const res = loginResponse.payload;
    setLoading(false);
    // console.log('login res ==>', res);

    if (res.status) {
      dispatch(userData({userData: res.data.user, login: true}));
      // console.log('login response data ==>', res);
      toastMessage('Login SuccessFully');
      setTimeout(() => {
        navigation.navigate('bottomStackNavigation');
      }, 300);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };
  const mobileNumberValidation = val => {
    setNumber(val);
    if (val.length !== 10) {
      setNumberCorrect('Phone number should be equal to 10 digits');
    } else {
      setNumberCorrect('');
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

      <View style={styles.imageView()}>
        <Image
          style={{
            height: size.moderateScale(150),
            width: size.moderateScale(150),
          }}
          source={images.icLogo}
        />
      </View>
      {mainScreen && (
        <Screen
          keyboardShouldPersistTaps={'handled'}
          bounces={false}
          style={styles.screenContainer()}>
          <InputBox
            titleTx={'login_screen.number'}
            titleStyle={styles.labelFieldText()}
            placeholder={'Number'}
            value={number}
            onChangeText={value => {
              mobileNumberValidation(value);
              setExtra(extra + 1);
            }}
            maxLength={10}
            keyboardType={'number-pad'}
            inputStyle={styles.inputStyle(editable)}
            mainContainerStyle={styles.inputMainContainer()}
            leftIcon={
              <Text
                style={styles.labelFieldText()}
                tx="login_screen.countryCode"
              />
            }
          />
          {numberCorrect ? (
            <Text style={styles.textValidation()} text={numberCorrect} />
          ) : null}
          <Button
            buttonStyle={styles.button()}
            buttonText={styles.buttonTxt()}
            nameTx={'login_screen.request_otp'}
            onPress={() => requestOtp()}
          />
          <Button
            buttonStyle={styles.button()}
            buttonText={styles.buttonTxt()}
            nameTx={'login_screen.register_new_user'}
            onPress={() => navigation.navigate('registerScreen')}
          />
          <View style={styles.linkView()}>
            <Text
              style={styles.labelFieldLinkText()}
              tx="login_screen.learnMore"
            />
            <IcArrowNext
              height={size.moderateScale(12)}
              width={size.moderateScale(12)}
              fill={color.mediumGreen}
            />
          </View>
        </Screen>
      )}
      {subScreen && (
        <Screen
          keyboardShouldPersistTaps={'handled'}
          bounces={false}
          style={styles.screenContainer()}>
          <InputBox
            titleTx={'login_screen.number'}
            titleStyle={styles.labelDisableText()}
            placeholder={'Number'}
            value={number}
            containerStyle={{borderColor: color.darkGrey}}
            placeholderTextColor={color.darkGrey}
            editable={editable}
            inputStyle={styles.inputDisableStyle()}
            mainContainerStyle={styles.inputMainDisableContainer()}
            leftIcon={
              <Text
                style={styles.labelDisableText()}
                tx="login_screen.countryCode"
              />
            }
          />
          <InputBox
            titleTx={'login_screen.otp'}
            titleStyle={styles.labelFieldText()}
            placeholder={'OTP'}
            maxLength={4}
            keyboardType={'number-pad'}
            inputStyle={styles.inputStyle(editable)}
            mainContainerStyle={styles.inputMainContainer()}
          />
          <Button
            buttonStyle={styles.button()}
            buttonText={styles.buttonTxt()}
            nameTx={'login_screen.request_new_otp'}
            onPress={() => requestOtp()}
          />
          <Button
            buttonStyle={styles.button()}
            buttonText={styles.buttonTxt()}
            nameTx={'login_screen.login'}
            onPress={() => {
              onLoginPress();
            }}
          />
          <View style={styles.linkView()}>
            <Text
              style={styles.labelFieldLinkText()}
              tx="login_screen.learnMore"
            />
            <IcArrowNext
              height={size.moderateScale(12)}
              width={size.moderateScale(12)}
              fill={color.mediumGreen}
            />
          </View>
        </Screen>
      )}
    </SafeAreaView>
  );
};
