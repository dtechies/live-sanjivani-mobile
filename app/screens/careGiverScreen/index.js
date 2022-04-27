import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Screen, InputBox, Button, TitleBox} from 'components';
import * as styles from './styles';

export const CareGivenScreen = () => {
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

  const firstNameValidation = val => {
    setFirstName(val);
    if (val === '') {
      setFirstNameCorrect('Enter your first name');
    } else {
      setFirstNameCorrect('');
    }
  };
  const lastNameValidation = val => {
    setLastName(val);
    if (val === '') {
      setLastNameCorrect('Enter your last name');
    } else {
      setLastNameCorrect('');
    }
  };
  const mobileNumberValidation = val => {
    setPhone(val);
    if (val.length !== 10) {
      setPhoneCorrect('Phone number should be equal to 10 digits');
    } else {
      setPhoneCorrect('');
    }
  };
  const emailValidation = val => {
    setEmail(val);
    {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(val) === false) {
        setEmailCorrect('Enter valid email');

        return false;
      } else {
        setEmailCorrect('');
      }
    }
  };
  const nickNameValidation = val => {
    setNickName(val);
    if (val === '') {
      setNickNameCorrect('Enter nick name');
    } else {
      setNickNameCorrect('');
    }
  };
  const onAddPressValidation = () => {
    (firstName === '' && setFirstNameCorrect('Enter your first name')) ||
      (lastName === '' && setLastNameCorrect('Enter your last name')) ||
      (phone === '' &&
        setPhoneCorrect('Phone number should be equal to 10 digits')) ||
      (email === '' && setEmailCorrect('Enter valid email')) ||
      (nickName === '' && setNickNameCorrect('Enter nick name'));
  };
  return (
    <SafeAreaView style={styles.full()}>
      <Screen
        style={styles.container()}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <TitleBox
          titleContainerStyle={styles.titleStyle()}
          titleTx={'care_given_screen.title'}
        />
        <InputBox
          titleTx={'care_given_screen.first_name'}
          placeholder={'enter first name'}
          value={firstName}
          onChangeText={val => {
            firstNameValidation(val);
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {firstNameCorrect ? (
          <Text style={styles.textValidation()} text={firstNameCorrect} />
        ) : null}
        <InputBox
          titleTx={'care_given_screen.last_name'}
          placeholder={'enter last name'}
          value={lastName}
          onChangeText={val => {
            lastNameValidation(val);
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {lastNameCorrect ? (
          <Text style={styles.textValidation()} text={lastNameCorrect} />
        ) : null}
        <InputBox
          titleTx={'care_given_screen.contact_phone'}
          placeholder={'enter contact number'}
          value={phone}
          onChangeText={val => {
            mobileNumberValidation(val);
            setExtra(extra + 1);
          }}
          maxLength={10}
          keyboardType={'numeric'}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {phoneCorrect ? (
          <Text style={styles.textValidation()} text={phoneCorrect} />
        ) : null}
        <InputBox
          titleTx={'care_given_screen.email'}
          placeholder={'enter email'}
          value={email}
          onChangeText={val => {
            emailValidation(val);
            setExtra(extra + 1);
          }}
          keyboardType={'email-address'}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {emailCorrect ? (
          <Text style={styles.textValidation()} text={emailCorrect} />
        ) : null}
        <InputBox
          titleTx={'care_given_screen.nick_name'}
          placeholder={'enter nick name'}
          value={nickName}
          onChangeText={val => {
            nickNameValidation(val);
            setExtra(extra + 1);
          }}
          inputStyle={[styles.labelFieldText()]}
          mainContainerStyle={styles.inputMainContainer()}
        />
        {nickNameCorrect ? (
          <Text style={styles.textValidation()} text={nickNameCorrect} />
        ) : null}

        <Button
          // onPress={() => navigation.navigate('addScreen')}
          onPress={() =>
            firstName && lastName && phone && email && nickName
              ? navigation.navigate('addScreen')
              : onAddPressValidation()
          }
          nameTx="care_given_screen.add"
          buttonStyle={styles.addButtonStyle()}
          buttonText={styles.textAddButton()}
        />
      </Screen>
    </SafeAreaView>
  );
};
