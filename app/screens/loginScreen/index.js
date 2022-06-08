import React, {useState, useRef} from 'react';
import {View, Pressable, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getOtp} from 'redux-actions';
import {Loader, Text, Button, InputBox, Toast} from 'components';
import {size, images} from 'theme';
import * as styles from './styles';
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [number, setNumber] = useState('7046892973');
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState('');
  const toastRef = useRef();

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const onGetOtp = async () => {
    setLoading(true);
    const getOtpBody = {
      mob_no: number,
    };
    // console.log('otp', getOtpBody);
    const getOtpResponse = await dispatch(getOtp(getOtpBody));
    // console.log('getOtpResponse ====', getOtpResponse);
    const res = getOtpResponse.payload;
    // console.log('res', res);
    if (res.status) {
      // console.log('response data loginn ==>', res.data);
      setLoading(false);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('otpScreen', {
          otpValue: res.data,
        });
      }, 150);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const validateMobile = () => {
    if (number.length == 10) {
      setNumberCorrect('');
      onGetOtp();
    } else {
      setNumberCorrect('Phone number should be equal to 10 digits');
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
            height: size.moderateScale(175),
            width: size.moderateScale(225),
          }}
          source={images.icSanjivaniLogoPng}
        />
      </View>

      <View style={styles.screenContainer()}>
        <Text style={styles.labelLoginTxt()} tx={'login_screen.number'} />
        <InputBox
          value={number}
          placeholder={'XXXXXXXXXX'}
          keyboardType={'phone-pad'}
          withButton={true}
          btnName={'Request OTP'}
          maxLength={10}
          onChangeText={val => {
            // mobileNumberValidation(val);
            setNumber(val);
            setNumberCorrect('');
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputTxt()}
          mainContainerStyle={styles.inputMain()}
          onRightIconPress={() => {
            validateMobile();
          }}
          defaultNumber={
            <Text
              style={styles.labelFieldText()}
              tx="login_screen.countryCode"
            />
          }
        />
        <View style={styles.validationView()}>
          {numberCorrect ? (
            <Text style={styles.textValidation()} text={numberCorrect} />
          ) : null}
        </View>
        <Text style={styles.labelOrTxt()} tx={'login_screen.or'} />
        <Button
          buttonStyle={styles.btnRegister()}
          buttonText={styles.btnRegisterTxt()}
          nameTx={'login_screen.register_new_user'}
          onPress={() => navigation.navigate('registerScreen')}
        />
        <Pressable onPress={() => {}}>
          <Text style={styles.labelOrTxt()} tx={'login_screen.learnMore'} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
