import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, TitleBox, Screen, Loader, Toast} from 'components';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {registerUser, userData} from 'redux-actions';

import {size} from 'theme';
import {selectServiceList} from 'json';
import * as styles from './styles';
export const SelectServiceScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = props.route.params && props.route.params;

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const onSignUpPress = async () => {
    setLoading(true);

    const signupBody = {
      first_name: params.first_name,
      last_name: params.last_name,
      gender: params.gender,
      dob: params.dob,
      mob_no: params.mob_no,
      email: params.email,
      language: params.language,
      is_medicine_reminder:
        value === 'all' || value === 'get medicine reminder' ? true : false,
      is_appointment_reminder:
        value === 'all' || value === 'get appointment reminder' ? true : false,
    };
    // console.log('signupBody ==>', signupBody);

    const signupResponse = await dispatch(registerUser(signupBody));
    const res = signupResponse.payload;
    // console.log('signup response ==>', res);
    setLoading(false);

    if (res.status) {
      // console.log('signup response data ==>', res.data);
      dispatch(userData({userData: res.data, login: true}));
      toastMessage(res.message);
      setTimeout(() => {
        navigation.navigate('bottomStackNavigation', {
          screen: 'Add',
          params: {screen: 'addScreen', params: {showType: value}},
        });
      }, 300);
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

      <TitleBox
        titleTx={'select_service_screen.title_select_service'}
        titleContainerStyle={styles.titleTextContainer()}
      />
      <Screen
        keyboardShouldPersistTaps={'handled'}
        bounces={false}
        contentContainerStyle={styles.screenContainer()}>
        <Dropdown
          data={selectServiceList}
          labelField="label"
          valueField="value"
          placeholder={'Select Services'}
          dropdownPosition={'bottom'}
          style={styles.dropdown()}
          placeholderStyle={styles.labelFieldText()}
          selectedTextStyle={styles.selectedOptionTextStyle()}
          maxHeight={size.moderateScale(160)}
          containerStyle={styles.dropdownContainer()}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          flatListProps={{
            bounces: false,
          }}
          onChange={item => {
            setValue(item.value);
            // console.log('service', item.value);
            setIsFocus(false);
          }}
        />
        <Button
          buttonStyle={styles.button()}
          buttonText={styles.buttonTxt()}
          nameTx={'select_service_screen.next'}
          onPress={() => onSignUpPress()}
        />
      </Screen>
    </SafeAreaView>
  );
};
