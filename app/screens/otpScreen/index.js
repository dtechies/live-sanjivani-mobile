import React, {useState, useRef, useEffect} from 'react';
import {View, Pressable, Image, SafeAreaView, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {loginUser, userData, getOtp} from 'redux-actions';
import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size, color, IcArrowNext, IcCrossArrow, images} from 'theme';
import * as styles from './styles';

export const OtpScreen = props => {
  const dispatch = useDispatch();

  const [isRequest, setIsRequest] = useState(true);
  const [iscount, setIsCount] = useState(false);
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [otpArr, setOtpArr] = useState(0);
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

  const onLoginPress = async () => {
    let otpVal = firstDigit + secondDigit + thirdDigit + fourthDigit;
    setLoading(true);
    const loginBody = {
      mob_no: otpData ? otpData?.mob_no : '',
      otp: otpData ? otpVal : '',
    };
    // console.log('loginBody ==>', loginBody);
    const loginResponse = await dispatch(loginUser(loginBody));
    const res = loginResponse.payload;
    setLoading(false);
    // console.log('login res ==>', res);
    if (res.status) {
      dispatch(userData({userData: res.data.user, login: true}));
      console.log('login response data ==>', res);
      // toastMessage('Login SuccessFully');
      setTimeout(() => {
        navigation.navigate('bottomStackNavigation');
      }, 150);
    } else {
      setLoading(false);
      // toastMessage(res.message);
      setOtpErr(res.message);
    }
  };

  const onGetOtp = async () => {
    // setLoading(true);
    console.log('number', otpData.mob_no);
    const getOtpBody = {
      mob_no: otpData ? otpData?.mob_no : '',
    };
    console.log('getOtpBody ==>', getOtpBody);
    const getOtpResponse = await dispatch(getOtp(getOtpBody));
    const res = getOtpResponse.payload;
    console.log('getOtp res ==>', res);
    if (res.status) {
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
      setOtpErr(res.message);
    }
  };

  const requestNewOtp = () => {
    onGetOtp();
    // setCounter(30);
    // setIsRequest(true);
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
        console.log('currentTime ==> ', currentTime);
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
    // let time = moment(new Date()).format('mm:ss');
    // console.log('time', time);
    // var eventTime = '1366549200';
    // var currentTime = '1366547400';
    // console.log(currentTime, 'currentTime');
    // var time = eventTime - currentTime;
    // var duration = moment.duration(time * 1000, 'milliseconds');
    // var interval = 1000;

    // setInterval(function () {
    //   duration = moment.duration(
    //     duration.asMilliseconds() - interval,
    //     'milliseconds',
    //   );
    //   let val = moment(duration.asMilliseconds()).format('H[h]:mm[m]:ss[s]');
    //   console.log('value..', val);
    // }, interval);
  }, []);

  const validation = () => {
    if (
      firstDigit == '' ||
      secondDigit == '' ||
      thirdDigit == '' ||
      fourthDigit == ''
    ) {
      setOtpErr('please Enter OTP...');
    }
  };

  return (
    <SafeAreaView style={styles.container()}>
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
            firstDigit && secondDigit && thirdDigit && fourthDigit
              ? navigation.navigate('bottomStackNavigation')
              : validation();
            // onLoginPress()
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
