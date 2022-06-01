import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
  BackHandler,
  Alert,
  ToastAndroid,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {Loader, Text, Screen, InputBox, Header} from 'components';
import {size, color, images, IcDot, IcBtnPlus, SearchValNew} from 'theme';
import * as styles from './styles';
import {dose, MainProfileDetail, DWMYData, AddNavData, getMedicine} from 'json';

export const ViewMedicationScreen = () => {
  const navigation = useNavigation();
  const [isLoading, seIsLoading] = useState(false);
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [detailProfile, setDetailProfile] = useState(MainProfileDetail);
  const [medicine, setMedicine] = useState(getMedicine);

  const [exitApp, setExitApp] = useState(0);
  const route = useRoute();
  // console.log('route', route.name);

  // const {token} = useSelector(state => ({
  //   token: state.userDataReducer.userDataResponse.userData.token,
  // }));

  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();

    let FilteredValue = getMedicine.filter(item => {
      return item.name.toLowerCase().match(text);
    });

    // console.log('FilteredValue', FilteredValue);
    setMedicine(FilteredValue);
  };
  // const backAction = () => {
  //   setTimeout(() => {
  //     setExitApp(0);
  //   }, 2000); // 2 seconds to tap second-time

  //   if (exitApp === 0) {
  //     setExitApp(exitApp + 1);
  //   } else if (exitApp === 1) {
  //     BackHandler.exitApp();
  //   }
  //   return true;
  // };
  // useEffect(() => {
  //   // console.log('navigation', navigation);
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => route.name === 'viewMedicationScreen' && backHandler.remove();
  // });
  const getMedicineReminderData = async () => {
    setLoading(true);
    const getMedicineReminderProfileHeader = {
      token: token,
    };
    console.log(
      'getMedicineReminderData ==>',
      getMedicineReminderProfileHeader,
    );
    return;
    const getMedicineReminderProfileResponse = await dispatch(
      getMedicineReminderProfile(getMedicineReminderProfileHeader),
    );
    const res = getMedicineReminderProfileResponse.payload;
    console.log('getMedicineReminderData res ==>', res);
    setLoading(false);
    if (res.status) {
      // console.log(
      //   'getMedicineReminderData list ==>',
      //   res.data.MedicineReminderProfileData,
      // );
      setMedicineReminderData(res.data.MedicineReminderProfileData);
      setExtra(extra + 1);
      toastMessage(res.message);

      // setReminderOption(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  // useEffect(() => {
  //   getMedicineReminderData();
  // }, []);

  return (
    <SafeAreaView style={styles.container()}>
      {isLoading && <Loader />}
      <Header
        isColor={true}
        isClose={false}
        isLogo={false}
        isLongArrowLeft={false}
        isLeftArrow={false}
        isLogoCenter={false}
        isHeading={true}
        isBlue={false}
        isCamera={false}
        title={'ViewMedicationScreen.title'}
      />
      <View style={styles.screenContainer()}>
        <View style={styles.mainProfileStyle()}>
          <Text
            tx={'ViewMedicationScreen.SubTitle'}
            style={styles.ViewTitle()}
          />
          <Pressable
            onPress={() => {
              navigation.navigate('medicationReminderScreen');
            }}>
            <IcBtnPlus
              height={size.moderateScale(66)}
              width={size.moderateScale(66)}
            />
          </Pressable>
        </View>
        <InputBox
          value={searchText}
          onChangeText={val => {
            onSearch(val);
          }}
          inputStyle={styles.buttonNew()}
          leftIcon={true}
          placeholderTextColor={color.dimGray}
          containerStyle={styles.mainInputStyle()}
          placeholder={'Search Medicine'}
          leftIconName={
            <SearchValNew
              height={size.moderateScale(20)}
              width={size.moderateScale(20)}
              fill={color.blue}
            />
          }
        />
        <View style={styles.headingMain()}>
          <Text
            tx={'ViewMedicationScreen.todaysMedication'}
            style={styles.ViewSubTitle()}
          />
        </View>
      </View>
      <Screen style={styles.screenContainer()}>
        <View style={styles.bottomStyle()}>
          {medicine.map((val, i) => {
            return (
              <Pressable
                style={styles.cardMain(val.isActive)}
                onPress={() => {
                  medicine[i].isActive = !val.isActive;
                  setExtra(extra + 1);
                }}
                key={i + 'viewMedication'}>
                <View style={styles.cardFirst()}>
                  <IcDot
                    height={size.moderateScale(12)}
                    width={size.moderateScale(12)}
                    fill={val.isActive ? color.darkBlue : color.blueLight}
                  />
                  <Text style={styles.cardHeading(val.isActive)}>
                    {val.name}
                  </Text>
                </View>
                <View>
                  <Text style={styles.cardText(val.isActive)}>{val.dis}</Text>
                </View>
              </Pressable>
            );
          })}
          {medicine.length == 0 && (
            <Text style={styles.noData()}>No Records Found...</Text>
          )}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
