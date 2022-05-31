import React, {useState} from 'react';
import {View, Pressable, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loginUser, userData, getOtp} from 'redux-actions';
import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size, color, IcArrowNext, images} from 'theme';
import * as styles from './styles';
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [subScreen, setsubScreen] = useState(false);
  const [mainScreen, setmainScreen] = useState(true);
  const [editable, setEditable] = useState(true);
  const [number, setNumber] = useState('');
  const [extra, setExtra] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState('');
  const navigation = useNavigation();

  const onGetOtp = async () => {
    // setLoading(true);
    // console.log('number', number);
    const getOtpBody = {
      mob_no: number,
    };
    // console.log('getOtpBody ==>', getOtpBody);
    // return;
    const getOtpResponse = await dispatch(getOtp(getOtpBody));
    const res = getOtpResponse.payload;
    // setLoading(false);
    // console.log('getOtp res ==>', res);
    // return;
    if (res.status) {
      // console.log('response data ==>', res.data.otp);
      setTimeout(() => {
        navigation.navigate('otpScreen', {
          otpValue: res.data,
        });
      }, 150);
      // dispatch(userData({userData: res.data.user, login: true}));
      // console.log('login response data ==>', res);
      // toastMessage('Login SuccessFully');
      // setTimeout(() => {
      //   navigation.navigate('bottomStackNavigation');
      // }, 300);
    } else {
      // setLoading(false);
      // toastMessage(res.message);
    }
  };

  return (
    <SafeAreaView style={styles.container()}>
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
          maxLength={10}
          onChangeText={val => {
            // mobileNumberValidation(val);
            setNumber(val);
            // console.log('val', val);
            setExtra(extra + 1);
          }}
          inputStyle={styles.inputTxt()}
          mainContainerStyle={styles.inputMain()}
          onRightIconPress={() => {
            // onGetOtp();
            if (number.length == 10) {
              navigation.navigate('otpScreen');
              setNumberCorrect('');
            } else {
              setNumberCorrect('Phone number should be equal to 10 digits');
            }
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
        <Pressable onPress={() => console.log('bhavya')}>
          <Text style={styles.labelOrTxt()} tx={'login_screen.learnMore'} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
