import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, Image, SafeAreaView, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {loginUser, userData, getOtp} from 'redux-actions';
import {Loader, Text, Button, Toast} from 'components';
import {size, color, IcCrossArrow, images} from 'theme';
import * as styles from './styles';

export const OtpScreen = props => {
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [isRequest, setIsRequest] = useState(true);
  const [iscount, setIsCount] = useState(false);
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');
  const [thirdDigit, setThirdDigit] = useState('');
  const [fourthDigit, setFourthDigit] = useState('');
  const [otpErr, setOtpErr] = useState('');
  const refInputFirst = useRef();
  const refInputSecond = useRef();
  const refInputThird = useRef();
  const refInputFourth = useRef();
  const [counter, setCounter] = useState(30);
  const [otpData, setOtpData] = useState();
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new moment().format('mm:ss'));
  const [currentDate, setCurrentDate] = useState(
    new moment().format('YYYY-MM-DD'),
  );
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const onLoginPress = async () => {
    setLoading(true);
    let otpVal = firstDigit + secondDigit + thirdDigit + fourthDigit;
    const loginBody = {
      mob_no: otpData ? otpData?.mob_no : '',
      otp: otpData ? otpVal : '',
    };
    // console.log('loginBody ==>', loginBody);
    const loginResponse = await dispatch(loginUser(loginBody));
    const res = loginResponse.payload;
    // console.log('login res ==>', res);
    if (res.status) {
      setLoading(false);
      var a = moment(res.data.user.dob);
      var b = moment(currentDate);
      var years = b.diff(a, 'year');
      b.add(years, 'years');
      dispatch(userData({userData: res.data.user, age: years, login: true}));
      // console.log('login response data ==>', res);
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('bottomStackNavigation', {screen: 'Today'});
      }, 150);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const onGetOtp = async () => {
    setLoading(true);
    const getOtpBody = {
      mob_no: otpData ? otpData?.mob_no : '',
    };
    // console.log('getOtpBody ==>', getOtpBody);
    const getOtpResponse = await dispatch(getOtp(getOtpBody));
    const res = getOtpResponse.payload;
    if (res.status) {
      console.log('getOtp res ==>', res.data.otp);
      setLoading(false);
      toastMessage(res.message);
      setCounter(30);
      setOtpErr('');
      setFirstDigit('');
      setSecondDigit('');
      setThirdDigit('');
      setFourthDigit('');
      setOtpErr('');
      setIsRequest(true);
      setIsCount(false);
      setExtra(extra + 1);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  const requestNewOtp = () => {
    onGetOtp();
    setCounter(30);
    setOtpErr('');
    setFirstDigit('');
    setSecondDigit('');
    setThirdDigit('');
    setFourthDigit('');
    setOtpErr('');
    setIsRequest(true);
    setIsCount(false);
    setExtra(extra + 1);
  };
  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        if (counter <= 10) {
          setCounter(`0${counter - 1}`);
        } else {
          setCounter(counter - 1);
        }
        setCurrentTime(currentTime - 1);
      }, 1000);

    if (counter == 0) {
      setOtpErr('');
      setIsRequest(false);
      setIsCount(true);
    }
  }, [counter]);
  useEffect(() => {
    if (props.route.params) {
      console.log('params', props.route.params.otpValue);
      setOtpData(props.route.params.otpValue);
    }
  }, []);

  const validation = () => {
    if (
      firstDigit == '' ||
      secondDigit == '' ||
      thirdDigit == '' ||
      fourthDigit == ''
    ) {
      setOtpErr('Please Enter OTP...');
    } else {
      onLoginPress();
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
      <View style={styles.screenContainer()}>
        <View style={styles.imageView()}>
          <Image
            style={{
              height: size.moderateScale(175),
              width: size.moderateScale(225),
            }}
            source={images.icSanjivaniLogoPng}
          />
        </View>
        <View style={styles.headingMain()}>
          <Text
            style={styles.firstHeadingTxt()}
            tx={'otp_screen.verification'}
          />
          <Text style={styles.subHeadingTxt()} tx={'otp_screen.otp'} />
        </View>
        <View style={styles.optMain()}>
          <View style={styles.otpSub()}>
            <TextInput
              value={firstDigit}
              maxLength={1}
              style={styles.otpInput()}
              onChangeText={text => {
                setFirstDigit(text);
                setOtpErr('');
              }}
              keyboardType="numeric"
              returnKeyType="next"
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace'
                  ? refInputFirst.current.focus()
                  : refInputSecond.current.focus();
              }}
              blurOnSubmit={false}
              ref={refInputFirst}
            />
            <TextInput
              value={secondDigit}
              maxLength={1}
              style={styles.otpInput()}
              onChangeText={text => {
                setSecondDigit(text);
              }}
              keyboardType="numeric"
              ref={refInputSecond}
              returnKeyType="next"
              blurOnSubmit={false}
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace'
                  ? refInputFirst.current.focus()
                  : refInputThird.current.focus();
              }}
            />
            <TextInput
              value={thirdDigit}
              maxLength={1}
              style={styles.otpInput()}
              onChangeText={text => {
                setThirdDigit(text);
              }}
              keyboardType="numeric"
              ref={refInputThird}
              returnKeyType="next"
              blurOnSubmit={false}
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace'
                  ? refInputSecond.current.focus()
                  : refInputFourth.current.focus();
              }}
            />
            <TextInput
              value={fourthDigit}
              maxLength={1}
              style={styles.otpInput()}
              onChangeText={text => {
                setFourthDigit(text);
              }}
              keyboardType="numeric"
              ref={refInputFourth}
              onKeyPress={({nativeEvent}) => {
                nativeEvent.key === 'Backspace'
                  ? refInputThird.current.focus()
                  : '';
              }}
            />
          </View>
          <Pressable
            onPress={() => {
              setFirstDigit('');
              setSecondDigit('');
              setThirdDigit('');
              setFourthDigit('');
              setOtpErr('');
              refInputFirst.current.focus();
              setExtra(extra + 1);
            }}
            style={{alignItems: 'flex-end'}}>
            <IcCrossArrow width={13} height={13} fill={color.grayIcon} />
          </Pressable>
        </View>
        {otpErr ? <Text style={styles.errorText()}>{otpErr}</Text> : null}
        <Button
          buttonStyle={styles.btnContinue()}
          buttonText={styles.btnContinueTxt()}
          nameTx={'otp_screen.continue'}
          onPress={() => {
            validation();
          }}
        />
        <View style={styles.optMain1()}>
          <Text style={styles.labelEnterOtp()} tx={'otp_screen.enterOtp'} />
          <Text style={styles.labelWait()} tx={'otp_screen.timerTxt'} />
        </View>
        <View style={styles.optMain1()}>
          <Button
            buttonStyle={styles.btnRegister(isRequest)}
            buttonText={styles.btnContinueTxt()}
            nameTx={'otp_screen.request'}
            disabled={isRequest}
            onPress={() => {
              requestNewOtp();
            }}
          />
          <View style={styles.btnWait(iscount)}>
            <Text style={styles.btnContinueTxt()} text={`00 : ${counter}`} />
          </View>
        </View>
        <Button
          buttonStyle={styles.btnContinue()}
          buttonText={styles.btnContinueTxt()}
          nameTx={'otp_screen.login'}
          onPress={() => navigation.navigate('loginScreen')}
        />
      </View>
    </SafeAreaView>
  );
};
