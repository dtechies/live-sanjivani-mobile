import React, {useState, useRef} from 'react';
import {View, Pressable, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getOtp} from 'redux-actions';
import Dropdown from '../../components/Dropdown/src/components/Dropdown';
import {Loader, Text, Button, InputBox, Toast} from 'components';
import {size, images, color} from 'theme';
import {countryCode} from 'json';
import * as styles from './styles';
export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toastRef = useRef();
  const [number, setNumber] = useState('');
  const [countryCodeVal, setCountryCodeVal] = useState('+91');
  const [extra, setExtra] = useState(0);
  const [loading, setLoading] = useState(false);
  const [numberCorrect, setNumberCorrect] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const onGetOtp = async () => {
    setLoading(true);
    const getOtpBody = {
      mob_no: number,
      country_code: countryCodeVal,
    };
    console.log('BODYYYY res..', getOtpBody);
    const getOtpResponse = await dispatch(getOtp(getOtpBody));
    let res = {status: false, message: 'Connection Error...!'};
    if (getOtpResponse) {
      res = getOtpResponse.payload;
    }
    if (res.status) {
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
        <View style={styles.rowView()}>
          <Dropdown
            defaultValue={{label: '+91', value: '+91'}}
            data={countryCode}
            labelField="label"
            valueField="value"
            dropdownPosition={'bottom'}
            style={styles.dropdown()}
            placeholderStyle={styles.labelFieldText()}
            selectedTextStyle={styles.selectedOptionTextStyle()}
            maxHeight={size.moderateScale(60)}
            containerStyle={styles.dropdownContainer()}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            flatListProps={{
              bounces: false,
            }}
            onChange={item => {
              setCountryCodeVal(item.value);
              setIsFocus(false);
            }}
            renderItem={item => {
              return (
                <View>
                  <Text
                    text={item.value}
                    style={styles.InsideLabelFieldText()}
                  />
                  <View style={styles.separator()} />
                </View>
              );
            }}
          />
          <InputBox
            value={number}
            placeholderTextColor={color.grayIcon}
            placeholder={'XXXXXXXXXX'}
            keyboardType={'phone-pad'}
            withButton={true}
            btnName={'Request OTP'}
            maxLength={10}
            onChangeText={val => {
              setNumber(val.replace(/[^0-9]+/g, ''));
              setNumberCorrect('');
              setExtra(extra + 1);
            }}
            inputStyle={styles.inputTxt()}
            mainContainerStyle={styles.inputMain()}
            onRightIconPress={() => {
              validateMobile();
            }}
          />
        </View>
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
