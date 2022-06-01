import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {Loader, Text, Screen, Header, Toast} from 'components';
import {images} from 'theme';
import * as styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {MainProfileDetail} from 'json';
import {loginUser, userData, getOtp} from 'redux-actions';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new moment().format('YYYY-MM-DD'),
  );
  const [detailProfile, setDetailProfile] = useState(MainProfileDetail);
  const toastRef = useRef();
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const {userDetails = {}, age = ''} = useSelector(state => ({
    userDetails: state.userDataReducer.userDataResponse.userData,
    age: state.userDataReducer.userDataResponse.age,
  }));
  const onLogoutData = async () => {
    setLoading(true);
    const LogoutResponse = await dispatch(userData({login: false}));
    const res = LogoutResponse.payload;
    if (!res.login) {
      setTimeout(() => {
        navigation.navigate('authStackNavigation', {screen: 'loginScreen'});
      }, 150);
      setLoading(false);
      toastMessage('Logout Successfully');
    } else {
      setLoading(false);
      toastMessage('some Issue...please try again...');
    }
  };

  useEffect(() => {
    // console.log(userDetail.dob, 'dob', currentTime);
    // var a = moment(userDetail.dob);
    // var b = moment(currentTime);
    // var years = b.diff(a, 'year');
    // b.add(years, 'years');
    // console.log('demo ==>', years + ' years ');
    // console.log('UPDATE DOB ==>', userDetail.dob);
    // dispatch(userData({userData: userDetail, age: years}));
    console.log(': userData', userDetails);
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
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={false}
        isLogoCenter={true}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        name={userDetails.first_name + ' ' + userDetails.last_name}
        secName={age.toString() + " year's Old"}
        source={{uri: ''}}
      />
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        <View style={styles.mainProfileStyle()}>
          {detailProfile.map((item, i) => {
            // console.log('item', item.value);
            return (
              <Pressable
                key={i.toString()}
                onPress={() => {
                  if (item.value == 'Appointments') {
                    navigation.navigate('appointmentReminderScreen');
                  }
                  if (item.value == 'Medication Reminder') {
                    navigation.navigate('medicationReminderScreen');
                  }
                  if (item.value == 'Symptom Checker') {
                    navigation.navigate('symptomsScreen');
                  }
                  if (item.value == 'Medical Journal') {
                    navigation.navigate('medicalJournalScreen');
                  }
                  if (item.value == 'Help') {
                    navigation.navigate('HelpSupportScreen');
                  }
                  if (item.value == 'Account Settings') {
                    navigation.navigate('profileDetailScreen');
                  }
                  if (item.value == 'Logout') {
                    onLogoutData();
                  }
                }}
                style={
                  item.value == 'Logout'
                    ? styles.subProfileStyle(1)
                    : styles.subProfileStyle()
                }>
                {item.svg}
                <Text text={item.value} style={styles.profileText()} />
              </Pressable>
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
