import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {SendOtp} from 'redux-actions';
import {
  Loader,
  Text,
  Button,
  Screen,
  InputBox,
  Header,
  Toast,
} from 'components';

import * as styles from './styles';

export const OtpSelectionScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [extra, setExtra] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otpMethod, setOtpMethod] = useState('');
  const [otpMethodErr, setOtpMethodErr] = useState(null);
  const [countryCodeVal, setCountryCodeVal] = useState('');
  const [isBack, setIsBack] = useState('');
  const [title, setTitle] = useState('otp_selection_screen.title');
  const [isId, setIsId] = useState(null);
  const [loading, setLoading] = useState(false);
  const toastRef = useRef();
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };

  const sendOtpData = async () => {
    if (otpMethod == '') {
      setOtpMethodErr('Please select at least one radio button !');
    } else {
      setLoading(true);
      const sendOtpBody = {
        mob_no: phone,
        otpMethod: otpMethod,
        id: isId,
        email: email.toLowerCase(),
        countryCode: countryCodeVal,
      };
      // console.log('sendOtpBody ==>', sendOtpBody);

      const sendOtpResponse = await dispatch(SendOtp(sendOtpBody));
      let res = {status: false, message: 'Connection Error...!'};
      if (sendOtpResponse !== undefined) {
        res = sendOtpResponse;
      }
      // console.log('RES sendOtpData data==>', sendOtpResponse);
      if (res.status) {
        setLoading(false);
        // console.log('sendOtpData response data ==>', res.data);
        toastMessage(res.message);
        setTimeout(() => {
          isBack
            ? navigation.navigate('profileDetailScreen', {mob_no: phone})
            : navigation.navigate('otpScreen', {
                otpValue: {
                  mob_no: phone,
                  otp: res.isTokenExpired.otp,
                  country_code: countryCodeVal,
                },
              });
        }, 200);
      } else {
        setLoading(false);
        toastMessage(res.message);
      }
    }
  };

  useEffect(() => {
    if (props.route.params) {
      setEmail(props.route.params.email);
      setPhone(props.route.params.mob_no);
      setCountryCodeVal(props.route.params.country_code);
      if (props.route.params.isProfile) {
        setTitle('otp_selection_screen.profile_user');
        setIsBack(true);
        if (props.route.params.id) {
          setIsId(props.route.params.id);
        }
      }
      if (props.route.params.isLogin) {
        // setIsBack(true);
        setTitle('otp_selection_screen.login_user');
      }
      // console.log('props.route.params ==>', props.route.params);
    }
  }, []);

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
        title={title}
      />
      <Screen
        bounces={false}
        style={styles.screenContainer()}
        enableResetScrollToCoords={false}>
        <Text
          style={styles.headingTx()}
          tx={'otp_selection_screen.headingTx'}
        />
        <Pressable
          style={styles.radioContainer()}
          onPress={() => {
            setOtpMethod('mail');
            setOtpMethodErr(null);
            setExtra(extra + 1);
          }}>
          <View style={styles.circleView(otpMethod === 'mail' ? true : false)}>
            <View
              style={styles.insideView(otpMethod === 'mail' ? true : false)}
            />
          </View>
          <Text style={styles.radioText()} tx={'otp_selection_screen.email'} />
        </Pressable>
        {otpMethod == 'mail' && (
          <View>
            <Text
              style={styles.headingTx(true)}
              tx={'otp_selection_screen.infoEmailTx'}
            />
            <View style={styles.linkContainer()}>
              <Pressable
                onPress={() =>
                  Linking.openURL('(https://livesanjivani.com/terms-of-use/')
                }>
                <Text
                  style={styles.labelLearn()}
                  tx={'otp_selection_screen.termsTx'}
                />
              </Pressable>
              <View style={styles.line()} />
              <Pressable
                onPress={() =>
                  Linking.openURL('https://livesanjivani.com/privacy-policy/')
                }>
                <Text
                  style={styles.labelLearn()}
                  tx={'otp_selection_screen.privacyPolicyTx'}
                />
              </Pressable>
            </View>
          </View>
        )}
        <Pressable
          style={styles.radioContainer()}
          onPress={() => {
            setOtpMethod('sms');
            setOtpMethodErr(null);
            setExtra(extra + 1);
          }}>
          <View style={styles.circleView(otpMethod === 'sms' ? true : false)}>
            <View
              style={styles.insideView(otpMethod === 'sms' ? true : false)}
            />
          </View>
          <Text
            style={styles.radioText()}
            tx={'otp_selection_screen.textMsg'}
          />
        </Pressable>
        {otpMethod == 'sms' && (
          <View>
            <Text
              style={styles.headingTx(true)}
              tx={'otp_selection_screen.infoTx'}
            />
            <View style={styles.linkContainer()}>
              <Pressable
                onPress={() =>
                  Linking.openURL('(https://livesanjivani.com/terms-of-use/')
                }>
                <Text
                  style={styles.labelLearn()}
                  tx={'otp_selection_screen.termsTx'}
                />
              </Pressable>
              <View style={styles.line()} />
              <Pressable
                onPress={() =>
                  Linking.openURL('https://livesanjivani.com/privacy-policy/')
                }>
                <Text
                  style={styles.labelLearn()}
                  tx={'otp_selection_screen.privacyPolicyTx'}
                />
              </Pressable>
            </View>
          </View>
        )}
        
        {otpMethodErr && <Text style={styles.errorMsg()}>{otpMethodErr}</Text>}
        {otpMethod === 'sms' && (
          
          <View style={styles.inputBoxMain()}>
            <Text style={styles.termsTx(true)}>
              {otpMethod === 'sms' ? 'Mobile number' : 'Email'}

            </Text>
            <InputBox
              inputStyle={styles.inputStyle()}
              mainContainerStyle={styles.inputMainContainer()}
              value={
                otpMethod === 'sms' ? `${countryCodeVal}  ${phone}` : email
              }
              editable={false}
            />
          </View>
        )}
        <Text
          style={styles.termsTx()}
          tx={'otp_selection_screen.infoVerifyTx'}
        />
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'otp_selection_screen.next'}
          onPress={() => {
            sendOtpData();
          }}
        />
      </Screen>
    </SafeAreaView>
  );
};
