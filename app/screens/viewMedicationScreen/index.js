import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getMedicineReminderProfile} from 'redux-actions';

import {useDispatch} from 'react-redux';

import {Loader, Text, Screen, InputBox, Header, ReminderCard} from 'components';
import {size, color, IcBtnPlus, SearchValNew} from 'theme';
import * as styles from './styles';
import {getMedicine} from 'json';

export const ViewMedicationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toastRef = useRef();
  const [extra, setExtra] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [medicineReminderData, setMedicineReminderData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [medicine, setMedicine] = useState(getMedicine);
  const [loading, setLoading] = useState(false);
  const route = useRoute();

  const toastMessage = msg => {
    toastRef.current.show(msg);
  };
  const reminderList =
    filteredData.length > 0 ? filteredData : medicineReminderData;
  const onSearch = val => {
    setSearchText(val);
    let text = val.toLowerCase() || val.toUpperCase();

    let FilteredValue = medicineReminderData.filter(item => {
      return item.medicine_name.toLowerCase().match(text);
    });

    setFilteredData(FilteredValue);
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

    const getMedicineReminderProfileResponse = await dispatch(
      getMedicineReminderProfile(),
    );
    const res = getMedicineReminderProfileResponse.payload;
    // console.log('getMedicineReminderData res ==>', res);
    if (res.status) {
      // console.log(
      //   'getMedicineReminderData list ==>',
      //   res.data.MedicineReminderProfileData,
      // );
      setMedicineReminderData(res.data.MedicineReminderProfileData);
      setFilteredData(res.data.MedicineReminderProfileData);
      setLoading(false);
      setExtra(extra + 1);
      toastMessage(res.message);

      // setReminderOption(res.data);
    } else {
      setLoading(false);
      toastMessage(res.message);
    }
  };

  useEffect(() => {
    getMedicineReminderData();
  }, []);

  return (
    <SafeAreaView style={styles.container()}>
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
        isCamera={false}
        title={'ViewMedicationScreen.title'}
      />
      <View style={styles.screenContainer()}>
        <View style={styles.searchBarRowView()}>
          <InputBox
            value={searchText}
            onChangeText={val => {
              onSearch(val);
            }}
            inputStyle={styles.buttonNew()}
            leftIcon={true}
            placeholderTextColor={color.blue}
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
          <Pressable
            style={styles.shadow()}
            onPress={() => {
              navigation.navigate('medicationReminderScreen');
            }}>
            <IcBtnPlus
              height={size.moderateScale(65)}
              width={size.moderateScale(65)}
            />
          </Pressable>
        </View>

        <View style={styles.headingMain()}>
          <Text
            tx={'ViewMedicationScreen.medicationList'}
            style={styles.ViewSubTitle()}
          />
        </View>
      </View>
      <Screen style={styles.screenContainer()}>
        {filteredData.length == 0 && (
          <Text style={styles.noData()}>No Records Found...</Text>
        )}
        <View style={styles.bottomStyle()}>
          {reminderList.map((val, i) => {
            return (
              <ReminderCard
                data={val}
                onWholeCardPress={() =>
                  navigation.navigate('checkMedicationReminderScreen', {
                    reminderData: val,
                    fromViewMedication: true,
                  })
                }
                onTogglePress={() => {
                  medicineReminderData[i].isActive = !val.isActive;

                  setTimeout(() => {
                    medicineReminderData.sort(function (x, y) {
                      return x.isActive === y.isActive
                        ? 0
                        : x.isActive
                        ? -1
                        : 1;
                    });
                    setMedicineReminderData(medicineReminderData);
                    setExtra(extra + 1);
                  }, 500);
                }}
              />
            );
          })}
        </View>
      </Screen>
    </SafeAreaView>
  );
};
