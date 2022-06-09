import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Loader, Text, Screen, Header, Toast} from 'components';
import {size, color} from 'theme';
import * as styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {MainProfileDetail} from 'json';
import {userLogOut, userData, addEditPlayerId} from 'redux-actions';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [detailProfile, setDetailProfile] = useState(MainProfileDetail);
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const {userDetails = {}, age = ''} = useSelector(state => ({
    userDetails: state.userDataReducer.userDataResponse.userData,
    age: state.userDataReducer.userDataResponse.age,
  }));

  const removePlayerId = async () => {
    const removePlayerIdBody = {
      player_id: null,
    };
    const removePlayerIdResponse = await dispatch(
      addEditPlayerId(removePlayerIdBody),
    );
    const res = removePlayerIdResponse.payload;
    if (res.status) {
      clearData();
      await dispatch(userLogOut());
      await dispatch(userData({login: false}));
      navigation.navigate('authStackNavigation', {screen: 'loginScreen'});
    } else {
      toastMessage(res.message);
    }
  };
  const onLogoutData = async () => {
    removePlayerId();
  };

  const clearData = () => {
    detailProfile.map((val, i) => {
      detailProfile[i].selectedCard = false;
    });
    MainProfileDetail.map((val, i) => {
      MainProfileDetail[i].selectedCard = false;
    });
    setExtra(extra + 1);
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
        isLogoCenter={true}
        isHeading={true}
        name={
          userDetails != {}
            ? userDetails.first_name + ' ' + userDetails.last_name
            : 'UserName'
        }
        secName={age.toString() + " year's Old"}
        source={{uri: userDetails.image ? userDetails.image : ''}}
      />
      <Screen withScroll bounces={false} style={styles.screenContainer()}>
        <View style={styles.mainProfileStyle()}>
          {detailProfile.map((item, i) => {
            let ICON = item.svg;
            return (
              <Pressable
                key={i.toString()}
                onPress={() => {
                  clearData();
                  if (item.value == 'My Appointments') {
                    setTimeout(() => {
                      navigation.navigate('myAppointments');
                    }, 500);
                  }
                  if (item.value == 'My Medication') {
                    setTimeout(() => {
                      navigation.navigate('viewMedicationScreen');
                    }, 500);
                  }
                  if (item.value == 'Symptom Checker') {
                    setTimeout(() => {
                      navigation.navigate('symptomsScreen');
                    }, 500);
                  }
                  if (item.value == 'Medical Journal') {
                    setTimeout(() => {
                      navigation.navigate('medicalJournalScreen');
                    }, 500);
                  }
                  if (item.value == 'Help') {
                    setTimeout(() => {
                      navigation.navigate('HelpSupportScreen');
                    }, 500);
                  }
                  if (item.value == 'Account Settings') {
                    setTimeout(() => {
                      navigation.navigate('profileDetailScreen');
                    }, 500);
                  }
                  if (item.value == 'Logout') {
                    setTimeout(() => {
                      onLogoutData();
                    }, 500);
                  }
                  item.selectedCard = !item.selectedCard;
                  setExtra(extra + 1);
                }}
                style={
                  item.value == 'Logout'
                    ? styles.subProfileStyle(1, item.selectedCard)
                    : styles.subProfileStyle(0, item.selectedCard)
                }>
                <ICON
                  height={size.moderateScale(40)}
                  width={size.moderateScale(40)}
                  fill={item.selectedCard ? color.white : color.blue}
                />
                <Text
                  text={item.value}
                  style={styles.profileText(item.selectedCard)}
                />
              </Pressable>
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
