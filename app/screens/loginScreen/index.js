import React, {useState} from 'react';
import {View, Pressable, Image, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {images, IcArrowNext} from 'theme';
import {Loader, Text, Button, TitleBox, Screen, InputBox} from 'components';
import {size, color, IcSearch} from 'theme';
import * as styles from './styles';
export const LoginScreen = () => {
  const [subScreen, setsubScreen] = useState(false);
  const [mainScreen, setmainScreen] = useState(true);
  const [editable, setEditable] = useState(true);
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  const requestOtp = () => {
    setEditable(false);
    setmainScreen(false);
    setsubScreen(true);
  };

  return (
    <SafeAreaView style={styles.container()}>
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
        <Screen bounces={false} style={styles.screenContainer()}>
          <InputBox
            titleTx={'login_screen.number'}
            titleStyle={styles.labelFieldText()}
            placeholder={'Number'}
            value={number}
            onChangeText={value => {
              setNumber(value);
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
        <Screen bounces={false} style={styles.screenContainer()}>
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
            onPress={() => navigation.navigate('bottomStackNavigation')}
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
