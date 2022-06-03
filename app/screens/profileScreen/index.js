import React, {useState, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Loader, Text, Screen, Header, Toast} from 'components';
// import {images} from 'theme';
import * as styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {MainProfileDetail} from 'json';
import {userData} from 'redux-actions';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
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
      toastMessage('some Issue Please try again...');
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
        name={
          userDetails != {}
            ? userDetails.first_name + ' ' + userDetails.last_name
            : 'UserName'
        }
        secName={age.toString() + " year's Old"}
        source={{uri: ''}}
      />
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        <View style={styles.mainProfileStyle()}>
          {detailProfile.map((item, i) => {
            return (
              <Pressable
                key={i.toString()}
                onPress={() => {
                  if (item.value == 'My Appointments') {
                    navigation.navigate('myAppointments');
                  }
                  if (item.value == 'My Medication') {
                    navigation.navigate('viewMedicationScreen');
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
